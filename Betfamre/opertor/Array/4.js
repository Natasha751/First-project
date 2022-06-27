//Splice function deletes a specified number of elements starts from the specified index
let cities=["Hyderabad","Delhi","ahmedabad","New Delhi","Noida","mangalore"];
cities.splice(3,2);
console.log(cities);
//Slice method:to get part of the array as slice
let size=[10,20,30,40,60]
console.log(size.slice(1,3));
console.log(size.slice());
console.log(size.slice(2));
//index of method to find out the index of specified element
let arrayData=[10,89,90,88,78,76];
console.log(arrayData.indexOf(10));
console.log(arrayData.indexOf(90));
console.log(arrayData.indexOf(70));
