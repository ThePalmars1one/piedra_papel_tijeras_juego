const rock_btn = document.getElementById("rock");
const paper_btn = document.getElementById("paper");
const scissor_btn = document.getElementById("scissors");
const user_choice = document.getElementById("user_choice");
const cpu_choice = document.getElementById("cpu_choice");
const result = document.getElementById("result");
const user_score = document.getElementById("user_score");
const cpu_score = document.getElementById("cpu_score");
const restart = document.getElementById("restart");

let user_points = 0;
let cpu_points = 0;


main();


function cpuChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomCpuChoice = choices[Math.floor(Math.random() * choices.length)]
    return randomCpuChoice;
}

function main(){

    rock_btn.addEventListener('click', function (){
        play("rock");
    });

    paper_btn.addEventListener('click', function (){
        play("paper");
    });

    scissor_btn.addEventListener('click', function (){
        play("scissors");
    });

    restart.addEventListener('click', restartGame);

}

function play (user){
    const cpu = cpuChoice();
    const cpuImg = document.createElement("img");
    const userImg = document.createElement("img");

    result.innerHTML="";
    user_choice.innerHTML="";
    cpu_choice.innerHTML="";

    userImg.src=`assets/img/${user}.png`;
    userImg.classList.add("scale-animation");
    user_choice.appendChild(userImg);

    cpuImg.src=`assets/img/${cpu}.png`;
    cpuImg.classList.add("scale-animation");
    cpu_choice.appendChild(cpuImg);

    if(user + cpu == user + user){
        result.style.color = "Black";
        result.innerHTML = "Empate";
    } else if (user + cpu == "rockpaper" || user + cpu == "scissorsrock" || user + cpu == "paperscissors"){
        result.style.color = "Red";
        result.innerHTML = "Perdiste";
        cpu_points++;
        cpu_score.innerHTML = cpu_points;
        audio(1);
    } else {
        result.style.color = "Green";
        result.innerHTML = "Ganaste";
        user_points++;
        user_score.innerHTML = user_points;
        audio(2);
    }

}

function restartGame(){

    user_points = 0;
    cpu_points = 0;

    cpu_score.innerHTML = cpu_points;
    user_score.innerHTML = user_points;
    user_choice.innerHTML="";
    cpu_choice.innerHTML="";
    result.innerHTML = "";

}

function audio(sound){
    const audioElement = document.createElement("audio");
    audioElement.volume = 0.5;

    if (sound == 1){
        audioElement.src = "assets/audio/defeat.mp3";
        audioElement.type = "audio/mpeg";
    } else {
        audioElement.src = "assets/audio/victory.mp3";
        audioElement.type = "audio/mpeg";
    }

    audioElement.addEventListener("ended", function() {
        document.body.removeChild(audioElement);
    });

    document.body.appendChild(audioElement);
    audioElement.play();
}