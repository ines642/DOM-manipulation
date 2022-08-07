window.onload=function(){
    const box3 = document.querySelector('.box-3')
    const btn2=document.querySelector('.btn_2')
    const btn3=document.querySelector('.btn_3')
    
    console.log(btn2);
    console.log(box3);
    
    alrtbtn = () =>{
        alert('alert with addEventListner')
    } 
changeBgColor =()=>{
    box3.style.backgroundColor ='blue'
}
    btn2.addEventListener('click' , alrtbtn)
    btn3.addEventListener('mouseover' , changeBgColor)

   














}


 
