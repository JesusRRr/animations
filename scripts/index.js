const canvas = document.getElementById('canvas2');
const ctx = canvas.getContext('2d');
console.log(ctx);

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI*2);
ctx.fill();