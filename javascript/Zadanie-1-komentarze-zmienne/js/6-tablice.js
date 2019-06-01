let panstwa = ['Portugalia', 'Argentyna', 'Dominikana', 'Kongo', 'Norwegia'];
console.log(panstwa[1]); //odwołujemy się po indeksie do konkretnej wartości

//dodaje na końcu tablicy 3 elementy
panstwa.push('Indie', 'Nepal', 'Panama');

//usuwa ostatni element tablicy
panstwa.pop();


//dodamy na początku dwa państwa
panstwa.unshift('Polska', 'Słowacja');

//usuwamy z początku tablicy element
const deletedCountry = panstwa.shift(); //do zmiannej został przypisany usunięty element do przechowania



console.log(panstwa);
console.log(`Właśnie usunąłem z tablicy ${deletedCountry}`);
console.log(`Moja tablica składa się z ${panstwa.length} elementów`);

//reverse
console.log(panstwa.reverse());

//join - zmienia na string
console.log(panstwa.join('-----??-----'));
console.log(panstwa); // -- sprawdzamy, czy tablica istnieje po joinie

//indexOf || includes ES6
console.log(panstwa.indexOf('Dominikana'));
// jeżeli elementu nei ma w tablicy, to wywali nam "-1" TO JEST WAŻNE!!!!

console.log(panstwa.includes('Dominikana')); // to sprawdza czy jest czy nie ma TRUE/FALSE

//isArray - sprawdzamy, czy zmienna jest tablicą
console.log(Array.isArray(panstwa));

//toString - zmienia tablicę na string. Separatorem jest ","
console.log(panstwa.toString()); //bierzemy naszą tablicę i wywołujemy na niej metodę toString
//join ma więcej możliwości, bo można wybrać separator

//łączenie tablic
let panstwaAfryki = ['RPA', 'Egipt', 'Senegal'];
let zbiorPanstw = panstwaAfryki.concat(panstwa); //co wpiszemy pierwsze będzie pierwsze w tablicy,
//metoda concat tworzy kopię tablicy, a nie modyfikację - działąmy na kopii tablicy

console.log(zbiorPanstw);

//łączenie tablic w ES5 - bonus, to też tworzy kopię, oryginały zostają
let zbiorPanstwSpread = [...panstwaAfryki, ...panstwa];
console.log(zbiorPanstwSpread);

//usuwanie elementów ze środka tablicy
panstwaAfryki.splice(2, 0, 'Sudan', 'Zanzibar'); //dwa pierwsze usuwają, a potem mozemy dowolna ilośc elemntów wstawić na ich miejsce
console.log(panstwaAfryki);

