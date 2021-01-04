var userInput = document.querySelector(".user-input");
const userButton = document.querySelector(".user-button");
const clearButton = document.querySelector(".clear-button");
var displayGCD = document.querySelector(".display-gcd .result");

userButton.addEventListener("click", (e) => {
    e.preventDefault();
    var userArr = userInput.value.split(',').map(Number);
    if(check(userArr)) {
        Swal.fire({
            icon: 'error',
            title: 'Woops...',
            text: 'Invalid input, please enter integers only.',
          });
          userInput.value = "";
          displayGCD.innerHTML = "";
    } else {
        displayGCD.innerHTML = `The gcd(${userArr}) is ${userArr.reduce(gcd)}`;
    }
});

clearButton.addEventListener("click", (e) => {
    userInput.value = "";
    displayGCD.innerHTML = "";
});

var gcd = (x, y) => {
    if(y === 0) {
      return Math.abs(x);
    } else {
      return gcd(y, x%y);
    }
  };

var check = (arr) => {
    for(i = 0; i < arr.length; i++) {
      if(isNaN(arr[i]) || !Number.isInteger(arr[i])) {
        return true;
      } else {
        continue;
      }
    };
};
