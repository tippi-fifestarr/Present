let lockURL = "WB3-GOT.wav"
let drumURL = "camel(snare).mp3"

let iconFrame = "<i class=\"${iconName}\"></i>" 

const index = {
    welcome:{
        iconName:"fas fa-door-open",
        iconName2:"far fa-snowflake",
        text:"welcome to WC&MP online 'OF' course: the album. click the below button to nav",
        linktext:"http://www.boober.org"
    },
    days1:{
        iconName:"fas fa-road fa-spin",
        iconName2:"fas fa-map-marked-alt",
        text:"as of ${currentDay}, there has been no roadmap to making a song.  there are steps, beginnings, middles, ends, arguments, wingbirds, questions, answers, awards, files, artistnames, tracktittles, tyops, and forgotten junk between the keys or gems.  and if you are lucky enough to find someone else who cares enough to listen with care to your music, you will be the roadmap. below the below button are links; they are the maps, or at least, they are the iconic links to days past.",
        linktext:["./day1.html","./day2.html","./day3.html","./day4.html","./day5.html","./day6.html","./day7.html", "./day8.html", "./day9.html", "./day10.html", "./tippibio.html", "./vocab.html"]
    },
    wingbird:{
        iconName:"fas fa-kiwi-bird",
        iconName2:"fas fa-file-archive",
        text:"compressed version(s) for busy wingbirds",
        linktext:"./compression.html"
    },
    usefulLinks:{
        text:`https://www.ableton.com/en/one-thing/?autoplay=ayako-okamura
        https://www.ableton.com/en/blog/make-10000-beats-story-stlndrms/
        `
    }
}

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

const day10 = {
    question1:{
        iconName:"far fa-question-circle fa-spin",
        text:"are we done?  what more do you need to be a Music Producer?  How to be better?  How to successfully make a song, or what makes a song successful?  In which ways did your answers to the 'welcome survey' change?"
    },
    vision:{
        iconName:"far fa-eye",
        text:"what i saw before i met you, how i saw you grow, where will you go?"
    },
    WB:{
        iconName:"fas fa-kiwi-bird",
        text:`"Groovemiki & WB2" 
        Q&A is like Call & Response?
        <img src="./img/loopsonscreen1.png">
        <img src="./img/loopsonscreen2.png">
        <img src="./img/loopsonscreen3.png"> `
    },
    finalProject:{
        iconName:"fas fa-people-carry",
        text:"work together: find common ground, plan, divide, conquer the mountain"
    },
    keys:{
        iconName:"fas fa-key",
        text:"what keys do you think you got?"
    },
    secrets:{
        iconName:"fas fa-user-secret",
        text:"which obvious secrets did you find?"
    },
    longRun:{
        iconName:"fas fa-hiking",
        text:"what do I carrry? what is important to us, in the long run?"
    },
    graduate:{
        iconName:"fas fa-user-graduate",
        text:"add my wechat: mustached1; WC&MP support group!"
    },
}

const day9 = {
    vision:{
        iconName3:"fas fa-file-audio",
        iconName2:"fas fa-gifts",
        iconName1:"far fa-eye",
        text:"face your dragons, demons, emotions. try to see your own patterns.  make vs let, ask vs tell (gentle reminders)",
    },
    nextDay1:{
        iconName3:"far fa-question-circle fa-spin",
        iconName2:"fab fa-500px",
        iconName1:"fab fa-angellist",
        text:`Q&A is like Call & Response.
        1. 
        <img src="./img/loopsonscreen1.png">
        <img src="./img/loopsonscreen2.png">
        <img src="./img/loopsonscreen3.png"> `
    },
    questions:{
        iconName3:"far fa-question-circle fa-spin",
        iconName2:"fas fa-mountain",
        iconName1:"fas fa-stopwatch-20",
        text:`<img src="./img/Tuckmans_stages_of_group_development.jpg">`
    },
    poopGroup:{
        iconName3:"fas fa-poo-storm",
        iconName2:"fas fa-compress-arrows-alt",
        iconName1:"fas fa-edit",
        text:` <img src="./img/slide5.jpg">
        `,
    },
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
        iconName2:"fab fa-angellist",
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

function clickHandle(){
    const keysArr = Object.keys(day7)
    icon.innerHTML = `<i class="${day7[keysArr[count]].iconName}"></i>`
    text.innerHTML = day7[keysArr[count]].text
    if(count == keysArr.length - 1){
        count=0
    } else {
        count++
    }
}
function clickHandle10(){
    const keysArr = Object.keys(day10)
    icon.innerHTML = `<i class="${day10[keysArr[count]].iconName}"></i>`
    text.innerHTML = day10[keysArr[count]].text
    if(count == keysArr.length - 1){
        count=0
    } else {
        count++
    }
}
function clickHandle2(){
    const keysArr = Object.keys(index)
    icon.innerHTML = `<i class="${index[keysArr[count]].iconName}"></i>
    <i class="${index[keysArr[count]].iconName2}"></i>
    `
    text.innerHTML = index[keysArr[count]].text
    loopObject(count, keysArr)
}

function clickHandle8(){
    const keysArr = Object.keys(day8)
    icon.innerHTML = `<i class="${day8[keysArr[count]].iconName}"></i>
    <i class="${day8[keysArr[count]].iconName2}"></i>
    `
    text.innerHTML = day8[keysArr[count]].text
    loopObject(count, keysArr)
}

function clickHandle9(){
    const keysArr = Object.keys(day9)
    icon.innerHTML = `<i class="${day9[keysArr[count]].iconName3}"></i>
    <i class="${day9[keysArr[count]].iconName2}"></i>
    <i class="${day9[keysArr[count]].iconName1}"></i>
    `
    // imgbox.innerHTML = day9[keysArr[count]].find()
    text.innerHTML = day9[keysArr[count]].text
    if(count == keysArr.length - 1){
        count=0
    } else {
        count++
    }
}

function clickHandleIndex(){
    const keysArr = Object.keys(index)
    // https://dmitripavlutin.com/is-array-javascript/
    if (Array.isArray(keysArr.linktext)){
        for (length of keysArr.linktext)
        {
            
        }
    }
    // for (length of 
    loopObject()
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
function loopObject(count, keysArr){
    if(count == keysArr.length - 1){
        count=0
    } else {
        count++
    }
}
