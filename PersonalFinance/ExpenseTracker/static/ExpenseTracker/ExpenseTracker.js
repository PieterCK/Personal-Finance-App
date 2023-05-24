function display_pdf(file){
    $('#pdf_preview').add("embed").attr("src", URL.createObjectURL(file))
    console.log(URL.createObjectURL(file))
}

$(function () {
    var show_pdf = JSON.parse(document.getElementById('show_diagnose_pdf').textContent);

    if (show_pdf){
        var url = window.location.href +"/"+show_pdf
        $('#pdf_preview').add("embed").attr("src", url)
    }
    if (show_pdf === "highlighted"){
        $('#myModal').modal('show');
    }

    $('#closeModal').click(function () {
        $('#myModal').modal('hide');
    });

    // Handle Bankstatemen Form
    $("form#bankstatement_form").change(()=>{
        var bankstatement_form_inputs = $("form#bankstatement_form input")
        console.log(bankstatement_form_inputs)
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
    $("#bankstatement_form input").change(function () {
        var uploaded_file = $(this).prop('files')
        if (uploaded_file[0].type !== "application/pdf") {
            alert("Please Upload PDF File!")
            location.reload()
        } else {
            display_pdf(uploaded_file[0])
        }
    })
    
});