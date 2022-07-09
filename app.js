let button = document.getElementById("generatebutton");
var i;
var oldValue=0;
button.onclick=()=>{
    let n=document.getElementById('textBox').value;
    for(i=1;i<=n;i++){
  var grid = document.createElement('div');
  grid.classList.add('myDiv');
  document.getElementById('grid').appendChild(grid); 
  grid.innerHTML+= i;
   oldValue=document.getElementById('grid').lastElementChild.innerHTML;
    }
}




