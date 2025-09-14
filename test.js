// q1
let q1=[7,9,0,-2];
let n=3;
console.log(q1.slice(0,n));


// q2
let q2=[7,9,0,-2];
let n1=3;
// console.log(q1.slice(1,n+1));
let ans=q2.slice(q2.length-n);
console.log(ans);

// q3
let q3="zumer";
if(q3.length==0) console.log("string is  empty");
else console.log("string is not empty");


// q4
let idx=2;
if(q3[idx]==q3[idx].toUpperCase)
{
    console.log("is upper case");
}
else{
    console.log("is lower case");
}



// q5
let q5="   zumer";
console.log(`string is ${q5}`);
console.log(`string is ${q5.trim()}`);


// q6
let q6=["array","a",64,0,2];
let item=-1;
if(q6.indexOf(item)!=-1)
{
    console.log("element not exixt");
}
else{
    console.log("element exixt");
}

