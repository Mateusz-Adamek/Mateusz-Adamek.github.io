/* let samochod = {
    marka: 'Ferrari', 
    moc: 415,
    kolor: 'czerwony',
    przedstawSie() {
        return `Nazywam się ${this.marka} i mam moc ${this.moc} KM`;
    },
    odpal () {
        console.log('Brum, brum');
    }
}

const instancjaSamochodu1 = samochod.przedstawSie(); //wywołanie
console.log(instancjaSamochodu1);

samochod.marka = 'Fiat';
samochod.moc = 80;
const instancjaSamochodu2 = samochod.przedstawSie();
console.log(instancjaSamochodu2);

samochod.odpal(); //wywolanie */




class Ogloszenie {
    constructor(id, tytul, tresc, cena, lokalizacja) {
        this.id = id;
        this.tytul = tytul; //prawa strona ma odpowiadać parametrowi w konstruktorze
        this.tresc = tresc; //lewa strona to jest nasz wybór jak my to sobie nazwiemy
        this.cena = cena;
        this.lokalizacja = lokalizacja;
    }

    wyswietl() {
        document.write(
            `Ogłoszenie nr ${this.id}<br>
            Tytuł: ${this.tytul} <br>
            Treść: ${this.tresc}<br>
            Cena: ${this.cena}<br>
            Lokalizacja: ${this.lokalizacja} <br><br>
            `)
    }
}

const ogloszenie1 = new Ogloszenie(  //new tworzy nowy obiekt, na bazie podanej klasy
    000122345,
    'Sprzedam multiplę',
    'Sprawna, tylko na msze jeżdżona',
    12000,
    'Warszawa'
)
ogloszenie1.wyswietl();

const ogloszenie2 = new Ogloszenie (
000122346,
'Działeczka pod Warszawą',
'Taniutka, dużo zielenie wokół, 0 bezdomnych',
500,
'Kąck'

)

ogloszenie2.wyswietl();
