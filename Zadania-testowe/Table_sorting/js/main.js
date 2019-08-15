// Task 1 - Table sorting

let A = [-1, 3, -3, 1, 0];

function sorting(A) {
    let min = -1000000;
    let max = 1000000;


    if (A.length < 100000) {
        for (i = min; i <= max; i++) {
            if (!A.includes(i) && i > 0) {
                return i;
            }
        }
    } else {
        console.log("To many integers in the Array, add less than 100000")
    }
}
console.log(sorting(A));

/*  Task description:
Write a function: function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000]. */