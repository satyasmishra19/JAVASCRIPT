let arr =[1,2,3,,4,5];
arr.forEach((el)=>{
    console.log(el);
});
arr.forEach(function(el){
    console.log(el);
});


let arra = [{
    name:"satya",
    age:95,
},{
    name:"atya",
    age:93,
},{
    name:"tya",
    age:97,
}]
arra.forEach((student)=>{
    console.log(student.age);
})

let num=[1,2,3,4];
let double = num.map((el)=>{
    return el*2;
});
let ans=num.filter((el) => {
    return el%2==0;
})
console.log(ans);
console.log(double);

let ums=[1,2,3,4]
let finalvalue = ums.reduce((res,el) => {
    console.log(res);
    return (res+el);
});
console.log(finalvalue);

console.log(Math.min(...ums));     //spread

const data = {
    email: "satyashree@cmail.com",
    password:"satya",
};

const datacopy = { ...data,id: 123,country: "India"};
console.log(datacopy);

function sum(...args){
    //arguements
    for(let i =0;i<args.length;i++){
        console.log("you gave us:",args[i]);
    }
}

function min() {
    console.log(arguments);
    console.log(arguments.length);
    arguments.push(1);
}

function summ(...arguments){
    return arguments.reduce((sum,el) => sum+el);
}
function min(...args){
    return args.reduce((min,el) =>{
        if(min>el){
            return el;
        }else{
            return min;
        }
    });
}

const student = {
    name: "karan",
    age: 14,
    class:9,
    subjects:["hindi","english",'math','science'],
    username:"karan@123",
    password:"abcd",
};
let {
    username:user,password:secret,city ="Munbai"
}=student;