function swap(){
    var num1 = document.getElementById('num1')
     var x = num1.value
    x = parseInt(x)

    var num2 = document.getElementById('num2')
     var y = num2.value
     y = parseInt(y)
     if(isNaN(x) || isNaN(y)){
     document.getElementById('op_num').innerText ="Please enter an valid number    "
     }else{

     x = x + y;
     y = x - y;
     x = x - y;
     
     var swaped = document.getElementById('op_num')
     swaped.innerText ="num1 is "+ x +" num2 is "+ y
}
}
