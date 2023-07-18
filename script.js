function changeText() {
    let textList = ['text1','text2','text3','text4','text5'];
    let randomNumber = getRandomNumber(0,textList.length - 1);
    document.getElementById("header").innerHTML = textList[randomNumber];
}

function getRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min *1)+min);
}