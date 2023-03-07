const canvas = document.getElementById('my-canvas');
const context = canvas.getContext('2d');
let previousX, previousY;
let isDrawing=false;
let isCleaning=false;
let paintColor='pink';
let bgColor=canvas.getPropertyValue('background-color'),pColor='pink';

console.log(bgColor);

canvas.addEventListener('mousemove', event => {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  if (isDrawing&&!isCleaning) {
    context.beginPath();
    context.strokeStyle = paintColor; // Set the stroke color to pink
    context.moveTo(previousX, previousY);
    context.lineTo(x, y);
    context.stroke();
  }
  previousX = x;
  previousY = y;
});
canvas.addEventListener('mousedown',event=>{
  isDrawing=true;
})
canvas.addEventListener('mouseup',event=>{
  isDrawing=false;
})
$('#pink').on('click',function(){
  paintColor=pColor;
})
$('#clear').on('click',function(){
  paintColor=bgColor;
})