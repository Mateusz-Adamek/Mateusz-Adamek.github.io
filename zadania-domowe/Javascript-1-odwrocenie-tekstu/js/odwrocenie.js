//deklaracja funkcji
function showText() {
    let tekst = document.getElementById('odwracany').innerText;
    // console.log(tekst.length);
    let array = [tekst[0], tekst[1], tekst[2], tekst[3], tekst[4], tekst[5], tekst[6], tekst[7], tekst[8], tekst[9], tekst[10]];
    array.reverse();
    console.log(array.join(''));
}
//wywołanie funkcji
showText();




// let tekst = document.getElementById('odwracany').innerText;
// console.log(tekst.length);

// for (let i = 0; i < tekst.length; i++) {

//     console.log(tekst[i]);

// }

// let array = [tekst[0], tekst[1], tekst[2], tekst[3], tekst[4], tekst[5], tekst[6], tekst[7], tekst[8], tekst[9], tekst[10]];
// array.reverse();

// // let array = tekst.split(" ",tekst.length); - nie działa!!!
// // array.reverse() = arrayReverse; - nie działa!!!

// // array.forEach(
// //     function(value, index) {
// //         console.log(`Wartość indeksu ${index} tablicy array to: ${value}`);
// //     }
// // );

// console.log(array.join(''));