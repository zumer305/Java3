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














