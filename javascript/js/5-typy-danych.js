let wyplata = '4800';
let premia = '1400';
let calkowityDochod;

console.log(typeof wyplata);  //string
console.log(typeof calkowityDochod);  //undefined

calkowityDochod = Number(wyplata) + Number(premia); //żeby mieć pewność, że operujemy na liczbie
//dopisanie Number() - jest najprostszym sposobem przeformatowania na liczbę
console.log(calkowityDochod);



//typ boolean
const slonce = true;
console.log('================================================');
console.log(typeof slonce);
if(slonce == true) {
    console.log('Dziś jest ładna pogoda');

} else {
    console.log('Dziś jest brzydka pogoda');
}

//typ null
const btn = document.querySelector('button');
console.log(typeof btn); // z jakiegoś powodu null jest obiektem TO JEST DZIWACTWO JS

// template string - to jest wstawianie zmiennych do string-ów
const imie= 'Mateusz';
const text = `Nazywam 
              się 
              ${imie}`;  //tu są "backticki - to co pod tyldą" I ONE WIDZĄ ENTERY
console.log('================================================');
console.log(text);

