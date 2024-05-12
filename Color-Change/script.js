const btnEle= document.querySelectorAll(".box")
const bodyEle=document.querySelector("body")

btnEle.forEach(function(box){
    box.addEventListener("click",function(color){
if(color.target.id=== "box1"){
    bodyEle.style.backgroundColor="red"
}else if(color.target.id === "box2"){
    bodyEle.style.backgroundColor="green"
}else if(color.target.id === "box3"){
    bodyEle.style.backgroundColor="yellow"
}else if(color.target.id === "box4"){
    bodyEle.style.backgroundColor="blue"
}else if(color.target.id === "box5"){
    bodyEle.style.backgroundColor="purple"
}
    })
})