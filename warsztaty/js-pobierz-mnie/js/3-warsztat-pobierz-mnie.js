const sub = document.getElementById('submit');

const submitClickCallback = (e) => {

    e.preventDefault();
    e.stopPropagation();
    alert('Wysłałeś formularz');

    const inputText1 = document.getElementById('input1');
    const inputText2 = document.getElementById('input2');
    
    const text1 = input1.value;
    const text2 = input2.value;
    
    console.log(text1);
    console.log(text2);

}

sub.addEventListener('click', submitClickCallback);



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