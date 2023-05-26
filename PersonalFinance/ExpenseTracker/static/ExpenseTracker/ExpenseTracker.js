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

function toggle_elements_view(elements, state){
    elements.each(function(){
        $(this).toggle(state)
    })
}

function toggle_bankstatement_forms(state){
    var bankstatement_form =  $("#bankstatement_form")
    var bankstatement_preview =  $("#bankstatement_preview")
    toggle_elements_view(bankstatement_form, state)
    toggle_elements_view(bankstatement_preview, !state)
}

function on_submit_file(data){
    display_pdf_api(data.show_pdf)

    if (!data.is_valid){
        toggle_bankstatement_forms(false)
    }
}

$(function () {
    toggle_bankstatement_forms(true)
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
                on_submit_file(data)
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