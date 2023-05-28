class TogglePageForms{
    forms = {
        "bankstatement" : $("#bankstatement_form"),
        "diagnose" : $("#diagnose_form")
    }
    reset_view() {
        Object.values(this.forms).forEach(form => {
          toggle_elements_view(form, false);
        });
      }
    bankstatement_view(){
        this.reset_view()
        toggle_elements_view(this.forms.bankstatement, true)
        console.log("toggling bankstatement view: ", this.forms)
    }
    diagnose_view(){
        this.reset_view()
        toggle_elements_view(this.forms.diagnose, true)
        console.log("toggling diagnose view: ", this.forms.diagnose)
    }
}
var togglePageForms;
$(function () {
    setup_initial_view()

    bankstatement_form_mechanism()

    diagnose_form_mechanism()

    modal_mechanism()
    
    // Default Page : home_view
    var other_pages = $("div.page_view")
    other_pages.hide();
    $("div#home_view").show()

    // Navigation Menu
    $("button.nav_button").each(function () {
        const csrftoken = Cookies.get('csrftoken');
        $(this).click(function () {
            // Show clicked page, hide all other
            other_pages.hide();
            var clicked_page = "div#"+$(this).attr("id")
            $(clicked_page).show()
            

            // Bank Statement Page
            if ($(this).attr("id") === "bankstatement_view") {

                // feature: preview & check PDF
                                
                
                // [CONTINUE]: Bank Statement feature
            }
        });
    })
});

function setup_initial_view(){
    togglePageForms = new TogglePageForms();
    togglePageForms.bankstatement_view()

    toggle_elements_view($("#parsed_result_div"), false)
    var show_pdf = JSON.parse(document.getElementById('show_pdf').textContent);

    if (show_pdf){
        display_pdf_api(show_pdf)
    }

}

function bankstatement_form_mechanism(){
    $("#bankstatement_form input").change(function () {
        var uploaded_file = $(this).prop('files')[0]

        if (uploaded_file.type !== "application/pdf") {
            alert("Please Upload PDF File!")
            location.reload()
        } else {
            var file_url = URL.createObjectURL(uploaded_file)
            let pdf_frame = $("#pdf_preview")
            display_pdf(pdf_frame, file_url)
        }
    });

    var bankstatement_form =  $("#bankstatement_form")
    bankstatement_form.submit(function (event) {
        var csrftoken = Cookies.get('csrftoken');
        event.preventDefault();
        var formData = new FormData(); // Create a new FormData object

        // Append the uploaded file and other form data to the FormData object
        formData.append('uploaded_file', bankstatement_form.find('input[type=file]')[0].files[0]);
        formData.append('bank', bankstatement_form.find('select[name=bank]').val());
        
        $.ajax({
            url: bankStatementUrl,
            type: 'POST',
            headers: {'X-CSRFToken': csrftoken},
            mode: 'same-origin',
            data: formData,
            processData: false, 
            contentType: false,
            success: function(data) {
                on_submit_file(data)
            },
            error: function(data) {
                console.log(data)
            }
        });
    })
}

function diagnose_form_mechanism(){
    var diagnose_form =  $("#diagnose_form")
    diagnose_form.submit(function (event) {
        var csrftoken = Cookies.get('csrftoken');
        event.preventDefault();
        var formData = new FormData();

        formData.append('input_value', diagnose_form.find('input[name=keywords]').val());
        $.ajax({
            url: bankStatementUrl,
            type: 'POST',
            headers: {'X-CSRFToken': csrftoken},
            mode: 'same-origin',
            data: formData,
            processData: false, 
            contentType: false,
            success: function(data) {
                on_submit_file(data)
            },
            error: function(data) {
                console.log(data)
            }
        });
    })
}

function on_submit_file(data){
    display_pdf_api(data.show_pdf)
    // toggle_elements_view($("#parsed_result_div"), true)
    var popup_title = "Success!"
    var debit_difference = data.transaction_data.actual_balance.mutasi_db - data.transaction_data.stated_balance.mutasi_db
    var credit_difference = data.transaction_data.actual_balance.mutasi_cr - data.transaction_data.stated_balance.mutasi_cr
    var popup_message = "debit difference: "+debit_difference+" credit difference: "+credit_difference
    
    if (!data.is_valid){
        togglePageForms.diagnose_view()
        popup_title = "Error"
    } else{
        // TogglePageForms.confirm_view
    }

    var parsed_result_frame = $("embed#parsed_result_preview")
    let pdf_frame = $('#pdf_preview')
    var parsed_result_url = window.location.href +"/api/parsed_transactions_view"
    display_pdf(pdf_frame, parsed_result_url)
    $("#modal_popup_title").html(popup_title)
    $("#modal_popup_body").html(popup_message)
    $('#myModal').modal('show');
}

function display_pdf_api(show_pdf){
    var pdf_url = window.location.href +"/api/display_pdf/"+show_pdf
    let pdf_frame = $('#pdf_preview')
    display_pdf(pdf_frame , pdf_url)
}

function modal_mechanism(){
    $('#closeModal').click(function () {
        $('#myModal').modal('hide');
    });
}

