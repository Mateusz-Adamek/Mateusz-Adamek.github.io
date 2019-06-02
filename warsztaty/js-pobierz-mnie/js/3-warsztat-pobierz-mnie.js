const form = document.getElementById('formularz');
const inputText1 = document.getElementById('input1');
const inputText2 = document.getElementById('input2');

 //opcja alternatywna oszczędzająca !!!
// const inputs = document.getElementsByTagName('input');


const submitClickCallback = (e) => {

    e.preventDefault();
    // e.stopPropagation();
    // alert('Wysłałeś formularz');

    
    
    const text1 = inputText1.value;
    const text2 = inputText2.value;
    
    console.log(text1);
    console.log(text2);
    
    //opcja alternatywna oszczędzająca!!!
    // [...inputs].forEach((el) => {
    //     if(el.type != 'submit') {
    //         console.log(el.value);
    //     }
    // })


}

form.addEventListener('click', submitClickCallback);




/*
Stwórz formularz
<form id="formularz">
Imię: <input type="text" name="fname" value="Krystian">
<br>
Nazwisko: <input type="text" name="lname" value="Dziopa">
<br>
<input type="submit" value="Submit">
</form>

Stwórz nasłuchiwanie zdarzenia submit i zdefiniuj odpowiednią funkcję
callback.
Następnie podczas wysyłania formularza zablokuj jego domyślne działanie.
Pobierz wartości obydwu pól formularza (czyli fname i lname) i wyświetl jej w
konsoli.


*/