function toggle_elements_view(elements, state){
    console.log(elements)
    if (Array.isArray(elements)){
        elements.forEach(function(element){
            console.log(element)
            element.toggle(state)
        })
    }else{
        elements.each(function(){
            $(this).toggle(state)
        })
    }   
}
function display_pdf(query_selector , url){
    query_selector.add("embed").attr("src", url)
}

