//UI Compontnents Nav Bar
ed_home.addEventListener("click",function(){
   console.log("User clicked Perinatal Education" + ed_home);
});

month_xr.addEventListener("click",function(){
    console.log("User clicked Mothly Chest X-Ray" + month_xr);
});

month_art.addEventListener("click",function(){
    console.log("User clicked Monthly Article" + month_art);
});

// X-Ray drop down components

xr_drop.addEventListener("click", function(){
    console.log("User clicked dropdown to select x-ray" + xr_drop);
})

february19.addEventListener("change",function(){
    console.log("User selected February 2019" + february19);
});

march19.addEventListener("change",function(){
    console.log("User selected March 2019" + march19);
});

april19.addEventListener("change",function(){
    console.log("User selected April 2019" + april19);
});

may19.addEventListener("change",function(){
    console.log("User selected May 2019" + may19);
});

june19.addEventListener("change",function(){
    console.log("User selected June 2019" + june19);
});

// Submission form submit button

submit_b.addEventListener("click",function(){
    console.log("User clicked Submit on the form" + submit_b)
});