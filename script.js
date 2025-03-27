let player_score = 0;
let comp_score = 0;
// Querry selectors
const game_buttons = document.querySelectorAll(".game_btns");
const reset_btn = document.querySelector("#reset_button")
const message = document.querySelector("#message");
let player = document.querySelector("#player")
let computer = document.querySelector("#comp")
// functions
// Random computer game word generator
const Random_generator = ()=>{
    const game_words = ["rock", "paper", "scissors"];
    let random_idx = Math.floor(Math.random() * 3);
    return comp = game_words[random_idx];
}
// main game function
const Game = (user)=>{
    // Caling the random generator
    Random_generator();
    // Tracking the win of user
    let user_win = null;
    // Conditions
    // user rock
    if (user === "rock" & comp === "rock"){
        user_win = null;
    }
    else if(user === "rock" & comp === "paper"){
        user_win = false;
    }
    else if (user === "rock" & comp === "scissors"){
        user_win = true;
    }
    // user paper
    else if (user === "paper" & comp === "rock"){
        user_win = true;
    }
    else if (user === "paper" & comp === "paper"){
        user_win = null;
    }
    else if (user === "paper" & comp === "scissors"){
        user_win = false;
    }
    // user scissors
    else if (user === "scissors" & comp === "rock"){
        user_win = false;
    }
    else if (user === "scissors" & comp === "paper"){
        user_win = true;
    }
    else if (user === "scissors" & comp === "scissors"){
        user_win = null;
    }
    else{
    }
    score_message_changer(user_win,user,comp);    
}
const score_message_changer = (user_win,user,comp) =>{
    // message and score changer
    if (user_win == true){
        player_score++
        message.textContent = `Player wins! ${user} beats ${comp}`;
        player.textContent = `${player_score}`;
    }
    else if (user_win == false){
        comp_score++;
        message.textContent = `Comp wins! ${comp} beats ${user}`;
        computer.textContent = `${comp_score}`
    }
    else if (user_win == null){
        message.textContent = `It is a tie. Player: ${user} and Comp: ${comp}`;
    }
    else{

    }
}
 
// event listeners
game_buttons.forEach((game_btns)=>{
    game_btns.addEventListener("click", ()=>{
        let user = (game_btns.getAttribute("id"));
        Game(user);
    })
})
reset_btn.addEventListener("click",()=>{
    player_score = 0
    comp_score = 0
    player.textContent = `${player_score}`
    computer.textContent = `${comp_score}`
    message.textContent = "Start the game"
})


