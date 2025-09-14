// trim method {remove spaces (before & after just)            .trim()...new string banti}
// immutable(cant change) hoti string







// let pass=prompt("zumer");
// let npass=pass.trim();
// console.log(npass);


// upercase/lowerase
let name="Zumer";
console.log(name.toUpperCase());
console.log(name.toLowerCase());


// indexOf (argument)
console.log(name.indexOf("u"));
// no index found -1
console.log(name.indexOf("k"));


// method chaining
let m="      hello";
console.log(m.trim().toUpperCase());

// slice
let sl="zumer niaz";
// index start sa end
console.log(sl.slice(1));
// index start and end
console.log(sl.slice(1,7));
// length-num
console.log(sl.slice(-2));


// replace
let rep="ilovecoding";
console.log(rep.replace("love","do"));
console.log(rep.replace("o","x"));
// repeat(copies)
console.log(rep.repeat(2));


// practice
let pr="help!";
console.log(pr.trim().toUpperCase());
let n1="ApnaCollege";
console.log(n1.slice(4).replace("l","t").replace("l","t"));




// array
// let student1="zumer";
// let student2="alishba";
let students=["zumer","alishba"];
console.log(students);


// visualization
let num=[1,2,3,4,5,"zumer"];
console.log(num[2]);
console.log(num[5]);
console.log(typeof num); //array is object
console.log(num[5][2]); //array index.zumer ka index
console.log(num[5].length); 
console.log(num.length); //length


// strings are immutable(not changeable)
// arrays are mutable(changeable)
let str="zumer";
str[0]="l";
console.log(str);


let a1=["zumer","alishba"];
a1[0]="bisma";
console.log(a1);
a1[5]="yes";
console.log(a1);
//push(add) and pop(delete) -----------(end)
console.log(a1.push("mama"));
console.log(a1);

console.log(a1.pop());
console.log(a1);

// unshift(add) and shift(delete)--------- (start)
console.log(a1.unshift("start"));
console.log(a1);

console.log(a1.shift());
console.log(a1);


// practice
let mon=["january","july","march","august"];
console.log(mon.shift());
console.log(mon.shift());
console.log(mon.unshift("june"));
console.log(mon.unshift("july"));
console.log(mon);

// indexOfand include
console.log(mon.indexOf("july"));
console.log(mon.indexOf("jul"));
console.log(mon.includes("july"));
console.log(mon.includes("jul"));

// concat
console.log(a1.concat(mon));

// reverse of array
console.log(mon.reverse());

// slice (original array hamesha treat)
let sli=["white","blue","yellow","pink","brown"];
console.log(sli.slice());
console.log(sli.slice(2));
console.log(sli.slice(2,4)); //last +1 extra likhna hota not included
console.log(sli.slice(-2));  //length-num
console.log(sli)


// splice (hamesha peechli array treat)
let slic=["brown","pink","yellow","blue","white"];
console.log(slic.splice(2));
console.log(slic) //yah bach gaya array ma
console.log(slic.splice(0,1));
console.log(slic.splice(0,1,"black","grey")); // start,countdel,add,add
console.log(slic)


// sorting {numbers pr kam ni krta}
let sorting=["mon","wed","friday"];
console.log(sorting.sort());


// practice
let mnth=["january","july","march","august"];
console.log(mnth.splice(0,2,"july","june"));
console.log(mnth);




// reversing
let re=["C","C++","Java","python"];
console.log(re.reverse().indexOf("C++"));


// array refernce same address of  arr1 and arr2 
let arr1=["a","b"];
let arr2=arr1;
console.log(arr2);


// const means ka array ko {completely} new nHI kr skty
const arrr=[1,2,3];
// arrr=[2,3,4]; //error
console.log(arrr);













































