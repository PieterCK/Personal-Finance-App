$(function() {
    const csrftoken = Cookies.get('csrftoken');
    // Default Page : home_view
    var other_pages = $("div.page_view")
    other_pages.hide();
    $("div#home_view").show()

    // Navigation Menu
    $("button.nav_button").each(function(){
        $(this).click(function(){
            // Show clicked page, hide all other
            other_pages.hide();
            var clicked_page = "div#"+$(this).attr("id")
            $(clicked_page).show()
            

            // [TODO] AJAX Call based on page
            if ($(this).attr("id")==="bankstatement_view") {
                $("#bankstatement_input").change( function(){
                    var uploaded_file = $(this).prop('files')
                    if (uploaded_file[0].type !== "application/pdf") {
                        alert("Please Upload PDF File!")
                        location.reload()
                    } else {
                        $('#pdf_preview').add("embed").attr("src", URL.createObjectURL(uploaded_file[0]) )
                    }
                    console.log(URL.createObjectURL(uploaded_file[0]))
                })
            }
        });
    })

    
});