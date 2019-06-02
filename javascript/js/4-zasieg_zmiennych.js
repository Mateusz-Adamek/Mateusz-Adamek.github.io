//przestrzeń globalna

//zmienne stworzone w tym zasięgu "widoczne" są wszędzie

let number = 426;
console.log(number);

const addNumber = () => {
    /*
    wchodząc do bloku kodu, czyli w przestrzeń między { a }
    wchodzimy w zasięg lokalny.
    */
    
console.log(number);
let localNumber = 1026;
console.log(localNumber);
}

//wywołanie funkcji
addNumber();
console.log(localNumber); // wyświetli nam tu błąd