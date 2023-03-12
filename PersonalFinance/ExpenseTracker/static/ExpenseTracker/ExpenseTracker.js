$(function() {
    const csrftoken = Cookies.get('csrftoken');
    // Default Page : home_view
    $("div#home_view").show()

    // Navigation Menu
    $("button.nav_button").each(function(){
        $(this).click(function(){
            // Show clicked page, hide all other
            var other_pages = $("div.page_view")
            other_pages.hide();

            var clicked_page = "div#"+$(this).attr("id")
            $(clicked_page).show()

            // [TODO] AJAX Call based on page

        });
    })

    
});