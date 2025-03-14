const student = {
    name:"SATYA",
    age:21,
    eng:97,
    math:93,
    sci:70,
    getAvg(){
        let avg = (this.eng+this.math+this.sci)/3;
        console.log(avg);
    }
}
function get() {
    console.log(this);
}

// let a=5;
try {
    console.log(a);
} catch (err) {
    console.log("there is an error");
}

console.log("hii");

const mul = (a,b) => a*b;


console.log("Hi there");
setTimeout(()=>{
    console.log("Apna college");
},4000);
console.log("Welcome to");


console.log("Hi there");
let id = setInterval(()=>{
    console.log("Apna college");
},2000);
console.log("Hi there");
let id2 = setInterval(()=>{
    console.log("Apna college");
},3000);
console.log(id2);

const studen ={
    name: "aman",
    marks: 95,
    prop:this,
    getName: function(){
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this);
        return this.marks;
    }
}