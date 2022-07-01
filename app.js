//hide notice
// const notifyDontMatch = document.getElementById('notifyDontMatch');
// notifyDontMatch.style.display = 'none';
// const notifyMatch = document.getElementById('notifyMatch');
// notifyMatch.style.display = 'none';

document.getElementById('generateBtn').addEventListener('click', function () {
    let generateInput = document.getElementById('generateInput');
    let randomNum = Math.random() * 9999;
    let roundNum = Math.round(randomNum)

    //majhe majhe 3ta number generate kore tai condition ta dewa hoyeche
    if (roundNum > 999) {
        generateInput.value = roundNum;
    }
})

//Submit section
function click(id, BtnNum) {
    document.getElementById(id).value = BtnNum;
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