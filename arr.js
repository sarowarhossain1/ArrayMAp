let num=[1,3,5,7,15]
let data =num.map(sumFunction)

function sumFunction(item){
         return item*3
}

console.log(data)


let arr = [1,5,15,25]

let display=(data,callback)=>{
     let copy =[]
     for(let i = 0; i<data.length; i++){
         let result = callback(data[i])
           copy.push(result+25)
     }
     return copy
}
 
 
let show=(item)=>{
      let output = item*3
      return output
}
const result = display(arr,show)
console.log(result)





let number = [1,3,5,7,15]
let fun1 =(data,callback)=>{
  let result = []
   for(let i =0; i<data.length; i++){
       let x = callback(data[i])
        result.push(x+5)
   }
   return result
}

let fun2 =(item)=>{
    let value = item *5
    return value
}

let output = fun1(number,fun2)
// console.log(output)

let array = [1,3,5,10]
   let input = array.map(callback)
   console.log(input)
let some =(item)=>{
     return item *3
}



