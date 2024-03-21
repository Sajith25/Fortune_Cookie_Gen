
const messages = {
    messageStart:{  
        messageStart1: ["You are on the brink of ","You are on the verge of ","You are destined for ","You are at a crossroads, choose ","You are surrounded by "],
        messageStart2: ["Amidst challenges, you are ","Amidst chaos, you find ","Amidst uncertainty, you find ","Amidst darkness, you are ","In moments of doubt, you are "],
        messageStart3: ["In times of change, you adapt ","In moments of stillness, you find ","In the face of adversity, you ","In the pursuit of dreams, you ","You attract positivity "],
        messageStart4: ["You are the architect of your destiny. ","You are the captain of your soul. ","You are the master of your fate. ","Your potential knows no bounds. ","You are a beacon of hope for others. "],
        messageStart5: ["You radiate confidence and charm. ","You possess the power to manifest your desires. ","Within every setback, you find opportunity. ","Your resilience is your greatest strength. ","You overcome obstacles with ease. "],
    },
    messageEnd:{
        messageEndings1: ["a new adventure.","a breakthrough.","greatness.","wisely.","abundance."],
        messageEndings2: ["resilient.","the light.","steadfast.","the master of your fate.","a force of nature."],
        messageEndings3: ["calm.","clarity.","strength.","purpose.","healing."],
        messageEndings4: ["opportunity.","growth.","a new beginning.","purpose.","healing."],
        messageEndings5: ["your favor.","to success.","endless possibilities.","into your life.","prosperity."]
    }
}

const advice = {
    adviceStart:{
        adviceStart1 : ["Embrace ", "Find ", "Choose ", "Stay ", "Discover "],
        adviceStart2 : ["Listen to ", "Reach for ", "Trust ", "Embrace ", "Follow "],
        adviceStart3 : ["Adapt with ", "Face ", "Persevere with ", "Rise with ", "Conquer with "],
        adviceStart4 : ["Live", "Laugh ", "Love ", "Forgive ", "Believe "],
        adviceStart5 : ["Shine brightly with ", "Dance wit h", "Dream with ", "Inspire with ", "Create with "],
    },
    adviceEnd: {
        adviceEndings1 : ["courage", "gratitude", "wisdom", "positivity", "confidence"],
        adviceEndings2 : ["determination", "openness", "kindness", "compassion", "joy"],
        adviceEndings3 : ["resilience", "strength", "hope", "optimism", "faith"],
        adviceEndings4 : ["authenticity", "generosity", "peace", "happiness", "fulfillment"],
        adviceEndings5 : ["creativity", "passion", "purpose", "connection", "abundance"],
    }
};

function randomNumber() {
    return Math.floor(Math.random()*5)
};

function randomMessage() {
    let rand1 = Math.floor(Math.random()*5)
    switch (rand1) {
    case 0:
        console.log(`${messages.messageStart.messageStart1[randomNumber()]}${messages.messageEnd.messageEndings1[randomNumber()]}`)
        break;
    case 1:    
        console.log(`${messages.messageStart.messageStart2[randomNumber()]}${messages.messageEnd.messageEndings2[randomNumber()]}`)
        break;
    case 2:
        console.log(`${messages.messageStart.messageStart3[randomNumber()]}${messages.messageEnd.messageEndings3[randomNumber()]}`)
        break;
    case 3:
        console.log(`${messages.messageStart.messageStart4[randomNumber()]}${messages.messageEnd.messageEndings4[randomNumber()]}`)
        break;
    case  4:
        console.log(`${messages.messageStart.messageStart5[randomNumber()]}${messages.messageEnd.messageEndings5[randomNumber()]}`)
        break;
    }
};

function randomAdvice() {
    let rand1 = Math.floor(Math.random()*5)
    switch (rand1) {
    case 0:
        console.log(`${advice.adviceStart.adviceStart1[randomNumber()]}${advice.adviceEnd.adviceEndings1[randomNumber()]}`)
        break;
    case 1:    
        console.log(`${advice.adviceStart.adviceStart2[randomNumber()]}${advice.adviceEnd.adviceEndings2[randomNumber()]}`)
        break;
    case 2:
        console.log(`${advice.adviceStart.adviceStart3[randomNumber()]}${advice.adviceEnd.adviceEndings3[randomNumber()]}`)
        break;
    case 3:
        console.log(`${advice.adviceStart.adviceStart4[randomNumber()]}${advice.adviceEnd.adviceEndings4[randomNumber()]}`)
        break;
    case  4:
        console.log(`${advice.adviceStart.adviceStart5[randomNumber()]}${advice.adviceEnd.adviceEndings5[randomNumber()]}`)
        break;
    }
};

function randomNumber100() {
const randNum = Math.floor(Math.random()*101)
console.log(`Your lucky number is ${randNum}.`)
}

function fortuneCookieGen() {
randomMessage();
randomNumber100();
randomAdvice();
}

fortuneCookieGen()


