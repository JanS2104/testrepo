
// let arr = [3,-4,5,-6];

// let totalAmt = arr.filter(function(num){
//     return num>=0;
// }).reduce(function(acc,num){
//     return acc+num;
// },0)

// console.log(totalAmt);

//map
// let arr = [2, 4, 6, 8]
// let doubledArr = arr.map(function(num){
//     return num*2
// })
// console.log(doubledArr)


//filter
// let arr = [5, 10, 15, 20, 25]
// let evenArr = arr.filter(num => num%2 ==0)
// console.log(evenArr)


//forEach
// const names =["Jan", "Sam", "Alex"]
// names.forEach(nam=>console.log(`hello ${nam}`))


// let arr = [3,-4,5,-6];
// let sum=arr.filter(num => num>=0).reduce((acc,num) => acc+=num)
// console.log(sum)


let arr = [3,-4,5,-6];
let sum= 0
arr.filter(num => num>=0).forEach(num=> sum+=num)
console.log(sum)