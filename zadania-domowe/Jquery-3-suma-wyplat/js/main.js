$(document).ready(function(){
let btn = $("#count-sum");



//n - zwraca nam ilość parametrów, któe należy dodać
n = $(".salary").length;
// console.log(n);

//tmp przybiera wartość konkretnego elementu

let suma = 0;



$("button").click(function(){
// console.log("Guzik został kliknięty");
for (let i= 0; i <= n; i++) {
    tmp = $("#person"+i).find(".salary").text() *1; //PRZEKSZTAŁCAMY TEST NA LICZBĘ MNOŻĄC PRZEZ JEDEN!!!
   suma = suma + tmp;
   
}
$("#sum").text(suma);
// console.log(suma);
});

});


/* 
Zaprogramuj przycisk #count-sum aby po kliknięciu pobrał wypłaty wszystkich pracowników i je zsumował.
Uzyskany wynik wyświetl w elemencie o ID #sum.

Zadanie zrób z wykorzystaniem biblioteki jQuery.

Zadanie podsyłamy z użyciem https://repl.it

Podpowiedzi:
- oprogramuj zdarzenie "click" przycisku #count-sum
- pobierz wszystkie wypłaty i za pomocą pętli je zsumuj
- pobierz element o ID #sum i podmień mu treść na obliczoną sumę




Na stronie jest blok z listą pracowników i ich wypłatami w bieżącym miesiącu:

    <div id="employees">
      <div>
        <h2>Wypłaty pracowników</h2>
      </div>
      <div id="person1">
        <span class="first-name">Marcin</span>
        <span class="last-name">Lubicki</span>
        <span class="salary">6500</span>
      </div>
      <div id="person2">
        <span class="first-name">Katarzyna</span>
        <span class="last-name">Rudlowska</span>
        <span class="salary">2600</span>
      </div>
      <div id="person3">
        <span class="first-name">Robert</span>
        <span class="last-name">Zajda</span>
        <span class="salary">4500</span>
      </div>
      <div id="person4">
        <span class="first-name">Anna</span>
        <span class="last-name">Szapiel</span>
        <span class="salary">3700</span>        
      </div>
      <div id="person5">
        <span class="first-name">Piotr</span>
        <span class="last-name">Moskal</span>
        <span class="salary">4460</span>        
      </div>     
      <div>
        <h3>Suma: <span id="sum">0</span> PLN</h3>
      </div>
    </div>
    <button id="count-sum">Oblicz sumę wypłat</button>
 */