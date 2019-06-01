//deklaracja funkcji
function showText() { 
//pisanie w sposób jw. to tzw. "Camel case" czyli rozpoczynanie od małej pierwszego wyrazu, a każdego kolejnego z dużej

console.log('Tekst z funckji showText');
}

//wywołanie funkcji

showText ();


//deklaracje funkcji z parametrami
function showTextDynamic(userText) {
console.log(userText);
//userText jest wpisane i w funkcji i console.log, dlatego to co wpiszemy
//poniżej wskakuje z automatu w konsoli na stronie
}

//wywołanie funkcji z parametrami
showTextDynamic('Akademia 108 na dzień dziecka!!!');



showTextDynamic('Wczoraj był piątek');

//przykład return - zwracanie wyniku do dalszego użycia w dalszej części programu

/*function addNumbers(parametr1, parametr2) {
let result = parametr1 + parametr2;
return result;
}

let sum = adNumbers(1,2);*/
 //do zmiennej sum zostanie przypisana wartość 3





 //funkcja, która pobiera dane od usera, dodaje na końcu tekstu
//3 wykrzykniki i zwraca wynik do użycia w dalszej części programu

const getUserData = function(textInput) {
    const resultText = textInput + '!!!';
    //zwracam wynik działania funkcji (resultText)
    
    return resultText;
}
let resultFunction = getUserData('Text użytkownika');


/*
tak się dzieje po wywołaniu funkcji getUserData
let resultFunction = return resultText;
*/

console.log(resultFunction);


//getUserData('Text użytkownika');



//Funkcje strzałkowe!
const multiply = (num1, num2) => {
    const result = num1 * num2;
    return result;
}
