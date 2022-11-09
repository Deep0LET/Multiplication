const num1 = Math.ceil (Math.random()*10)
const num2 = Math.ceil (Math.random()*10)

const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");



let score =JSON.parse(localStorage.getItem("score"));

if (!score){
    score = 0;
}

questionEl.innerText = `What is ${num1} Multiply by ${num2} is ?`

const scoreEl =  document.getElementById("score");

scoreEl.innerText = `score: ${score}`

const correctAns = num1*num2;
formEl.addEventListener("submit" ,()=>{
  const userAns = +inputEl.value
  if(userAns ===correctAns){
  score++
  updatelocalStorage()
  }
  else{
    score--
    updatelocalStorage()
  }
  
  console.log(score);
});

function updatelocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}


