/**
 * Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
 */
var side1 = 5 , side2 = 6 , side3 = 7;
var s = (side1 + side2 + side3) / 2;
var area = Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
console.log(area);

/**
 * Write a JavaScript program to calculate days left until next Christmas.
 */
var today = new Date();
var christmas = new Date(today.getFullYear() , 12 , 25);
if (today.getMonth() == 12 && today.getDate() >=25){
    christmas.setFullYear(christmas.getFullYear() + 1);
}
var one_day = 1000*60*60*24;
var count = Math.ceil(christmas.getTime()-today.getTime())/ (one_day);
console.log(count);

/**
 * Write a JavaScript program to compute the sum of the two given integers.
 * If the two values are same, then returns triple their sum.
 */

 function sumCalculator(num1, num2){
     if(num1 == num2){
         return (num1 + num2)*3;
     }else{
         return (num1 + num2);
     }
 }
 