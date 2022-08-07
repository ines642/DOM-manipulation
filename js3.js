window.onload=function(){
    const revebtn = document.querySelector('.reveal-btn')
    const hidncon = document.querySelector('.hidden-cont')
    console.log(revebtn);
    console.log(hidncon);

     //html 3 show hidden content
     //methode 1 
     /*
showContent =()=>{
    hidncon.style.display='block';
    revebtn.style.display='none';
}
revebtn.addEventListener('click' ,showContent )
*/
showContent =()=>{
    if(hidncon.classList.contains('reveal-btn'))//to see if hidncon contain the same style properety as reveal-btn (both block)
    {
        hidncon.classList.remove('reveal-btn')//remove style of revbtn so the onely style we have is display:none for hidcon
    }else{
        hidncon.classList.add('reveal-btn')
    }
}
revebtn.addEventListener('click' ,showContent )


}