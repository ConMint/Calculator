function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(operator,a,b) {
    if (operator === '+') {
        return add(a,b);
    } else if (operator === '−') {
        return subtract(a,b);
    } else if (operator === '×') {
        return multiply(a,b);
    } else if (operator === '÷') {
        return divide(a,b)
    }
}

const clearButton = document.getElementById('clearbutton');

clearButton.addEventListener('click', function() {
    display2.innerText = "";
    display1.innerText ="";
});

let display1 = document.getElementById('display1');

display1.innerText = '';

let display2 = document.getElementById('display2');

display2.innerText = '';

let numBtns = document.getElementsByClassName('numbtn');

for (let i = 0 ; i < numBtns.length; i++) {
    numBtns[i].addEventListener('click' , function() {
        display2.innerText += numBtns[i].innerText
    }) ; 
 }

 let oppBtns = document.getElementsByClassName('btn');

 for (let i = 0 ; i < oppBtns.length; i++) {
     oppBtns[i].addEventListener('click' , function() {
        // move the first display line up to the second when an operator is clicked
        if (oppBtns[i].innerText === '.') {
            if (display2.innerText.includes('.')) {
            return 
            } else {
            appendPoint()};
        } else {
         display1.innerText += ' ' + display2.innerText + ' ' + oppBtns[i].innerText;
         display2.innerText ='';
        }
        
         
        })}

let equalsBtn = document.getElementById('equalsBtn');
let deleteBtn = document.getElementById('deletebutton');

deleteBtn.addEventListener('click', () => {
    deleteNumber();
})


let array = [];

equalsBtn.addEventListener('click', function() {
    const split = display1.innerText.split(' ');
    

    
    split.pop();
    
    while (split.length >= 3) {
    
    const firstNum = parseFloat(split[0]);
    const operator = split[1];
    const secondNum = parseFloat(split[2]);
    const result = (operate(operator,firstNum,secondNum));

    



    display1.innerText = roundResult(result)
    split.shift();
    split.shift();
    split.shift();
    
    
    split.unshift(result)
    console.log(split[0])
    console.log(typeof(split[0]))
    if (isNaN(split[0])) {
        display1.innerText = 'ERROR';
        display1.style.color = 'red';
        display2.innerText = '';
        return
    } else {
        display1.style.color = 'black';
    }
    console.log(split)
    }

})









function roundResult(number) {
    return Math.round((number + Number.EPSILON) * 1000) / 1000
  }

  function appendPoint() {
    display2.innerText += '.'
  }


  function deleteNumber() {
    display2.innerText = display2.innerText
      .toString()
      .slice(0, -1)
  }


  function makeNeg(number) {
    if (display2.innerText != "") {
        number = display2.innerText;
        display2.innerText = (0 - number);
    } else {
        display2.innerText += '-'
    }
    

  }

let signBtn = document.getElementById('changesign');

signBtn.addEventListener('click', () => {
    makeNeg();
})