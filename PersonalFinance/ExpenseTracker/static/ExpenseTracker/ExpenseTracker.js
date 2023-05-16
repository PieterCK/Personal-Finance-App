function display_pdf(file){
    $('#pdf_preview').add("embed").attr("src", URL.createObjectURL(file))
    console.log(URL.createObjectURL(file))
}

$(function () {
    
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

    $("#display_highlighted_pdf").click(function () {
        var url = window.location.href + "/highlighted_pdf"
        $('#pdf_preview').add("embed").attr("src", url)
        

        // // Render PDF using PDF.js
        // const BASE64_PDF = JSON.parse(document.getElementById('highlighted_pdf').textContent);
        // var pdfData = atob(BASE64_PDF.replace(/^"+|"+$/g, ""))
        // var pdfjsLib = window['pdfjs-dist/build/pdf'];
        // pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';
        // console.log(pdfData)
        // // Using DocumentInitParameters object to load binary data.
        // var loadingTask = pdfjsLib.getDocument({data: pdfData});
        // loadingTask.promise.then(function(pdf) {
        // console.log('PDF loaded');
        
        // // Fetch the first page
        // var pageNumber = 1;
        // pdf.getPage(pageNumber).then(function(page) {
        //     console.log('Page loaded');
            
        //     var scale = 1;
        //     var viewport = page.getViewport({scale: scale});

        //     // Prepare canvas using PDF page dimensions
        //     var canvas = document.getElementById('highlighted_pdf_preview');
        //     var context = canvas.getContext('2d');
        //     canvas.height = viewport.height;
        //     canvas.width = viewport.width;

        //     // Render PDF page into canvas context
        //     var renderContext = {
        //     canvasContext: context,
        //     viewport: viewport
        //     };
        //     var renderTask = page.render(renderContext);
        //     renderTask.promise.then(function () {
        //     console.log('Page rendered');
        //     });
        // });
        // }, function (reason) {
        // // PDF loading error
        // console.error(reason);
        // });
    })
});