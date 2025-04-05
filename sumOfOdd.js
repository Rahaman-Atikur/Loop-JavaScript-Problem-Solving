


/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/
let i;
let sum = 0;
for(i = 81;i<=131;i++){
    if(i%2==1){
        sum = sum + i;
    }
    
}
console.log(sum);