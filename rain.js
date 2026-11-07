let raf,dr=[],fl;const cv=$('#rain'),cx=cv.getContext('2d');
function size(){cv.width=innerWidth;cv.height=innerHeight;dr=Array.from({length:Math.floor(innerWidth/9)},()=>({x:Math.random()*cv.width,y:Math.random()*cv.height,l:10+Math.random()*18,s:7+Math.random()*8}))}
function loop(){cx.clearRect(0,0,cv.width,cv.height);cx.strokeStyle='rgba(120,200,255,.35)';cx.beginPath();for(const d of dr){cx.moveTo(d.x,d.y);cx.lineTo(d.x-2,d.y+d.l);d.y+=d.s;if(d.y>cv.height){d.y=-20;d.x=Math.random()*cv.width}}cx.stroke();raf=requestAnimationFrame(loop)}
function stopRain(){cancelAnimationFrame(raf);clearInterval(fl)}
