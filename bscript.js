var heading=document.querySelector(".heading")
var startbutton=document.querySelector(".startbutton")
var contents =document.querySelector(".contents")
var mainimg=document.querySelector(".mainimg")
var mainpara=document.querySelector(".mainpara")
var sports=document.querySelector(".sports")
var disadvantage=document.querySelector(".disadvantage")
var love=document.querySelector(".love")
var secret=document.querySelector(".secret")
function start(){

    heading.setAttribute("class","hbsty")
    startbutton.style.display="none"
    mainimg.style.opacity="100"
    mainimg.setAttribute("class","mainimg_ani")
     mainpara.style.opasict="100"
     mainpara.setAttribute("class","mainpara_ani")
     disadvantage.setAttribute("class","disadvantage_ani")
    sports.setAttribute("class","sports_ani")
    love.setAttribute("class","love_ani")
    secret.setAttribute("class","secret_ani")
    
    
}

var close=document.querySelector(".close")


    var loyality=document.querySelector(".loyality")
    var adlove=document.querySelector(".adlove")
    var care=document.querySelector(".care")
    var sensitive=document.querySelector(".sensitive")
    
    var adv1=document.querySelector(".adv1")
    function advantage()
    {
      adv1.style.display="block"
     
     

    }
    function bar1(){
         loyality.setAttribute("class","loyality_ani")
      adlove.setAttribute("class","adlove_ani")
      care.setAttribute("class","care_ani")
      sensitive.setAttribute("class","sensitive_ani")
     


    }
    function close1(){
    adv1.style.display="none";
}

    var disadvantage=document.querySelector(".disadvantage")
    var ego=document.querySelector(".ego")
    var anger=document.querySelector(".anger")
    var adv2=document.querySelector(".adv2")
    function negative()
    {
        adv2.style.display="block"
       
    }
    function close2(){
    adv2.style.display="none";
}
function bar2(){
     ego.setAttribute("class","ego_ani")
    anger.setAttribute("class","anger_ani")
}
   

    var kavi=document.querySelector(".kavi")
    function kavibox(){
        kavi.style.display="block"
    }
    function close3(){
    kavi.style.display="none";
}

    var secrettt=document.querySelector(".secrettt")
    function secretbox(){
        secrettt.style.display="block"
    }
    function close4(){
    secrettt.style.display="none";
}



  
