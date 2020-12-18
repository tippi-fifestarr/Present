let lockURL = "WB3-GOT.wav"
let drumURL = "camel(snare).mp3"


function unlockandplay(step){
    if (step=1){
        let url = lockURL
        playAudio(url)
        document.getElementById("lockedIcon").innerHTML=`
        <i class="fas fa-unlock-alt"></i>
        `
    }
    if (step=2){
        let url = drumURL
        playAudio(url)
    }
}

function playAudio(url) {
    new Audio(url).play();
    console.log("played"+url)
}
