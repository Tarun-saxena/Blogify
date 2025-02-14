//functions
prompt=require('prompt-sync')()
// function saymyname(a){
   

//     console.log('hi ',a)
// }
// let a =prompt('whats your name :') 

// saymyname(a)

// with argument
// function cost(a,b){
    
//     cost = a+a*b
//     console.log('THE TOTAL COST : ',cost)
// }
// let a=Number(prompt('food price '))
// let b=Number(prompt('tip percentage:'))/100
// cost(a,b)

// //without argument
// function cost2(){
//      let a=Number(prompt('food price '))
//      let b=Number(prompt('tip percentage:'))/100
//      cost = a+a*b
//      return cost
// }

// b=cost2()
// console.log(b)


//arrays
// const groceries=['banana','apple','orange']
// //slice
// console.log(groceries.slice(1,3))
// //push
// groceries.push('cookie')
// //indexOf
// console.log(groceries.indexOf('banana'))
// //length
// console.log(groceries.length)

// //objects
// const person = {name:'tarun',age:18}


// //access objectz: dot vs bracket
// console.log(person.name)
// console.log(person.age)  

//  console.log(person ['name'])
//  console.log(person ['age'])

//  person.phone = 1443566
//  console.log(person )

// let object ={name:'quazi', shirt:'black'}
// console.log(object)

// const fruits=['banana','apple','orange']
// // for (let i =0;i<fruits.length;i=i+1){
// //     console.log(fruits[i])


// // }

// for(const a of fruits){
//     console.log(a)


// const numbers =[1,2,3,4,5,6]
// const b=[]
// for(const a of numbers ){
//    b.push(a*a)
    

// }
// console.log(b)

// const a = 'hey, can you go to grocery store with me?'
// c=0
// for (const b of a ){
    
//     c=c+1

// }
// console.log(c)

// function loop(a){
//     d=0
//     for(c of a){
//         if(c>=d){
//             d=c
//         }
//     }
//     console.log(d)
    
    
// }

// const a=[]
// const n=Number(prompt('enter the length of array'))
// for(i=1;i<=n;i=i+1){
//     b=Number(prompt('enter the No:'))
//     a.push(b)

// }


// loop(a)

// n= prompt('enter the phase::')
// a={}
// for (i=0;i<=n.length;i++){
//     b=n.charAt(i);
//     if (a.b){
//         a.b=a.b+1
//     }
//     else{
//         a.b=1
//     }
    
// }
// console.log(a)

string = prompt('enter::')
var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }

console.log(freq)    