var age= document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight")
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form")

function validateForm(){
  if(age.value==""|| height.value==""||weight.value=="" || (male.checked==false && female.check==false)){
    alert("required data in all fields")
    document.getElementById("submit").removeEventListener("click",countBmi)
  }
  else{
    countBmi()
  }
}

document.getElementById("submit").addEventListener("click",validateForm);
function countBmi(){
  var p = [age.value,height.value,weight.value];
  if(male.checked){
    p.push("user is male")
  }
  else if(female.checked){
    p.push("user is female")
  }
  form.reset();
  
  var bmi = Number(p[2])/(((Number(p[1])/100)*Number(p[1]))/100);
  var result = "";
  if(bmi<16){
    result="Severe thickness"
  }
  else if(bmi>=16 && bmi<=17){
    result="moderate thickness"
  }
  else if(bmi>=17 && bmi<=18.5){
    result="Mild thickness"
  }
  else if(bmi>=18.5 && bmi<25){
    result="Normal"
  }
  else if(bmi>=25 && bmi<=30){
    result="Overweight"
  }
  else if(bmi>=30 && bmi<=35){
    result="obese class 1"
  }
  else if(bmi>=35 && bmi<=40){
    result="Obese class 2"
  }
  else if(bmi>40){
    result="Obese class iii"
  }
  var h1=document.createElement("h1")
  var h2 = document.createElement("h1")
  var t =document.createTextNode(result)
  var b = document.createTextNode("BMI: ")
  var r = document.createTextNode(parseFloat(bmi).toFixed(2));
  h1.appendChild(t)
  h2.appendChild(b)
  h2.appendChild(r)
  document.body.appendChild(h1)
  document.body.appendChild(h2)
  document.getElementById("submit").removeEventListener("click",countBmi);
  document.getElementById("submit").removeEventListener("click",validateForm);
}
document.getElementById("submit").addEventListener("click",countBmi);