// jesli dokument zaladowany
$(document).ready(function() {
    "use strict";
    $(".pobierz").click(function() {
        $.ajax({
            url: "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
            dataType: "json",
            success: function(resultJSON) {
              /*
                         !!! Nie konwertujemy (parsujemy) do postaci obiektu JSON, bo od razu taki obiekt dostajemy w odpowiedzi !!!
                         let jsonObj = JSON.parse(resultJSON);
                         */
           
      
              // wyswietl wynik na stronie
              $("body").append($("<div id=dane-programisty>"));
              $("div").append($("<p>").text(resultJSON.imie));
              $("div").append($("<p>").text(resultJSON.nazwisko));
              $("div").append($("<p>").text(resultJSON.zawod));
              $("div").append($("<p>").text(resultJSON.firma));
            },
            onerror: function(msg) {
              console.log(msg);
            }
          });

    });

});






/* Stwórz stronę zawierającą przycisk pt. "Pobierz dane"

Po kliknięciu przycisku pobierz dane o programiście w formacie JSON z internetu za pomocą Javascript lub jQuery:

https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php

Pobrane dane wyświetl poniżej przycisku w nowym, stworzonym DIVie o id="dane-programisty".

Zadanie domowe zrób za pomocą GitHub Pages.

Podpowiedź przed wysłaniem zadania do sprawdzenia:
- pracując z mechanizmem AJAX używaj wbudowanych funkcji jQuery */