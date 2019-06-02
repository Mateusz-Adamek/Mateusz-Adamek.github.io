for (let i = 0; i < 8; i++) {
    document.write(`Obrót pętli <b> nr ${i+1}</b>, wartość zmiennej <b>i = ${i}</b><br>`)
    //dobry sposó na debudowanie błędó w pętli
}

const imiona = ['Magda', 'Czesław', 'Lucyna', 'Wiesław'];
// jak najlepiej przejść po tablicy pętlą:
const imionaCount = imiona.length; // 4

for (let i = 0; i < imionaCount; i++) { //i jest <, a nie <=, bo tabela jest od 0
    console.log(`Imię ${imiona[i]}`);
}

//forEach - pętla stosowana najczęściej w tabelach (array) 

imiona.forEach(
    function(value, index) {
        console.log(`Wartość indeksu ${index} tablicy imiona to: ${value}`);
    }
);

console.log('========================');

//for in - do obiektów sotsowana najczęściej

const samochod = {
    marka: 'Opel',
    moc: 70,
    stan: 'używany'
}

for(let i in samochod) {
    console.log(`Nazwa właściwości obiektu to: ${i}, a jej wartość to: ${samochod[i]} `)
}


console.log('========================');

//while i do while - można tym łątwo zawiesić przeglądarkę, bo poleci w nieskończoność pętla

let item = 15;
while(item < 10) {
    console.log(`While === item = ${item}`);
    item++; //musimy po każdej operacji zwiększać item, żeby on kiedyś dotarł do 10

}

//do while ZAWSZE wykona się chociaż jeen raz
do {
    console.log(`Do while === item = ${item}`);
    item++;
} while (item < 10)

console.log('============break i continue============');

//break i continue - !! nie działa w forEach (które nie do końca jest pętlą, a bardziej funkcją)

for(let i = 0; i <= 20; i++) {
    if(i % 2 == 0) {
        //jeśli i jest parzyste - zatrzymuję bieżącą iterację i przechodzę do następnej - continue
        continue;
    }
// jeśli i >= 10 całkowicie zatrzymuję działanie pętli
    if(i >= 10) {
        break;
    }
    console.log(`Obrót pętli - zmienna i = ${i}`);
}