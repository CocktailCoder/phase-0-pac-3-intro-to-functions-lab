function shout(string) {
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase());
}

function logWhisper(string){
    console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
    let cantHear = "I can't hear you!";
    let yesIndeed ="YES INDEED!";
    let loveYou = "I love you, too.";
    if (string.toLowerCase(string) === string) {
        return cantHear;
    }
    else if (string.toUpperCase(string) === string){
        return yesIndeed;
    }
    else ("I love you, Grandma." === string) 
        return loveYou;
}
