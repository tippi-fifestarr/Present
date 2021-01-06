
const download = {
    kaizen0: {
        iconInfo:`
        <span class="fa-stack fa-3x">
                <i class="fas fa-poop fa-stack-2x"></i>
                <strong class="fa-stack-1x poop-text"><i class="fas fa-download"></i></strong>
            </span>
        `,
        trackTitle:`ipsum-改善(0).mp3`,
        downloadLink:`<a href="./ipsum-改善(0).mp3" download>ipsum-改善(0).mp3</a>`
    },
    kaizen1: {
        iconInfo:`
        <span class="fa-stack fa-3x">
                <i class="fas fa-poop fa-stack-2x"></i>
                <strong class="fa-stack-1x poop-text a2nd"><i class="fas fa-download"></i></strong>
            </span>
        `,
        trackTitle:`ipsum-改善(1).mp3`,
        downloadLink:`<a href="./ipsum-改善(1).mp3" download>ipsum-改善(1).mp3</a>`
    }
}

const icon = document.getElementById('icon')
const text = document.getElementById('text')

let count = 0

function clickHandleDownload(){
    const keysArr = Object.keys(download)
    icon.innerHTML = download[keysArr[count]].iconInfo
    text.innerHTML = download[keysArr[count]].downloadLink
    if(count == keysArr.length - 1){
        count=0
    } else {
        count++
    }
}