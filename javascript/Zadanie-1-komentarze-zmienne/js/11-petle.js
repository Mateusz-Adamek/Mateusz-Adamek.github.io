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