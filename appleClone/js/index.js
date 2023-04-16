$(".sidemenu-btn").click(()=>{
    $(".sideBar").toggleClass("sideBarActive");
})
$(".nav-right").click(function () {
    $(".sideBar").removeClass("sideBarActive");
    }
);