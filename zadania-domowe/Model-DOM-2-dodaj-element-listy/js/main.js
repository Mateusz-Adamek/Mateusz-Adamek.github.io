function addElement() {
    let n = document.getElementsByTagName("li").length;
    let ul = document.getElementById("items");
    let li = document.createElement("li");
    let liText = document.createTextNode("Item " + (n+1));
    let classLi = document.createAttribute("class");
    
    classLi.value="item";
    ul.appendChild(li);
    li.appendChild(liText);
    li.setAttributeNode(classLi);
    n = document.getElementsByTagName("li").length;
}

// document.getElementById("btn").onclick = addElement;  --- to by było prostrze, jak byśmy mieli do dyspozycji ID.

let z = document.getElementsByTagName("BUTTON");
z[0].onclick = addElement;


/* Dodaj poniższą listę w znaczniku body:

    <ul id="items">
        <li class="item">Item 1</li>
        <li class="item">Item 2</li>
        <li class="item">Item 3</li>
    </ul>
    <button>Add item</button>
Napisz skrypt, który po kliknięciu w przycisk doda kolejny element do listy z nazwą zakończoną liczbą kolejnego elementu - np. Item 4, Item 5, Item 6 itd.
Każdemu z elementów listy ustaw klasę "item"

Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it

Podpowiedź przed wysłaniem zadania do sprawdzenia:
- napisz funkcję obsługującą klik przycisku button
- musisz pobrać obecną ilość item'ów w liście, aby dodać numer kolejnego
- musisz stworzyć w JavaScript nowy element w HTML i dodać go do listy używając odpowiedniej do tego metody w JS :) */