window.onload=function(){
    //window.onload=function make html page load with or befor dom so we can work on it
    // 1_select an element 
    /*
const titel=document.getElementById("main-heading");
console.log(titel);
console.log('hi')

const list_item=document.getElementsByClassName("list_item");
console.log(list_item);

const list=document.getElementsByTagName("li");
console.log(list);

const container=document.querySelector("div");
console.log(list_item);
*/

// 2_ styling element :
/*const list_item=document.querySelectorAll(".list_item");
console.log(list_item);
//list_item.style.fontSize = '5rem' //won't work because we have many element that have the same class we nned to consider it as an array abd use for loop
for(var i=0 ; i<list_item.length ;i++ ){
    list_item[i].style.fontSize = '1rem'
}*/


//3_creat and manipulat a new element :
/*
const ul =document.querySelector('ul')
//creat an element
const li = document.createElement('li')
// place theelement
 ul.append(li)

 //add  atext
 li.innerText ='new Element'

 //set attribut to the new element {the 1st argument specify what we will workwith (class or id ) and the second the exact class or id that we need the new elemenet to have thesame style as}
 li.setAttribute('class' , 'list_item')
 li.style.background='red'
 console.log(li.getAttribute('class'))
 // li.removeAttribute('class' , 'list_item') // to remove styling 
       // we can style a class by
     //  li.classList.add('list_item')
       //li.classList.remove('list_item')

//remove the element
li.remove()
*/

//4_DOm maprnt child sibiling relation
/*
const ul =document.querySelector('ul')
const div=document.querySelector('div')
//childs
console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);
// better way to select achild
ul.childNodes[1].style.background='blue'

console.log(div.childNodes);

//sibilings
console.log('nextSibling is ');
console.log(ul.nextSibling);
console.log('previous Sibling is ');
console.log(ul.previousSibling);
console.log('previous elm Sibling is ');
console.log(ul.previousElementSibling);
console.log('nxt elm Sibling is ');
console.log(ul.nextElementSibling);
*/
//5_ event propagation
document.querySelector('#list').addEventListener('click' , function(e){
    console.log(e.target.getAttribute('class')+'is clicked'); //.target is amethode refers to the clicked elment
    //this code whenever we click on a child of #list it will input the target class +is clicked
    const target=e.target
    if(target.matches('li')){
target.style.background='red'
//.matches works as classlist.contaain()
    }
})
}