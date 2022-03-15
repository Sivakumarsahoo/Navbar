let btn=document.querySelector(".image");
const main1=document.querySelector(".d2");


function press(){
    main1.classList.toggle("dropdown")
  
}
btn.addEventListener("click",press)


function ft()
{
 if(window.innerWidth>700)   
 {
     main1.classList.remove("dropdown")
 }
}
window.addEventListener("resize",ft)