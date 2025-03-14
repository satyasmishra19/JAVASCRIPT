const arrAverage = (arr) => {
    let average = 0;
    for (let i of arr) {
        average += i;
    }
    return average / arr.length;
}
arr = [1, 2, 3, 4, 5, 6];
console.log(arrAverage(arr));

//2nd one
let num = 4;
const isEven = (num) => num % 2 == 0;

//3rd one
const object = {
    message: 'Hello,World!',
    logMessage() {
        console.log(this.message);
    }
};
setTimeout(object.logMessage, 1000);