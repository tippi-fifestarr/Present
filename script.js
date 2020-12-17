let lockURL = "WB3-GOT.wav"


function unlockandplay(step){
    if (step=1){
        let url = lockURL
        playAudio(url)
        document.getElementById("lockedIcon").innerHTML=`
        <i class="fas fa-unlock-alt"></i>
        `
    }
}

function playAudio(url) {
    new Audio(url).play();
    console.log("played"+url)
}
