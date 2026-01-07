function sleep_in(weekday,vacation){
    return !weekday || vacation;
}



function monkey_trouble(a_smile,b_smile){
    return a_smile == b_smile;
}


function string_times(str,num){
    let result = "";

    for (let i =0; i < num; i++){
        result += str;
    }
    return result;
}



function front_times(str,n){
    let front = str.substring(0,3);
    return front.repeat(n);
}


function string_bits(str){
    let result = "";
    for (let i = 0; i<str.length; i+= 2){
        result += str[i];
    }
    return result;
}

function caughtSpeeding(speed,isBirthday){
    if (isBirthday){
        speed -=5;
    } 
    if (speed <=60){
        return 0;
    } else if (speed<=80){
        return 1;
    } else {
        return 2;
    }
}




function fizz_buzz(n){
    if (n % 15 === 0){
        return "FizzBuzz";
    } else if (n%3 === 0){
        return "Fizz";
    } else if (n%5 === 0){
        return "Buzz";
} else {
 return n.toString()+"!";
    }
}


function specialEleven(n){
    return n%11===0 || n%11===1
    }    




function withoutDoubles(die1,die2, noDoubles){
    if (noDoubles && die1===die2){
        die1=die1===6?1:die1+1;
    }
    return die1+die2;
    }



function left2(str){
    let result = str.substring(0,2);
    let end = str.substring(2);
    return end + result;
    }