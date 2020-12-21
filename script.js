let lockURL = "WB3-GOT.wav"
let drumURL = "camel(snare).mp3"

let iconFrame = "<i class=\"${iconName}\"></i>" 

const index = {
    welcome:{
        iconName:"fas fa-door-open",
        iconName2:"far fa-snowflake",
        text:"welcome to WC&MP online 'OF' course: the album. click the below button to nav"
    },
    days1:{
        iconName:"fas fa-road fa-spin",
        iconName2:"fas fa-map-marked-alt",
        text:"as of ${currentDay}, there has been no roadmap to making a song.  there are steps, beginnings, middles, ends, arguments, wingbirds, questions, answers, awards, files, artistnames, tracktittles, tyops, and forgotten junk between the keys or gems.  and if you are lucky enough to find someone else who cares enough to listen with care to your music, you will be the roadmap. below the below button are links; they are the maps, or at least, they are the iconic links to days past.",
        linktext:["./day1.html","./day2.html","./day3.html","./day4.html","./day5.html","./day6.html","./day7.html"]
    },
    wingbird:{
        iconName:"fas fa-kiwi-bird",
        iconName2:"fas fa-file-archive",
        text:"compressed version(s) for busy wingbirds"

    }
}

const day8 = {
    naughtyornice:{
        iconName:"fas fa-gifts",
        iconName2:"far fa-snowflake",
        text:"welcome to (10)-day 8=3x2 hours left. you all have a lot of work ahead of you. i will speak these words and then all except one of you and any curious TA will stay for one-to-one focused learning assistant version 1" 
},
    hour2:{
        iconName:"fas fa-users-cog",
        iconName2:"far fa-question-circle fa-spin",
        text:`videos in between after 15 minutes.  do you need more stories from my experience in collaboration? step 1: foundation stand on common ground (each share). step 2: define main role (focus & <i class="fas fa-kiwi-bird"></i>) conjure and edit, which do you struggle with more?  making a song is like (something you already know, or can easily imagine): what's so hard about that?`
    },
    balance:{
        iconName:"fas fa-balance-scale",
        iconName2:"fas fa-people-carry",
        text:`you and your <i class="fas fa-kiwi-bird"></i>'s time on different focus. `
    },
    empty:{
        iconName:"fas fa-yin-yang",
        iconName2:"",
        text:"empty"
    }
}

const day7 = {
    adjust:{
        iconName:"fas fa-adjust",
        text:"adjust, day/night, contrast, time"
    },
    mountain:{
        iconName:"fas fa-mountain",
        text:""
    },
    yinyang:{
        iconName:"fas fa-yin-yang",
        text:""
    },
    balance:{
        iconName:"fas fa-balance-scale",
        text:""
    },
    communication:{
        iconName:"fas fa-people-arrows",
        text:""
    },
    teamwork:{
        iconName:"fas fa-people-carry",
        text:""
    },
    workteam:{
        iconName:"fas fa-users-cog",
        text:""
    },
    poostorm:{
        iconName:"fas fa-poo-storm",
        text:""
    },      
    poo:{
        iconName:"fas fa-poo",
        text:""
    },
    poop:{
        iconName:"fas fa-poop",
        text:""
    },
    dj:{
        iconName:"fas fa-compact-disc fa-spin",
        text:"OTM"
    },        
    questions:{
        iconName:"far fa-question-circle",
        text:"questions are key"
    },
    awards:{
        iconName:"fas fa-award",
        text:"weirdest answer"
    },
    powerpoint:{
        iconName:"fa-file-powerpoint",
        text:"everyday!"
    },
    studiotime:{
        iconName:"fas fa-stopwatch-20",
        text:""
    }
}
// dan does a sweet hotkey to double what he just wrote (the dupe)
const icon = document.getElementById('icon')
const text = document.getElementById('text')
let count = 0
function clickHandle(){
    const keysArr = Object.keys(day7)
    console.log(keysArr)
    icon.innerHTML = `<i class="${day7[keysArr[count]].iconName}"></i>`
    text.innerHTML = day7[keysArr[count]].text
    if(count == keysArr.length - 1){
        count=0
    } else {
        count++
    }
}
function clickHandle2(){
    const keysArr = Object.keys(index)
    console.log(keysArr)
    icon.innerHTML = `<i class="${index[keysArr[count]].iconName}"></i>
    <i class="${index[keysArr[count]].iconName2}"></i>
    `
    text.innerHTML = index[keysArr[count]].text
    if(count == keysArr.length - 1){
        count=0
    } else {
        count++
    }
}

function clickHandle8(){
    const keysArr = Object.keys(day8)
    console.log(keysArr)
    icon.innerHTML = `<i class="${day8[keysArr[count]].iconName}"></i>
    <i class="${day8[keysArr[count]].iconName2}"></i>
    `
    text.innerHTML = day8[keysArr[count]].text
    if(count == keysArr.length - 1){
        count=0
    } else {
        count++
    }
}

function unlockandplay(step){
    if (step=1){
        let url = lockURL
        playAudio(url)
        // why does this add it not replace it
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
