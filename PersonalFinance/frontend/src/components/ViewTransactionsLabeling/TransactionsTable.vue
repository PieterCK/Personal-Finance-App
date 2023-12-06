  <template>
    <v-sheet
    color="grey"
    outlined
    rounded
    shaped
    elevation="24"
  >
  <TableHeaderCard
    @response="(msg) => msg?this.validateFormSubmission():null"
    :isLoading="this.tableIsLoading"
  >
  </TableHeaderCard>
  <SnackBar
    ref="errorSnackbar"
  ></SnackBar>
  <YesNoModal
  ref="confirmSubmissionModal"
  ></YesNoModal>
  <v-data-table 
    v-model="selectedItems"
    :items="items"
    :headers="headers"
    height="450"
    item-value="pk"
    show-select
    density="compact"
  >
    <template v-slot:item.amount="{ item }">
      {{formatCurrency(item.amount)}}
    </template>
    <template v-slot:item.account_type="{ item }">
      <v-select 
        v-model="item.account_type" 
        :items="account_types"
        density="compact"
        >
      </v-select>
    </template>
  </v-data-table>
  </v-sheet>
  
  </template>

  <script>
    import TableHeaderCard from '../TableHeaderCard.vue';
    import SnackBar from '../SnackBar.vue';
    import { formatCurrency } from '../Utils/utils';
    import YesNoModal from '../YesNoModal.vue';

    export default {
      components:{
        TableHeaderCard,
        SnackBar,
        YesNoModal
      },
      emits: ['loadTransactions', 'submitTransactions'],
      data () { 
        return {
          attrs:{
            class: 'mb-6',
            boilerplate: true,
            elevation: 2,
          },
          dialog:false,
          formIsValid:true,
          selectedItems:[],
          categories:[],
          snackBarObj:{
            trigger:false,
            dialog:"Please select and label transactions first!",
          },
          tableIsLoading:false,
        }
      },
      computed:{
        selectedCount(){
          return `${this.selectedItems.length} / ${this.items.length} Selected`
        }
      },
      props:{
        headers:[], 
        items:[],
        unlabeled_transactions:{},
        account_types:[]
      },
      mounted(){
        if(this.unlabeled_transactions){
          this.loadUnlabeledTransactions()
        }
      },
      methods:{
        toggleAllCheckboxes() {
          this.items.forEach(item => {
            item.select = this.selectAll;
          });
        },
        formatCurrency,
        async showConfirmationModal(modalRef, title, text) {
          return new Promise((resolve) => {
            modalRef.toggleModal({
              title: title,
              text: text,
              resolve: resolve, // Pass the resolve function to the child component
            });
          });
        },
        updateSelect(item, value) {
          item.select = value;
          this.$emit('updateItem', item);
        },
        updateAccountType(item, value) {
          item.account_type = value;
          this.$emit('updateItem', item);
        },
        async loadUnlabeledTransactions(){
            const result = await this.showConfirmationModal(this.$refs.confirmSubmissionModal, "You Have Unlabeled Transactions!", "Load unlabeled transactions?");
            if (result) {
              this.$emit('loadTransactions',
              this.unlabeled_transactions.start_period, 
              this.unlabeled_transactions.end_period);
            }
        },
        async validateFormSubmission() {
          this.tableIsLoading = true;
          // Validate user have selected items
          if (this.items.length < 1 || this.selectedItems.length < 1) {
            this.$refs.errorSnackbar.popSnackBar("Please Select or Load Transactions First!");
            this.tableIsLoading = false;
            return;
          }
          
          // Prepare data format to be sent to server
          let selectedItems = this.items
            .filter((item) => this.selectedItems.includes(item.pk))
            .map(({ pk, account_type, bank_code}) => ({
              pk,
              account_type,
              bank_code
            }));
            console.log(selectedItems)
          // Warn user of the data about to be submmitted
          let result
          if (selectedItems.every((item) => item.account_type)) {
            result = await this.showConfirmationModal(this.$refs.confirmSubmissionModal, "Confirm Submission!", "You have unlabeled transactions! Are you sure you want to submit the selected items?");
          } else if (this.selectedItems.length < this.items.length) {
            result = await this.showConfirmationModal(this.$refs.confirmSubmissionModal, "Confirm Submission!", "You haven't selected all of the items yet! Are you sure you want to submit the selected items?");
          } else {
            result = await this.showConfirmationModal(this.$refs.confirmSubmissionModal, "Confirm Submission!", "Looks good! Click 'yes' to save.");
          }
          if (result) {
            this.$refs.errorSnackbar.popSnackBar("Saving");
            this.$emit('submitTransactions', selectedItems);
          } else{
            this.$refs.errorSnackbar.popSnackBar("Cancled");
          }
        }
      }
    }
  </script>
