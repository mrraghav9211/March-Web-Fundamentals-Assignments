function sum(){
var input_first = document.getElementById('first_num')
var input_first_num = input_first.value

var input_second = document.getElementById('second_num')
var input_second_num = input_second.value

var output_num = document.getElementById('op_num')
var output_text = document.getElementById('op_text')

input_first_num = parseInt(input_first_num)
input_second_num = parseInt(input_second_num)

if(isNaN(input_first_num) || isNaN(input_second_num)){
   output_text.innerText = "Sorry! enter an valid number"
}else{
    var sum = input_first_num + input_second_num
    output_num.innerText = sum
}

}
