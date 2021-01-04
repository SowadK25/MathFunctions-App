var userInput = document.querySelector(".user-input");
const userButton = document.querySelector(".user-button");
const clearButton = document.querySelector(".clear-button");
var displayPFList = document.querySelector(".display-pf .result-list");
var displayPFExp = document.querySelector(".display-pf .result-exp");

userButton.addEventListener("click", (e) => {
    e.preventDefault();
    var userNum = Number(userInput.value);
    if(!Number.isInteger(userNum) || userNum <= 0 || userNum > 999999999999) {
        Swal.fire({
            icon: 'error',
            title: 'Woops...',
            text: 'Invalid input, please enter positive integers only and do not exceed the limit.',
        });
        userInput.value = "";
        displayPFList.innerHTML = "";
        displayPFExp.innerHTML = "";
    } else {
        var userPrimes = primeFactors(userNum);
        var primeCounts = count(userPrimes);

        var filteredPrimes = userPrimes.filter((item, pos, arr) => {
            return pos === 0 || item !== arr[pos-1];
        }).toString().split(",");
        var filteredCounts = primeCounts.toString().split(",");
        var primeMath = primeForm(filteredPrimes, filteredCounts);

        displayPFList.innerHTML = `CSV format: ${userPrimes}`;
        displayPFExp.innerHTML = `Exponential form: ${primeMath}`;
    }
});

clearButton.addEventListener("click", (e) => {
    displayPFList.innerHTML = "";
    displayPFExp.innerHTML = "";
});

function primeFactors(num) {
    var primesArr = [];
    var divisor = 2;

    while(num>=2) {
        if(Number.isInteger(num/divisor)) {
        primesArr.push(divisor);
        num = num / divisor;
        } else {
        divisor++;
        }
    }
    return primesArr;
}

function count(arr) {
    var counts = 0;
    var countsArr = [];
    arr.forEach(x => {
      for(var i = 0; i<arr.length; i++) {
        if(x === arr[i]) {
          counts += 1;
        }
      }
      countsArr.push(counts);
      counts = 0;
    });
    return countsArr;
}

function primeForm(primes, counts) {
    primeStrArr = [];
    primes.forEach((prime, index) => {
      const count = counts[index];
      if(count === "1") {
        primeStrArr.push(prime);
      } else {
        primeStrArr.push (prime + count.sup());
      }
      
    });
    return primeStrArr.join(" × ");
}