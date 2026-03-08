const sounds = ["applause","boo","gasp","tada","victory","wrong"];
let audio;

document.querySelectorAll(".btn").forEach((btn,index)=>{
    btn.addEventListener("click",()=>{

        if(audio){
            audio.pause();
        }

        audio = new Audio("sounds/"+sounds[index]+".mp3");
        audio.play();
    });
});

document.querySelector(".stop").addEventListener("click",()=>{
    if(audio){
        audio.pause();
        audio.currentTime = 0;
    }
});