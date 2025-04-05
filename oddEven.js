/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */
let i;
for(i=61;i<=100;i++){
    if(i%2==1){
        console.log(i);
    }
    i++;
}
let j = 78;
while(j<=98){
    if(j%2==0){
        console.log(j);
    }
    j++;
}