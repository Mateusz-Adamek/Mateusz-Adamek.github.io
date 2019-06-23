
let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

let list = document.createElement("ol");
let textList = document.createTextNode("Lista miast: ");
let classAtr = document.createAttribute("class");
classAtr.value="cityList";


document.body.appendChild(list);
list.appendChild(textList);
list.setAttributeNode(classAtr);
list.setAttribute("type", "1");

cities.forEach(function(element, index) {
    // Tworzenie elementów listy
    let li = document.createElement("li");
    let textLi = document.createTextNode(cities[index]);
    list.appendChild(li);
    li.appendChild(textLi);
    
    // Dodawanie klasy
    let classAtrCity = document.createAttribute("class");
    classAtrCity.value="city";
    li.setAttributeNode(classAtrCity);
});



/* Wyświetl nazwy miast w postaci listy numerowanej.
Miasta zostały umieszczone w tablicy poniżej. 
Znacznik listy i elementów listy stwórz w JavaScript. 
Do każdego elementu listy dodaj klasę "city". 
Następnie za pomocą odpowiednich metod wyświetl listę na stronie.

let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];
Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it

Podpowiedź przed wysłaniem zadania do sprawdzenia:
- za pomocą JavaScript należy stworzyć elementy HTML, a potem dopiąć je do strony :)
- do wyświetlania miast użyj pętli (dowolnego rodzaju) */