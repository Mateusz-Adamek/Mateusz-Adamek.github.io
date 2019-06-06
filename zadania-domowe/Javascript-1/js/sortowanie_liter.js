
 let tekst = document.getElementById('odwracany').innerText;
// function sortString(){
//     let arr = tekst.split('');
 
//     let tmp;
//     for(let i = 0; i < arr.length; i++){
//       for(let j = i + 1; j < arr.length; j++){
//         /* if ASCII code greater then swap the elements position*/
//         if(arr[i] > arr[j]){
//           tmp = arr[i];
//           arr[i] = arr[j];
//           arr[j] = tmp;
//         }
//       }
//     }
//     return arr.join('');
  
//   }



  function sortString(){
    let arr = tekst.split('');
    let sorted = arr.sort();
    return sorted.join('');
   
  }


let posortowane = sortString(tekst);
console.log(posortowane);
 

 