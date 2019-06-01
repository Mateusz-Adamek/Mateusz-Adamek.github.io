let cenaChlebaZabrze = 2.3;
let cenaChlebaPoznan = 2.45;

if(cenaChlebaZabrze > cenaChlebaPoznan) {
document.write(`Cena w Zabrzu jest wyższa od poznańskiej`);

} else if (cenaChlebaZabrze < cenaChlebaPoznan) {
    document.write(`Chleb w Zabrzu jest tañszy od poznañskiego`);
} else {
    document.write(`Chleb w Zabrzu kosztuje tyle samo, co poznañski`);
}



//switch - jeśli

const weekDay = new Date().getDay(); //zwróci dzień tygodnia jako liczbę
console.log(weekDay);
switch(weekDay) {  //przekazujemy mu tą mzienną, którą bdziemy sprawdzać
case 1:
console.log('Poniedziałek');
break;

case 2:
console.log('Wtorek');
break;

case 3:
console.log('Środa');
break;

case 4:
console.log('Czwartek');
break;

case 5:
console.log('Piątek');
break;

case 6:
console.log('Sobota');
break;

case 7:
console.log('Niedziela');
break;

//deafault jest opcjonalny i nie musi posiadać instrukcji break, choć może
default:
console.log('Nie mam pojęcia jaki dzisiaj jest dzień tygodnia');
}


// tydzień w tablicy

const week = ['Pon', 'Wto', 'Śro', 'Czw', 'Pt', 'Sb', 'Nd'];
console.log(week[weekDay-1]);
// to jest dużo efektywniejsza droga, ale wczesniejszy przykłąd dobrze obrazuje switcha