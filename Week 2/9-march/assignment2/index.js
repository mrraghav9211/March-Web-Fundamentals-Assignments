// var ip1 = document.getElementById('title')
// var ip2 = document.getElementById('op_p')
// const show = function(){
//     ip1.innerText = "HTML basics"
//     ip2.innerText = "HTML (Hypertext Markup Language) is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables. As the title suggests, this article will give you a basic understanding of HTML and its functions."
// }
// const show1 = function(){
//     ip1.innerText = "CSS: Cascading Style Sheets"
//     ip2.innerText = "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media."
// }
// const show2 = function(){
//     ip1.innerText = "JavaScript"
//     ip2.innerText = `Head over to our Learning Area JavaScript topic if you want to learn JavaScript but have no previous experience with JavaScript or programming. The complete modules available there are as follows:

//     JavaScript first steps
//     Answers some fundamental questions such as "what is JavaScript?", "what does it look like?", and "what can it do?", along with discussing key JavaScript features such as variables, strings, numbers, and arrays.
    
//     JavaScript building blocks
//     Continues our coverage of JavaScript's key fundamental features, turning our attention to commonly-encountered types of code blocks such as conditional statements, loops, functions, and events.`
// }
// const show3 = function(){
//     ip1.innerText = "Intro to React"
//     ip2.innerText = `In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

//     You can see what we’ll be building here: Final Result. If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry! The goal of this tutorial is to help you understand React and its syntax.
    
//     We recommend that you check out the tic-tac-toe game before continuing with the tutorial. One of the features that you’ll notice is that there is a numbered list to the right of the game’s board. This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.
    
//     You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial. Our next step is to set you up so that you can start building the game.
    
//     `
// }
// const li1 = document.getElementById('li2')
// li1.addEventListener('click', show1)
// const li2 = document.getElementById('li3')
// li2.addEventListener('click', show2)
// const li = document.getElementById('li1')
// li.addEventListener('click',show)
// const li3 = document.getElementById('li4')
// li3.addEventListener('click', show3)

const toggle = function(){
var popup = document.getElementsByClassName('popup')[0]
if(popup.style.display == 'block'){
    popup.style.display = 'none'
}else{
    popup.style.display = 'block'
}
}
var btn1 = document.getElementById('add_btn')
btn1.addEventListener('click',toggle)

const list = [];
const render = function(){
    const parent_child2 = document.getElementById('content')
    parent_child2.innerHTML = " ";
    const parent_child = document.getElementById('list_container')
    parent_child.innerHTML = " ";
    for(let i=0; i<list.length; i+=1){
        const new_h2 = document.createElement('h2');
        const new_li = document.createElement('li');
        new_li.innerText = list[i];
        new_h2.innerText = list[i]
        new_h2.id = 'title'
        new_li.id = `li${i}`
        parent_child.appendChild(new_li);
        parent_child2.appendChild(new_h2);
    }
}


const add_note = function(){
    const ip = document.getElementById('txt')
    // ip2 = document.getElementById('txt_area').value;
    const new_ip = ip.value
    list.push(new_ip)
    ip.value = "";
    render();
}


const list2 = [];
const render2 = function(){
    const parent_child2 = document.getElementById('content2')
    parent_child2.innerHTML = " ";
    for(let i=0; i<list2.length; i+=1){
       const new_p = document.createElement('p')
       new_p.innerText = list2[i];
       new_p.id = 'op_p'
       parent_child2.appendChild(new_p)  
    }
}
const add_note2 = function(){
    const ip = document.getElementById('txt_area')
    const new_ip = ip.value
    list2.push(new_ip)
    ip.value = "";
    render2();
}
const btn = document.getElementById('sub_btn');
btn.addEventListener('click',add_note );

const btn2 = document.getElementById('sub_btn');
btn2.addEventListener('click',add_note2 );



// var input1 = document.getElementById('title')
//  var input2 = document.getElementById('op_p')
//  const show = function(){
//      console.log(input.value)
//     input1.innerText = "HTML basics"
//     input2.innerText = "HTML (Hypertext Markup Language) is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables. As the title suggests, this article will give you a basic understanding of HTML and its functions."
// }
// const li1 = document.getElementById('li1')
// li1.addEventListener('click', show);