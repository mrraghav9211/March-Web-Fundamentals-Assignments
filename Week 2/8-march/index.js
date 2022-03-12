var counter = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function like(n,id){
    console.log(id)
        counter[n] += 1;
        var disp = document.getElementById(id)
        disp.innerText = counter[n]
      
      console.log(n)
    }
    counter2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
function dislike(n,id){

    counter2[n] += 1;
     document.getElementById(id).innerText = counter2[n]
}
function show(id){
  console.log(id)
  var disp = document.getElementsByClassName('zoom')[0]
  if (disp.style.display == 'block') {
    disp.style.display = 'none'
  }else{
    disp.style.display = 'block'
  }
  
  document.getElementById('img').src = id
}
function hide(){
  var disp = document.getElementsByClassName('zoom')[0].style.display = 'none'
}
