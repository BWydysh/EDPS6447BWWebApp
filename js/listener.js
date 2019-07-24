//UI Compontnents Nav Bar
ed_home.addEventListener("click", function () {
    console.log("User clicked Perinatal Education" + ed_home);
    router("education_main");
});

month_xr.addEventListener("click", function () {
    console.log("User clicked Mothly Chest X-Ray" + month_xr);
    router("xray_app");
});

month_art.addEventListener("click", function () {
    console.log("User clicked Monthly Article" + month_art);
    router("article_window");
});

// X-Ray drop down components

select_xr.addEventListener("click", function () {
    console.log("User clicked dropdown to select x-ray" + select_xr);
});

xr_drop.addEventListener("input", function () {
    getJSON();
    if (xr_drop.value != 0) {
        console.log(xr_drop.value - 1);
        console.log("url('" + data[xr_drop.value - 1].image + ".jpg');");
        var background_url = "url('../" + data[xr_drop.value - 1].image + ".jpg')";
        //jumbo_xr.style.background = background_url;
        let root = document.documentElement;
        root.style.setProperty('--url_name', background_url);
        //$("#jumbo_xr").css('background-image',"../"+data[xr_drop.value-1].image+".jpg");
        console.log(background_url);
    } else {
        let root = document.documentElement;
        root.style.setProperty('--url_name', 'url("../assets/1x/xr_holder.png")');
    }
});

february19.addEventListener("click", function () {
    console.log("User selected February 2019" + february19);
});

march19.addEventListener("click", function () {
    console.log("User selected March 2019" + march19);
});

april19.addEventListener("click", function () {
    console.log("User selected April 2019" + april19);
});

may19.addEventListener("click", function () {
    console.log("User selected May 2019" + may19);
});

june19.addEventListener("click", function () {
    console.log("User selected June 2019" + june19);
});

// Submission form submit button

submit_b.addEventListener("click", function () {
    console.log("User clicked Submit on the form" + submit_b);
    get_form_data();
});

// Article drop down function

art_drop.addEventListener("input", function () {
    getJSON();
    console.log(art_drop.value-1);
    console.log(data[art_drop.value-1 ]);
    console.log(data);
    var pdf = data[art_drop.value-1 ].article;
    pdf_view.src = pdf;
});