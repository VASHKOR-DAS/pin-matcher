//hide notice
// const notifyDontMatch = document.getElementById('notifyDontMatch');
// notifyDontMatch.style.display = 'none';
// const notifyMatch = document.getElementById('notifyMatch');
// notifyMatch.style.display = 'none';

document.getElementById('generateBtn').addEventListener('click', function () {
    let generateInput = document.getElementById('generateInput');
    let randomNum = Math.random() * 9999;
    //let roundNum = Math.round(randomNum);

    //majhe majhe 3ta number generate kore tai condition ta dewa hoyeche
    if (randomNum > 999) {
        //parseInt korle fraction (dosomik) number show kore na
        randomNum = parseInt(randomNum);
        generateInput.value = randomNum;
    }
})

//Submit section
function click(id, BtnNum) {
    document.getElementById(id).value = document.getElementById(id).value + BtnNum;
}

document.getElementById('Btn0').addEventListener('click', function () {
    click('submitInput', 0);
})

document.getElementById('Btn1').addEventListener('click', function () {
    click('submitInput', 1);
})

document.getElementById('Btn2').addEventListener('click', function () {
    click('submitInput', 2);
})

document.getElementById('Btn3').addEventListener('click', function () {
    click('submitInput', 3);
})

document.getElementById('Btn4').addEventListener('click', function () {
    click('submitInput', 4);
})

document.getElementById('Btn5').addEventListener('click', function () {
    click('submitInput', 5);
})

document.getElementById('Btn6').addEventListener('click', function () {
    click('submitInput', 6);
})

document.getElementById('Btn7').addEventListener('click', function () {
    click('submitInput', 7);
})

document.getElementById('Btn8').addEventListener('click', function () {
    click('submitInput', 8);
})

document.getElementById('Btn9').addEventListener('click', function () {
    click('submitInput', 9);
})

//2nd Function
function clickBtnC(id, BtnValue) {
    document.getElementById(id).value = ""
    document.getElementById(id).value = BtnNum;
}
document.getElementById('BtnC').addEventListener('click', function () {
    clickBtnC('submitInput', "");
})


// document.getElementById('BtnLessthan').addEventListener('click', function () {
//     click('submitInput', );
// })

//Submit Button
let submitInput = document.getElementById('submitInput');
let submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', function () {

    if (generateInput.value == submitInput.value) {
        document.getElementById('notifyMatch').style.display = 'block';
        document.getElementById('notifyDontMatch').style.display = 'none';

    } else {
        document.getElementById('notifyDontMatch').style.display = 'block';
        document.getElementById('notifyMatch').style.display = 'none';
    }
    
})