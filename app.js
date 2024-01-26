let userscore = 0;
let comscore = 0;

const choises = document.querySelectorAll(".choise");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#userscore");
const cmpscorepara = document.querySelector("#compscore");

const gencomchoise = ()=>{
    const options = ["rock","paper","scissors"];
    const ind = Math.floor(Math.random()*3);
    return options[ind];
}

const drawgame=()=>{
    console.log("Game was graw");
    msg.innerText = "Game was draw. Play again !";
    msg.style.backgroundColor = "purple";
}

const showWinner=(userwin,userchoise,cmpchoice)=>{
    if(userwin)
    {
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText = `You win !. Your ${userchoise} beats computer's ${cmpchoice}`;
        msg.style.backgroundColor = "green";
    }
    else
    {
        comscore++;
        cmpscorepara.innerText=comscore;
        msg.innerText = `You lose game !. Computer ${cmpchoice} beats your ${userchoise}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame =(userchoise)=>{
   console.log("userchoise = ",userchoise);
   const cmpchoice = gencomchoise();
   console.log("compchoise = ",cmpchoice);

   if(userchoise===cmpchoice)
   {
         drawgame();
   }
   else{
    let userwin = true;
    if(userchoise==="rock")
    {
        userwin = cmpchoice==="paper"?false:true;
    }
    else if(userchoise==="paper")
    {
        userwin = cmpchoice==="scissors"?false:true;
    }
    else
    {
        userwin = cmpchoice==="rock"?false:true;
    }
    showWinner(userwin,userchoise,cmpchoice);
   }
}

choises.forEach((choise)=>{
    choise.addEventListener("click",()=>{
        const userchoise = choise.getAttribute("id");
        playgame(userchoise);
    });
});


let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click",() =>{
    if(currMode==="light")
    {
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
})
