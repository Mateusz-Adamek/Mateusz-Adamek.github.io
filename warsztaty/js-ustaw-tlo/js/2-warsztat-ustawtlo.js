const btn = document.getElementsByClassName('button')[0];  // Zawsze tam gdzie jest "Elements" otrzymujemy tablicę
// która wymaga indeksu "[0]"- query też. Gdybyśmy użyli ById , nie byłoby to konieczne

const p1 = document.getElementById('paragraf1');
const p2 = document.getElementById('paragraf2');

const ustawTlo = (e) => {
    p1.classList.toggle('par-decor1');
    p2.classList.toggle('par-decor2');
}


// ustawTlo.addEventListener('click', () => {
//     p1.classList.add('par-decor1');
//     p2.classList.add('par-decor2');
//     e.preventDefault();
//     e.stopPropagation();
//     alert('Zmieniłeś tło')
// });

btn.addEventListener('click', ustawTlo);