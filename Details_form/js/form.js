InputHandler = (event) => {
  //console.log(event.target.id,event.target.value);
  sessionStorage.setItem(event.target.id, event.target.value);
};

SubmitHandler = (event) => {
  var form = document.getElementById("theForm");
  
    for (var i = 0; i < form.elements.length; i++) {
      if (
        form.elements[i].value === "" &&
        form.elements[i].hasAttribute("required")
      ) {
        form.elements[i].closest(".contentbox").classList.add("active-accordion");
        break;
        return false;
      }
    }
};





const fileInput = document.getElementsByClassName('file-input-box');
for(i=0;i<fileInput.length;i++){
  fileInput[i].addEventListener('input',function(){
    if(this.files.length!==0){
      
      this.nextSibling.parentElement.children[1].disabled=false;
    }
    else{
      this.nextSibling.parentElement.children[1].disabled=true;
    }
  })
}

const clear_btns=document.getElementsByClassName('clear-btn');
for(i=0;i<clear_btns.length;i++){
  
  clear_btns[i].addEventListener('click',function(event){
    event.preventDefault();
    this.parentElement.children[0].value=null;
    this.parentElement.children[1].disabled=true;
  })
}

populateDetail = () => {
  let inputs = Object.keys(sessionStorage);

  for (let id of inputs) {
    if(document.getElementById(id)){
      document.getElementById(id).value = sessionStorage.getItem(id);
      
    }
  }
};
populateDetail();
