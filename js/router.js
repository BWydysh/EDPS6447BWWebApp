// Toggles page views from Nav Bar
function router(value) {
    hide_all_views();
    switch (value){
        case "education_main":
            education_main.classList.remove("d-none");
            break;

        case "xray_app":
            xray_app.classList.remove("d-none");
            break;

        case "article_window":
            article_window.classList.remove("d-none");
            break;
    }
}

function hide_all_views(){
    education_main.classList.add("d-none");
    xray_app.classList.add("d-none");
    article_window.classList.add("d-none");
}

//Toggle x-ray images
