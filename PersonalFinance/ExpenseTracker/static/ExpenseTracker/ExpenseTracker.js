function display_pdf(file){
    $('#pdf_preview').add("embed").attr("src", URL.createObjectURL(file))
    console.log(URL.createObjectURL(file))
}

$(function () {
    var show_diagnose_pdf = JSON.parse(document.getElementById('show_diagnose_pdf').textContent);
    var show_uploaded_pdf = JSON.parse(document.getElementById('show_uploaded_pdf').textContent);

    if (show_diagnose_pdf){
        var url = window.location.href + "/highlighted_pdf"
        $('#pdf_preview').add("embed").attr("src", url)
        console.log("show_diagnose_pdf")
    }
    if (show_uploaded_pdf){
        var url = window.location.href + "/original_pdf"
        $('#pdf_preview').add("embed").attr("src", url)
        console.log("show_uploaded_pdf")
    }

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