document.querySelector("form").addEventListener("submit", calc);

/**
 * 
 * @param {Event}event
 */
function calc(event){
event.preventDefault();
let formData=new FormData(event.currentTarget)
let num1=formData.get("num1");
let num2=formData.get("num2");
let sum= Number(num1)+Number(num2);
let res=document.getElementById("result");
res.textContent="Sum is "+ sum;
}
