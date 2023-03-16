$(function() {
    alert("您好，感謝您瀏覽此頁面，點擊各標題即可進入該作品網頁。\n\n點擊標題Profile及左上角JD logo即可返回首頁")
});

const observer=new IntersectionObserver((entire)=>{
    entire.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    })
});


const hiddenElement=document.querySelectorAll(".hidden");
hiddenElement.forEach((item)=>observer.observe(item));