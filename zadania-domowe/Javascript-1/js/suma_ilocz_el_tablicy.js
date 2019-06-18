// const tablica = [1, 2, 3, 4, 5, 6];

function dodawanieIloczyn(tablica = [1, 2, 3, 4, 5, 6]) {
    let dod = 0;
    let ilo = 1;
    for (let i = 0; i < tablica.length; i++) {

        dod += tablica[i];
        ilo *= tablica[i];
    }
    console.log(dod);
    console.log(ilo);
}


dodawanieIloczyn();