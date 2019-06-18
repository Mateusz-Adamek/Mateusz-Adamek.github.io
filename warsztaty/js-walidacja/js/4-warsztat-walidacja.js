const imie = document.getElementById('name');
const mail = document.getElementById('email');
const agreementOne = document.getElementById('zgoda-marketingowa-1');
const agreementTwo = document.getElementById('zgoda-marketingowa-2');
const agreementAll = document.getElementById('wszystkie-zgody');
const submit = document.getElementById('wyslij');

const validation = (e) => {
    const text1 = imie.value;
    const text2 = mail.value;
    let check1 = agreementOne.checked;
    let check2 = agreementTwo.checked;
    const check3 = agreementAll.checked;

    if (text1 == null || text2 == null ||  text3 == null ){ 
    
    } else if (check3.checked) {
        let check1 = ;
        let check2 = ;
    } else {

    }
}

submit.addEventListener('click', validation);


/*
Zwaliduj formularz znajdujący się pliku index.html.
Walidacja ma sprawdzać, czy pola “imie i nazwisko”, “adres
email” nie są puste oraz sprawdza, czy pierwszy checkbox (zgodamarketingowa-1) jest zaznaczony.
Jeżeli pola są puste lub checkbox jest niezaznaczony, to pod każdym
niepoprawnie wypełnionym polem wyświetl komunikat informujący o
błędzie.
Po zaznaczeniu checkboxa (wszystkie zgody), wszyskie pozostałe
checkboxy mają zostać automatycznie zaznaczone.


*/