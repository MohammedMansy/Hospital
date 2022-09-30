
$(document).ready(function(){
    let mysidebar = $("#sidebar").innerHeight();
    let mynavbar = $("#mynavbar").innerHeight();
   let mywindow =  $(window).outerHeight();
    $("#header").height( (mywindow - 20) - ( mysidebar + mynavbar)); 
})

$("h5").css({ color:"#13C5DD"});

$("p").css("color","#848E9F");
$("i").css("color","#13C5DD");
$("small").css("color","red !important");

$("a[href^='#']").click(function(){
     let linkattrb = $(this).attr("href");
     let secction = $(linkattrb).offset().top;
     $("html , body").animate({scrollTop:secction},2000);
 })

 /* Start Button Up */
 let myUp = $("#goUp");
 $(window).scroll(function(){
    let scrolling = $(window).scrollTop();
    if(scrolling >= 200 ){
        myUp.fadeIn(500);
    } else
    {
        myUp.fadeOut(500);
    } 
 });
 
 myUp.click(function(){
    $("html , body").animate({ scrollTop :"0"},2000);
});
/* End Button Up */

