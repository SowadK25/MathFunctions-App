var userInputA = document.querySelector(".user-input-a");
var userInputB = document.querySelector(".user-input-b");
var userInputC = document.querySelector(".user-input-c");
const userButton = document.querySelector(".user-button");
const clearButton = document.querySelector(".clear-button");
var displayQuad = document.querySelector(".display-quad h2");

userButton.addEventListener("click", e => {
    e.preventDefault();
    var userNumA = Number(userInputA.value);
    var userNumB = Number(userInputB.value);
    var userNumC = Number(userInputC.value);

    if(!Number.isFinite(userNumA) || !Number.isFinite(userNumB) || !Number.isFinite(userNumC)) {
        Swal.fire({
            icon: 'error',
            title: 'Woops...',
            text: 'Invalid input, please enter real numbers only and do not exceed the limit.',
        });
        userInputA.value = "";
        userInputB.value = "";
        userInputC.value = "";
        displayQuad.innerHTML = "";
    } 
    else if(userNumA === 0) {
        const resultAlt = (userNumC/userNumB)*-1;
        displayQuad.innerHTML = `x = ${resultAlt}`;
    }
    else {
        const result = solveQuadratic(userNumA, userNumB, userNumC);
        displayQuad.innerHTML = `x = ${result.plus} or ${result.minus}`;
    }
});

clearButton.addEventListener("click", (e) => {
    displayQuad.innerHTML = "";
});

const solveQuadratic = (a, b, c) => {
    const quadraticPos = math.divide(math.add(-b, (math.sqrt(math.pow(b, 2) - (4*a*c)))), 2*a);
    const quadraticNeg = math.divide(math.add(-b, (math.multiply((math.sqrt(math.pow(b, 2) - (4*a*c))), -1))), 2*a);
    return {
      plus: quadraticPos,
      minus: quadraticNeg,
    };
}
