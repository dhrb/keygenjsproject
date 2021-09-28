var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var arr3 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
var arr4 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
var arr5 = ['!', '@', '#', '$', '%', '^'];

document.getElementById('param1').oninput = function () {
    // ползунок
    document.getElementById('password-lenght').innerHTML = this.value;
}

generatePass();

document.getElementById('generator').onclick = generatePass;

function generatePass() {
    var result = [];

    if (document.getElementById('param2').checked){
        //включены ли цифры
        result = result.concat(arr2);
    }
    if (document.getElementById('param3').checked){
        //включены ли строчные символы
        result = result.concat(arr3);
    }
    if (document.getElementById('param4').checked){
        //включены ли прописные символы
        result = result.concat(arr4);
    }
    if (document.getElementById('param5').checked){
        // включены ли спецсимволы
        result = result.concat(arr5);
    }
    result.sort(compareRandom);//перемешиваю рез.массива
    // console.log(result);
    document.getElementById('out').innerHTML = '';
    console.log(result);
    for (var k = 0; k < 6; k++){
    var pass = ''; //будущий пароль
    var passLength = parseInt(document.getElementById('param1').value);// длина пароля
    for (var i = 0; i < passLength; i++) {
        //цикл по длине пароля
        //выбираю случайное значение из массива result
        pass += result[randomInteger(0, result.length - 1)];
    }
    // console.log(pass)
    document.getElementById('out').innerHTML += '<p>' + pass + '</p>';
    }
}

function compareRandom(a, b) {
    return Math.random() - 0.5;
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}