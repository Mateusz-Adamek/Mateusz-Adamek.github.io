let table = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];


 function sort(){

    let tmp;
    for(let i = 0; i < table.length; i++){
      for(let j = i + 1; j < table.length; j++){
        /* if ASCII code greater then swap the elements position*/
        if(table[i] > table[j]){
          tmp = table[i];
          table[i] = table[j];
          table[j] = tmp;
        }
      }
    }
    return table;
  
  }

  
  console.log(sort(table));






/* Zaimplementuj funkcję, która sortuje tablicę przez bąbelkowanie.

Funkcja przyjmuje parametr - tj. tablicę do posortowania, a zwraca posortowaną talicę.

Wywołaj funkcję z tablicą [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1]. Wynik jej działania wyświetl w konsoli.

Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it

Podpowiedź przed wysłaniem zadania do sprawdzenia:
- znajdź w internecie opis działania sortowania bąbelkowego
- zastosuj pętlę w pętli :)

 */