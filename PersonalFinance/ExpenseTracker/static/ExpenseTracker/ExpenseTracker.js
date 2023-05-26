function display_pdf(file){
    $('#pdf_preview').add("embed").attr("src", URL.createObjectURL(file))
}

function display_pdf_api(show_pdf){
    if (show_pdf === "original"){
        var url = window.location.href +"/"+show_pdf
        $('#pdf_preview').add("embed").attr("src", url)
    }
    if (show_pdf === "highlighted"){
        $('#myModal').modal('show');
    }

}

function toggle_bankstatement_forms(state){
    var bankstatement_form =  $("#bankstatement_form")
    var diagnose_form = $("#diagnose_form")

    if(state){
        bankstatement_form.show();
        diagnose_form.hide()
    }else{
        bankstatement_form.hide();
        diagnose_form.show()
    }
}

function on_submit_file(data){
    if (!data.is_valid){
        toggle_bankstatement_forms()
    }
    
}

$(function () {
    $("#bankstatement_form input").change(function () {
        var uploaded_file = $(this).prop('files')
        if (uploaded_file[0].type !== "application/pdf") {
            alert("Please Upload PDF File!")
            location.reload()
        } else {
            display_pdf(uploaded_file[0])
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
                display_pdf_api(data.show_pdf)
                
            },
            error: function(data) {
                console.log(data)
            }
        });
    })

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
    
    $('#closeModal').click(function () {
        $('#myModal').modal('hide');
    });
});