jQuery(document).ready(function () {
    'use strict';
    let paragrafObj1 = $('#par1').text();
    let paragrafObj2 = $('#par2').text();
    let paragrafObj3 = $('#par3').text();
    let paragrafObj4 = $('#par4').text();
    let paragrafObj5 = $('#par5').text();
    let tablica = [paragrafObj1, paragrafObj2, paragrafObj3, paragrafObj4, paragrafObj5];
    console.log(tablica); // tablica działa


    console.log(paragrafObj5); // pobiera dobrze

    $('#goBtn').click(function () {
        
        tablica.unshift(tablica[4]); //dodaje nowe elementy i zwraca długość tablicy
        tablica.pop(tablica[5]); // usuwa ostatni element i zwraca jego wartość
        console.log(tablica);
   
        $('#par5').text(tablica[4]);
        $('#par4').text(tablica[3]);
        $('#par3').text(tablica[2]);
        $('#par2').text(tablica[1]);
        $('#par1').text(tablica[0]);
    });
    $('#backBtn').click(function () {
        tablica.push(tablica[0]); //dodaje nowe elementy na końcu i zwraca długość tablicy
        tablica.shift(tablica[0]); // usuwa pierwszy element i zwraca jego wartość
        console.log(tablica);
        $('#par5').text(tablica[4]);
        $('#par4').text(tablica[3]);
        $('#par3').text(tablica[2]);
        $('#par2').text(tablica[1]);
        $('#par1').text(tablica[0]);
    });
});


//Pobieranie tekstu
//var tekstParagrafuPierwszego = $('#paragraf').text("Nowy tekst"); // przekazanie parametru do funkcji
//console.log("tekstParagrafuPierwszego", tekstParagrafuPierwszego);
//let paragrafObj = $('#paragraf').text();

//console.log("paragrafObj", paragrafObj);

//Dodawanie tesktu
//$(".paragraf").text(tekstParagrafuPierwszego);

//Dodawanie HTML
//$(".paragrafnext").html("<p>To jest <strong>To nowy</strong> z dodanym <br> HTML</p>");


//Dodawanie treści na końcu selektora
//$(".paragrafnext").append("<p>Treść na końcu selektora</p>");

//Dodawanie treści za selektorem
//$(".paragrafnext").after("Treść za selektorem");

//Usuwanie TYLKO jego zawartości
//$('.paragraf').empty();  // TO SIĘ BARDZO CZĘSTO UŻYWA, A NIE REMOVE





// 3. Po kliknięciu w przycisk ostatni paragraf ma zostać przeniesiony na
// pierwszą pozycję
// 4. Kolejne kliknięcia mają przenosić aktualnie ostatni paragraf na
// pierwszą pozycję







// 5. Stwórz kolejny przycisk (element button), który będzie miał działanie odwrotne,
//  czyli będzie przenosił paragrafy z pierwszej pozycji na ostatnią