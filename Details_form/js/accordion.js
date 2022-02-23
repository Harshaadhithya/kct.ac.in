var accordion = document.getElementsByClassName("form-heading");



for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    const contentbox=this.parentElement.parentElement;
    if(!contentbox.classList.contains("active-accordion")){
        [].forEach.call(accordion, function (el) {
            el.parentElement.parentElement.classList.remove("active-accordion");
        });
    }
    
    contentbox.classList.toggle("active-accordion");
  })
}
   
const PrevNextHandler=(event)=>{
    event.preventDefault();
    current_contentbox_id=parseInt(event.target.parentElement.parentElement.parentElement.parentElement.parentElement.id);
    if(event.target.id==="next"){
        contentbox_id=current_contentbox_id+1;
    }
    else{
        contentbox_id=current_contentbox_id-1;
    }
    
    accordion[current_contentbox_id].parentElement.parentElement.classList.remove("active-accordion");
    accordion[contentbox_id].parentElement.parentElement.classList.add("active-accordion");
}