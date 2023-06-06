function toggle_elements_view(elements, state){
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
    query_selector.find('embed').remove();
    var embedElement = $('<embed src="' + url + '" width="500" height="400" class="rounded-lg" type="application/pdf">');
    query_selector.append(embedElement);
}

