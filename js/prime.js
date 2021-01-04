var userInput = document.querySelector(".user-input");
const userButton = document.querySelector(".user-button");
const clearButton = document.querySelector(".clear-button");
var displayPrime = document.querySelector(".display-prime .result-choice");
var displayFactors = document.querySelector(".display-prime .result-factors");

userButton.addEventListener("click", e => {
    e.preventDefault();
    var userNum = Number(userInput.value);
    if(!Number.isInteger(userNum) || userInput.value.length >= 12) {
        Swal.fire({
            icon: 'error',
            title: 'Woops...',
            text: 'Invalid input, please enter integers only and do not exceed the limit.',
        });
        userInput.value = "";
        displayPrime.innerHTML = "";
        displayFactors.innerHTML = "";
    } else {
        if(isPrimePos(Math.abs(userNum)) && userNum !== 1 && userNum !== 0 && userNum !== -1) {
            displayPrime.innerHTML = `${userNum} is prime`;
            displayFactors.innerHTML = "";
        } else if(userNum === 1 || userNum === -1 || userNum === 0) {
            displayPrime.innerHTML = `${userNum} is neither prime nor composite`;
            displayFactors.innerHTML = "";
        } else {
            displayPrime.innerHTML = `${userNum} is compsoite`;
            displayFactors.innerHTML = `The positive factors are: ${primeComposite(Math.abs(userNum))}`;
        }
    }
});

clearButton.addEventListener("click", (e) => {
    displayPrime.innerHTML = "";
    displayFactors.innerHTML = "";
});

const isPrimePos = num => {
    for(var i = 2; i<num-1; i++) {
      if(num % i === 0) {
        return false;
        break;
      }
    }
    return true;
}

const isPrimeNeg = num => {
    for(var i = -2; i>num+1; i--) {
      if(num % i === 0) {
        return false;
        break;
      }
    }
    return true;
}

const primeComposite = num => {
    factorsArr = [];
    for(var i = 2; i<num-1; i++) {
        if(num % i === 0) {
            factorsArr.push(i);
        }
    }
    return factorsArr;
}
