//Datatypes
let name="sneha";
var age=23;
const boolean=false;
console.log(name);
console.log(typeof(name))
console.log(age);
console.log(typeof(age));


let A=20;
let B=30;

//Arithemetic operators

let add=A+B;
console.log(add);
let sub=A-B;
console.log(A-B);
let mul=A*B;
console.log(mul)
let remainder=A%B
console.log(remainder);
let exponent=A**B;
console.log(exponent);

//Comparision Operators

console.log(A==B);
console.log(A===B);
console.log(A>B);
console.log(A>=B);
console.log(A<B);
console.log(A<=B);

//Logical Opearators

console.log(A<30 && B<50);
console.log(A==10 || B==10);
console.log(A!==B)



//Conditional

if(A>B){
    let add=A+B;
    console.log(add)
}
else{
    let sub=A-B;
    console.log(A-B)
}
if(A==B || A<B){
    let multiply=A*B;
    console.log(multiply)
}
else{
    let exp=A**B;
    console.log(exp);
}

//loops

for(let x=1;x<=5;x++){
    console.log("Hello world",x)
   
    }


//while loop

let y=0;
while(y<=5){
    console.log("Hello Javascript",y)
    y++
}

let z=0;
do{
    console.log("This is do-while output",z)
    z++

}
while(z>=20)

//for in [array&object]

let fruits=['apple','banana','guava'];

 for(let eachitem in fruits){
     console.log(eachitem+":"+fruits[eachitem]);
 }
 
 var students={"sneha":"ong","kala":"hyd","sruthi":"bang"
 }
 for(let eachitem in students){
      console.log(eachitem+":"+students[eachitem]);
      //console.log(eachitem)
 }

//for of

for(let eachitem of fruits){
    console.log("favourite fruit is",eachitem)
}














