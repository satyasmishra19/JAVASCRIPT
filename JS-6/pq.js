// let num =prompt("Enter the number:-");
// let arr=[];
// for (let index = 0; index < 4; index++) {
//     const element = Math.floor(Math.random()*10);
//     arr[index]=element+num;
// }
// console.log(`the array is ${arr}`);


//2nd question
// let str = 'abcdabcdefgggh';
// let ans = ''+str[0];
// for (let index = 0; index < str.length; index++) {
//     let a = str[index];
//     if (!ans.includes(a)) {
//         ans+=a;
//     }   
// }
// console.log(ans);

//3rd question
// let country=["Australia","Germany","United states of america"];
// for (let i = 0; i < country.length -1; i++) {
//     let a=country[i];
//     let b=country[i+1];
//     if (a.length < b.length) {
//         country.splice(i, 1);
        
//     } else {
//         country.splice(i+1, 1);
//     }
//     i--;
// }
// console.log(country);

//4th question
// let string=prompt("Enter the string to find no. of vowels in it:");
// let vowels = '"a","e","i","o","u"';
// let count=0;
// for (let i = 0; i < string.length; i++) {
    //     if (vowels.includes(string[i].toLowerCase())) {
        //         count++;
        //     }    
// }
// console.log(count);
 
//5th question
let start=prompt("Enter the starting index:");
let end=prompt("Enter the ending index:");
let diff = end-start+1;
console.log(Math.floor(Math.random()*diff)+start);