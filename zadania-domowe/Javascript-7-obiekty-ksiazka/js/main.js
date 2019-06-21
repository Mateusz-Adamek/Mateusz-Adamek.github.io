class Ksiazka {
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;

    }
    opiszKsiazke() {
        if (this.przeczytana !== false) {
          
            console.log(`Książka, ma tytuł "${this.tytul}", autorem jest ${this.autor} i została przeczytana `)
        } else {
            console.log(`Książka, ma tytuł "${this.tytul}", autorem jest ${this.autor} i nie została przeczytana `)
        }
       
    }
   

}

// Tworzymy 3 instancje książek
let prawoDoZemsty = new Ksiazka("Prawo do zemsty", "Denis Szabałow", false);
// prawoDoZemsty.opiszKsiazke(); - wyłączamy wywoływanie w tym miejscu

let wCieniuMistrza = new Ksiazka("W cieniu mistrza", "Edgar Allan Poe", true);
// wCieniuMistrza.opiszKsiazke(); - wyłączamy wywoływanie w tym miejscu

let krolestwo = new Ksiazka("Królestwo", "Szczepan Twardoch", false);
// krolestwo.opiszKsiazke(); - wyłączamy wywoływanie w tym miejscu

// Stworzenie tablicy globalnej
let tablicaGlobalna = [prawoDoZemsty, wCieniuMistrza, krolestwo];
// I zmiennej n, która bedzie otrzyywałą wartość = ilość przeczytanych ksiązek
let n = 0; 

//Przejście po elementach w celu sprawdzenia, które zostały przeczytane
tablicaGlobalna.forEach(function(element, index){
// console.log(element.przeczytana)  -- sprawdzenie gdzie się znajdujemy
element.opiszKsiazke();
if (element.przeczytana == true){
    n++;
} else {}

});
console.log("Ilość książek, które zostały przeczytane: " + n);





// Napisz klasę "Ksiazka", która ma właściwości "tytul", "autor", "przeczytana" 
// (przeczytana jest typu Boolean) oraz jedną metodę "opiszKsiazke",
//  która zwraca stringa opisującego tą książkę wg. wzoru
//  "Książka ma tytuł Wiedźmin, autorem jest Andrzej Sapkowski i 
// została przeczytana.".

// Stwórz 3 instancje obiektu tej klasy 
// z czego jedna z książek ma być już przeczytana, 
// a następnie stwórz nową tablicę globalną i dodaj do niej te 3 książki.

// Następnie napisz funkcję "iloscPrzeczytanych",
//  która jako parametr przyjmuje tablicę obiektów
//  (naszych książek, ktore stworzyliśmy),
//  a zwraca nam ilość książek, ktore zostały przeczytane. 
// Podczas iteracji po tablicy (wewnątrz tej funkcji) i sprawdzania,
//  czy książka jest przeczytana, wywołuj także na obiekcie metodę opiszKsiazke(),
//  a wynik jej działania wyświetlaj w konsoli.

// Na samym końcu wyświetl w konsoli ilość przeczytanych książek

// Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it