let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click", function () {
    let item=document.createElement("li");
    item.innerText=inp.value;

    let dltBtn=document.createElement("button");
    dltBtn.innerText="delete";
    dltBtn.classList.add("delete");
    item.appendChild(dltBtn);

    ul.appendChild(item);
    inp.value="";
});

ul.addEventListener("click",function(e){
  if(event.target.nodeName == "BUTTON"){
    let listItem=event.target.parentElement;
    listItem.remove();
  }
});


// let dltbtns=querySelectorAll("delete");
// for(dltbtn of dltbtns){
//    dltbtn.addEventListener("click",function(){
//      let par=this.parentElement;
//      par.remove();
//    })
// }