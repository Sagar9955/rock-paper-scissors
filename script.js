let user=0;
let comp=0;
let userScore=document.querySelector("#userscore")
let compScore=document.querySelector("#compscore")
let choices=document.querySelectorAll(".choice")
let result=document.querySelector("#results")


let compgen=()=>{
    let arr1=["rock","paper","scissors"]
    let idx=Math.floor(Math.random()*3)
    return arr1[idx];

}


let mainarea=(userChoice)=>{
    console.log("user choice",userChoice);
    const compchoice=compgen();
    console.log("compchoice",compchoice);
   if(userChoice===compchoice){ //draw condition
            console.log("Draw");
            result.innerText="Draw";
            result.style.backgroundColor="#453F3C"
        }else if (userChoice=="rock"){
            if(compchoice=="paper"){//user is rock and comp is paper
                console.log("comp wins");
                comp++;
                compScore.innerText=comp;
                result.innerText="Computer Wins";
                result.style.backgroundColor="red"
            }else if(compchoice==="scissors"){//user is rock comp is scissors
                console.log("user wins")
                user++;
                userScore.innerText=user;
                result.innerText="You Win";
                result.style.backgroundColor="green"
            }
        }else if(userChoice=="paper"){
            if(compchoice=="rock"){//user is paper and comp is rock
                console.log("user wins")
                user++;
                userScore.innerText=user;
                result.innerText="You Win";
                result.style.backgroundColor="green"
            }else if(compchoice=="scissors"){//user is paper and comp is scissors
                console.log("comp wins")
                comp++;
                compScore.innerText=comp;
                result.innerText="Computer Wins";
                result.style.backgroundColor="red"
            }
        }else if(userChoice=="scissors"){
            if(compchoice=="rock"){//user is scissors and comp is rock
                console.log("comp wins")
                comp++;
                compScore.innerText=comp;
                result.innerText="Computer Wins";
                result.style.backgroundColor="red"
            }else if (compchoice=="paper"){//user is scissors and comp is paper
                console.log("user wins")
                user++;
                userScore.innerText=user;
                result.innerText="You Win";
                result.style.backgroundColor="green"
            }
        }
    }


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        console.log(userChoice)
        mainarea(userChoice);
    })
})