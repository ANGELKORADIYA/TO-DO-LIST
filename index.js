let add = document.getElementById("add");
let addbtn = document.getElementById("addbtn");
let popup = document.getElementById("popup");
let title,description,count=1;
let form =`What is your TO DO title :- <input type="text" id="title" placeholder="Title">
Your Description about To do : - <textarea name="description" id="description" cols="30" placeholder="description"rows="10"></textarea>
<button  id="submit">submit</button>`;
addbtn.addEventListener("click",(w)=>{
    w.preventDefault();
    popup.style.display="flex";
    popup.innerHTML=form;
    let submit=document.getElementById("submit");
    
    submit.addEventListener("click",(e)=>{
        e.preventDefault();
        title=document.getElementById("title").value;
        description=document.getElementById("description").value;
        popup.style.display="none";    
        
            add.innerHTML+=`<div class="block" id="block-${count}">
            <div><span>${count}</span></div>
            <div class="title">Title :- ${title}</div>
            <div class="description">Description :- ${description}</div>
            <button class="delete" id="del${count}" onclick="delete1(${count})">For Complete</button></div> `;
            count++;
            // if(count<1){
                document.getElementsByClassName("text")[0].style.display="block";
               
            // }
    })
    // add.innerHTML+=``;
})
// let delete1=document.getElementsByClassName("delete");
// delete1.addEventListener("click",(a)=>{
//     a.preventDefault();
//     idd = delete1.id;
// })
function delete1(co){
    let m = document.getElementById(`block-`+co);
    m.style.display="none";

}
let complete=document.getElementById("complete");
let complll=document.getElementById("completed");



complete.addEventListener("click",(f)=>{
f.preventDefault();
// // let m = document.getElementById(`block-`+co);
// let arr2=[];
// let arr = document.getElementsByClassName("block");
// arr.forEach(element => {
//     if(element.display=="none"){
//         arr2.push(element)
//     }
// });
// console.log(arr2)
    // let n = document.querySelectorAll(["display"^="none"]);
    document.getElementsByClassName("text")[1].style.display="block";
    let arr=[];
    let n=document.getElementsByClassName("block");
    // console.log(n);
    for(let i=0;i<n.length;i++){
        if(n[i].style.display=="none"){
            arr.push(n[i]);
        }
    }
    // console.log(arr);   
   
    complll.innerHTML="";
    for(let i=0;i<arr.length;i++){
        complll.innerHTML+=`<div class="block"> ${arr[i].innerHTML.split('<button')[0]} </div>`;
    // complll.outerHTML= `<div> ${complll.innerHTML} </div>`;
}
})


let hide = document.getElementById("hide");
hide.addEventListener("click",(h)=>{
    h.preventDefault();
    complll.innerHTML=""
})

