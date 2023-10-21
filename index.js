function recursion (n){
    if(n === 0){
        console.log('Completed')
        return
    }
    console.log('Number')
    return recursion(n-1)
}
recursion(5)


const obj ={
    color:'red',
    greet: function(){
        return 'Roses are '+ this.color
    }
}

const obj1 = {...obj}
obj1.color ='white'

console.log(obj.greet())
console.log(obj1.greet())


const greet =function(arg){
    return arg + 'Leafs in october are '+this.color
}
const obj2 ={
    color: 'Yellow',
    greet:greet
}
const obj3 ={
    color: 'Green',
    greet: greet
}
const obj4 ={
    color: 'Orange',
    greet: greet
}

const obj5 ={
    color: 'Red',
    greet: greet
}

const bound = greet.bind(obj2)
console.log(obj2.greet('Autumn:'))
console.log(obj3.greet.call(obj2,'This is a start for a book:'))
console.log(obj4.greet.apply(obj2,['Autumn:']))
console.log(bound('About this season: '))



const fibonacciNumber =(num) =>{
if(num<=2){
    return 1
}
return fibonacciNumber(num-2) + fibonacciNumber(num-1)

}
console.log(fibonacciNumber(6))