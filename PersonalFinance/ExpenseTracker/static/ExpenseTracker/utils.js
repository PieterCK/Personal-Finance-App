function toggle_elements_view(elements, state){
    elements.each(function(){
        $(this).toggle(state)
    })
}
function display_pdf(query_selector , url){
    query_selector.attr("src", url)
}

