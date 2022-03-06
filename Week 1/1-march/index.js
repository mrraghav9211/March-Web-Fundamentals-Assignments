function validation(){
    var input_field = document.getElementById('pwd')
    var input_text_value = input_field.value

    var input_field2 = document.getElementById('con_pwd')
    var input_text_value2 = input_field2.value

    var output_field = document.getElementById('op_text')
    var output_field2 = document.getElementById('op_text2')
   if(input_text_value === input_text_value2){
    output_field2.innerText = "Registration Successfully!"
   }else{
    output_field.innerText  = "Sorry! password doesn't match"
   }
}