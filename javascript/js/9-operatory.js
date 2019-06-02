let liczba1 = 4;
let liczba2 = 3;

// let wynik = liczba1 + liczba2;
// let wynik = liczba1 - liczba2;
// let wynik = liczba1 * liczba2;
// let wynik = liczba1 / liczba2;
// let wynik = liczba1 % liczba2;
let wynik = liczba2 % liczba1;  //w tym przypadku jest 4 * 0 = 0 i ile brakuje do 3 ---> 3, dlatego taki jest wynik

console.log(wynik);

liczba1 += 12;
console.log(liczba1);
//liczba1 = liczba1 + 12;

//liczba1 -=12;
//liczba1 = liczba1 - 12;

// liczba1 *=12;
// liczba1 = liczba1 *12;

// liczba1 /= 12;
//liczba1 = liczba1 / 12;


//porównanie
if(liczba1 == liczba2) {
    console.log('liczba1 == liczba2');

} else {
    console.log('liczba1 != liczba2');
}

if(liczba1 >= liczba2) {
    console.log('liczba1 >= liczba2');

} else {
    console.log('liczba1 < liczba2');
}


//operatory logiczne
let fileExist = true;
let fileSize = 85;


//negacja
console.log(fileExist, !fileExist);

//and
if(fileExist == true && fileSize <= 50) {
    console.log('Możesz załadować plik');
} else {
    console.log('Plik nie istnieje lub jest za duży');

}

//or
let color1 = 'red';
let color2 = 'blue';

if(color1 == 'yellow' || color2 == 'blue') {
    console.log('Poprawny kolor');
} else {
    console.log('Kolor niepoprawny');
}

let wynikColor = (color1 == 'red') ? 'kolor red' : 'kolor nie red';
console.log(`UWAGA, wynik działania ${color1 == 'red' ? 'kolor red' : 'kolor nie red'}`);
