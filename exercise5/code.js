let h1=document.querySelector("h1");
//Harjoitus 1;
h1.classList.add("special");
h1.style.width="500px";
//Harjoitus 2;
let p=document.querySelector("p");
p.addEventListener("mouseenter", changeColor);
p.addEventListener("click",changeBG);
function changeColor(){
p.classList.toggle("textcolor");
}
function changeBG(){
p.classList.toggle("textbg");

}
//Harjoitus 3;
let id=document.getElementById("sotu");
sotu.addEventListener("input", CheckValid);
function CheckValid(){
    let text=sotu.value;
    if (text.length==11) {
        sotu.classList.remove("invalid")
    }
    else{
        sotu.classList.add("invalid");
    }   
}

