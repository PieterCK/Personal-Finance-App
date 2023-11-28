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
    <v-table 
      fixed-header
      fixed-footer
      hover
      rounded
      height="500px"
    >
        <thead>
            <tr >
              <th>
                <input
                  class="text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  type="checkbox"
                  id="checkboxCheckedNoLabel"
                  value=""
                  aria-label="..."
                  v-model="selectAll" 
                  @change="toggleAllCheckboxes"
                  />
              </th>
              <th v-for="header in headers" :key="header.key" scope="col" class="px-1 py-1 font-semibold">
                  {{ header.title }}
              </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items" :key="item.pk" class="bg-white dark:bg-gray-800">
              <td>
                <input
                class="w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                type="checkbox"
                  id="checkboxCheckedNoLabel"
                  value=""
                  aria-label="..."
                  :checked="item.select"
                  @change="updateSelect(item, $event.target.checked)"
                  />
              </td>
              <td  scope="row" class="px-1 py-1 font-small text-gray-900 text-sm whitespace-nowrap dark:text-white">
                {{ item.date }}
              </td>
              <td  scope="row" class="px-1 text-gray-900 text-sm	font-thin dark:text-white">
                  {{ item.info }}
              </td>
              <td  scope="row" class="px-1 text-gray-900 text-sm	font-thin dark:text-white">
                {{ item.entry }}
              </td>
              <td v-if="item.entry == 'Debit'" scope="row" class="px-1 font-bold py-1 text-sm text-rose-400 whitespace-nowrap dark:text-white">
                  - {{formatPrice(item.amount)}}
              </td>
              <td v-else scope="row" class="px-1 py-1 font-semibold text-sm text-green-700 font-small whitespace-nowrap dark:text-white">
                    {{formatPrice(item.amount)}}
              </td>
              <td  scope="row" class="px-1 py-1 font-small text-gray-900 text-sm font-weight-regular whitespace-wrap dark:text-white">
                  {{ item.details }}
              </td>
              <td >
                  <select data-te-select-init 
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    :value="item.account_type"
                    @change="updateAccountType(item, $event.target.value)"
                    >
                    <option v-for="(category, index) in account_types" :key="index" :value="category">{{category}}</option>
                  </select>
              </td>
            </tr>
        </tbody>
    </v-table>
  </v-sheet>
  </template>

  <script>
    import TableHeaderCard from '../TableHeaderCard.vue';
    import SnackBar from '../SnackBar.vue';
    import { formatPrice } from '../Utils/utils';
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
          selectAll:false,
          snackBarObj:{
            trigger:false,
            dialog:"Please select and label transactions first!",
          },
          tableIsLoading:false,
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
        formatPrice,
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
          let selectedItems = this.items.filter((item) => item.select);
          const selectedItemCount = selectedItems.length;
          
          // Validate user have selected items
          if (this.items.length === 0 || selectedItemCount < 1) {
            this.$refs.errorSnackbar.popSnackBar("Please Select or Load Transactions First!");
            this.tableIsLoading = false;
            return;
          }
          
          // Prepare data format to be sent to server
          selectedItems = this.items
            .filter((item) => item.select)
            .map(({ pk, account_type, bank_code}) => ({
              pk,
              account_type,
              bank_code
            }));
          // Warn user of the data about to be submmitted
          let result
          if (selectedItems.every((item) => item.account_type)) {
            result = await this.showConfirmationModal(this.$refs.confirmSubmissionModal, "Confirm Submission!", "You have unlabeled transactions! Are you sure you want to submit the selected items?");
          } else if (selectedItemCount < this.items.length) {
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