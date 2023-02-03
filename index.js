window.addEventListener("load", () => {
    const canvas = document.querySelector('#canvas'); 
    const toolbar = document.getElementById('toolbar');
    const ctx = canvas.getContext('2d');
    
    //resizing
    const canvasOffsetX = canvas.offsetLeft;
    const canvasOffsetY = canvas.offsetTop;
    canvas.width = window.innerWidth - canvasOffsetX;
    canvas.height = window.innerHeight - canvasOffsetY;

    // canvas.height = window.innerHeight;
    // canvas.width = window.innerWidth;
    
    //variables
    let painting = false;
    let lineWidth = 5;

    toolbar.addEventListener("click", e =>{
        if(e.target.id === 'clear'){
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    });

    toolbar.addEventListener("change", e =>{
        if(e.target.id === 'stroke'){
          ctx.strokeStyle = e.target.value;
        }
        if(e.target.id === 'lineWidth'){
          lineWidth = e.target.value
        }
    });

    function startPosition(e){
      painting = true;
      draw(e);
    }

    function endPosition(){
      painting = false;
      ctx.beginPath();
    }
    
    function draw(e){
        if(!painting){
            return;
        }
      
        ctx.lineWidth = lineWidth;
        ctx.lineCap = 'round';
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
    }
    
    //eventListener
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", endPosition);
    canvas.addEventListener("mousemove", draw) 

});
   
 // FETCH
const URL = "https://api.adviceslip.com/advice ";

fetch(URL)
.then(response =>{
  return response.json()
})
.then(data =>{
  // console.log(data);
  mapadvice(data.slip.advice);
})
 
function mapadvice(advice){
  document.getElementById('para').innerHTML = advice;
}
  
  
  

 
  
  
  