const openModal= document.getElementById("open-modal");
const closeModal= document.getElementById("close-modal");
const submitButton= document.getElementById("submit");
const form=document.getElementById("form")
openModal.addEventListener("click",function(){
    form.style.display="block";
    if(form===form){
openModal.style.display="none";
    }
});
closeModal.addEventListener("click",function(){
    form.style.display="none";
    if(form===form){
        openModal.style.display="block";
            }
});
form.addEventListener("submit",noSubmit);
function noSubmit(e){
    e.preventDefault();
    
}