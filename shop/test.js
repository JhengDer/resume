const arr=["1","2","3"];



num=arr.map(function (item,index,array) {
    console.log(item,index,array);
    return parseInt(item,index,array);
})
console.log(num);
console.log(parseInt('1',0));
console.log(parseInt('2',1));
console.log(parseInt('3',2));