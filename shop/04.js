// const handleOnMouseMove=e=>{
//     const{currentTarget:target}=e;
//     const rect=target.getBoundingClientRect(),
//             x=e.clientX-rect.left,
//             y=e.clientY-rect.top;
//     target.style.setProperty("--mouse-x",`${x}px`);
//     target.style.setProperty("--mouse-y",`${y}px`);
// }
// for(const card of document.querySelectorAll(".card")){
//     card.onmousemove=e=>handleOnMouseMove(e);
// }

const handleMouseMoveOn = e => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
}

for (const hovereffect of document.querySelectorAll(".hovereffect")) {
    // hovereffect.onmousemove=e=>handleMouseMoveOn(e);
    hovereffect.onmousemove = function mmove(e) {
        handleMouseMoveOn(e)
    }
}

// let a=1
// let aa={
//     b:"bibi",
//     biu:function(){
//         let b=1;
//         function aplus(){
//             a++;
//             return a;
//         }
//         b=aplus(b);
//         console.log(b);
//         return b;
// setTimeout(function(){
//     console.log(this.b);
// },10)
// }
// }
// let b={
//     b:"bbb",
//     biu:function(){
//         console.log(this);
// setTimeout(()=>console.log(this.b),10);
//     }
// }
// let s=aa.biu();
// console.log(s);
// aa.biu();
// b.biu();

// var name='aa';
// let icecream={
//     name:"冰淇淋",
//     flavor:["草莓","巧克力","荔枝"],
//     adding:function (){
//         this.flavor.map(function(item){
//     console.log(this.name);
// })
// this.flavor.map((item)=>{
//     item+=this.name;
//     console.log(item);
// })
//     }
// }
// icecream.adding();

// let abc=()=>{
//     console.log(this);
// }
// abc();

// function getdata(){
//     setTimeout(function(){
//         console.log(3);
//     },0)
//     console.log(('asdasdd'));
// }
// const compa={
//     init(){
//         console.log(1);
//         getdata()
//         console.log(2);
//     }
// }
// compa.init();

// const promiseSetTimeout=(status)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(status){
//                 resolve('success');
//             }else{
//                 reject('failed');
//             }
//         },1000)
//     })
// }
// 基礎應用
// promiseSetTimeout(true).then((res)=>{
//     console.log(res);
// })
// promiseSetTimeout(false).catch((res)=>{
//     console.log(res);
// })

// 串接
// promiseSetTimeout(true).then((res)=>{
//     console.log(1,res);
//     return promiseSetTimeout(true);
// }).then((res)=>{
//     console.log(2,res);
// })

// 失敗捕捉
// promiseSetTimeout(false).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// const component={
//     data:{},
//     init(){
//         promiseSetTimeout(true).then((res)=>{
//             this.data.res=res;
//             return this.data.res;
//         }).then(res=>{
//             this.data.res+=res;
//         })
//     }
// }
// component.init();
// console.log(component.data);


function show3() {
    console.log(3);
}

console.log(1);
setTimeout(() => console.log(3), 3000);

console.log(2);


let sentToA = true;
let p = new Promise((resolve, reject) => {
    if (sentToA) {
        resolve('from resolve():sent');
    } else {
        console.log(('falsetoa'));
        reject();
    }
});

p.then(function (msg) {
    console.log(msg);
}).catch(err => {
    console.log('err');
})

function sentRequest() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            reject("error");
        }, 2000);
        // setTimeout(function(){
        //     resolve("johm doe");
        // },2000);
    })
}
// let promiseob=sentRequest();
// promiseob.then(res=>console.log(res));


async function getUsername() {
    try {
        let username = await sentRequest();
        console.log(username);
    } catch (error) {
        console.log(error);
    }
}
getUsername();
