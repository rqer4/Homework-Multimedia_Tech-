function ChangeColor(idName){
    //let paragraph = idName;
    if(idName.clientHeight<50){
        idName.display = "block"
        idName.style.visibility="visible";
        idName.style.height="fit-content";
       // button.innerHTML="Hide details..."
        idName.style.transition="0.3s linear"
        idName.style.width="691px"
        
    }
    else{
        idName.style ="none";
        //button.innerHTML="Show details..."
    }

    

    
}
function Default(idName){
    let paragraph = idName;
    paragraph.style ="none";
    //paragraph.style.transition=".3s ease-out"
    
}