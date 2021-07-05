// task1
// let a = 10
// if (a === 11){
//     console.log(true)
// }else{
//     console.log(false)
// }
//
// task2
// let a = 50
// let b = 100
// if (a > b){
//     console.log('a больше b')
// }else {
//     console.log('a меньше b')
// }
//
// task3
// let a = -1
// if (a > 0) {
//     console.log('positive')
// } else if (a === 0) {
//     console.log("равно")
// } else if (a < 0) {
//     console.log("negative")
// }
//
// task4
// let a = 47
// if ( a % 2 === 0){
//     console.log( "Четное число")
// }else {
//     console.log("Нечетное число")
// }
//
// task5
// let a = 10
// let b = 2
// if (a % b === 0){
//     console.log("Четное число")
// }else {
//     console.log("Нечетное число")
// }
//
// task6
// let s = 20
// if (typeof s === "boolean"){
//     console.log("boolean")
// }else if( typeof s === "number"){
//     console.log("number")
// }else if (typeof s === "string"){
//     console.log("string")
// }
//
// task7
// let a = 5
// if (a > 1 && a < 9){
//     console.log("верно")
// }
//
// task8
// let a = 3
// if (a + 3 || a === 7){
//     console.log(a = a + 7)
// }else {
//     console.log(a = a / 10)
// }
//
// //task9
// let a = 1
// let b = 4
// if (a <= 0 && b >= 5){
//     console.log(a + b)
// }else {
//     console.log(a - b)
// }
//
// task10
// let a = 5
// let b = 10
// if (a < 10 || b < 17){
//     console.log("верно")
// }else {
//     console.log("неверно")
// }
//
// task11
// let mont = 6
// if (mont > 0 && mont <= 3){
//     console.log("зима")
// }else if(mont > 4 && mont <= 6){
//     console.log("лето")
// }else  if (mont > 7 && mont <= 9){
//     console.log("весна")
// }else if(mont > 10 && mont <= 12){
//     console.log("осень")
// }else {
//     console.log("неверно")
// }
//
// //task12
// let day = 12

//task14
// let age = 23
// if (age >= 5 && age <=20){
//     console.log(`мне `+ age + ' лет')
// }else if (age % 10 === 2 ||  age % 10 === 3 || age % 10 === 4) {
//     console.log(age + ' года')
// } else if (age % 10 === 1){
//     console.log(`мне `+ age + ` год`)
// } else {
//     console.log(`мне `+ age + ' лет')
// }


//task15
// let time = 15
// if (time > 0 && time < 15){
//     console.log("первая четверть")
// }else if (time >= 15 && time < 30){
//     console.log("вторая четверть")
// }else  if (time >= 30 && time < 45){
//     console.log("третий четверть")
// }else if (time >= 45 && time < 60){
//     console.log("четвертый четверть")
// }else {
//     console.log("неверное четверть")
// }

/// task 16
// let num  = 110
// num === 110 ? console.log('Верно') : console.log('Неверно')

// task 18
// let a = 100
// let b = 30
// a % b === 0 ? console.log(`Делится без остатка, результат деления : ${a / b}`) : console.log(`Делится c остатком ${a % b}`)

// task 17
// let a  = 59
// a > 40 && a < 60  ? console.log('Верно') : console.log('Неверно')

//task19
// let a = 77
// console.log(Math.sqrt(a))

//task20
// let a = 10
// let b = 3
// console.log(Math.pow(a, b))

//task21
// let num = '11'
// num = Number(num)
// console.log(typeof num)
// num = parseInt(num)
// console.log(typeof num)
// num = +num
// console.log(typeof num)

//task22
// let num = 33
// num = String(num)
// console.log(typeof num)
// let num = 33
// num = num.toString()
// console.log(typeof  num)
// let num = 33
// num = num+""
// console.log(typeof num)



//task23
// console.log(Math.round(23.5))
// console.log(Math.floor(23.5))
// console.log(Math.round(23.2))
// console.log(Math.round(23.9))

//task24
// let age = 19
// if (age >=18){
//     console.log('добро пожаловать!')
// }else {
//     console.log('вы должны быть старше 18')
// }
// console.log(age >= 18 ?"добро пожаловать!":"вы должны быть старше 18")

//task25
// let a = (Math.round(Math.random() * 200)) //от 0 до 200
// console.log(a)

// task26
// let today = 21
// let birthday = 21
// if (today === birthday){
//     console.log('happy birthday')
// }else {
//     console.log('not today')
// }

// task 27
// light = 'purple'
// if (light === 'green') {
//     console.log('можете ехать')
// }else if (light === 'yellow') {
//     console.log('немного подождите')
// } else if (light === 'red'){
//     console.log('остановитесь')
// }else {
//     console.log('неизвестно')
// }

// task 28
// let a = 5
// let b = 5
// let c = 5
// a===b && a===c ? console.log('все равны'):console.log('не равны')

// task 29
// let today = 1
// let birthday = 17
// if (today === birthday) {
//     console.log('happy birthday')
// }else if (today < birthday) {
//     console.log('еще рано')
// }else if (today > birthday) {
//     console.log('уже поздно')
// }

// task 30
// let str = '555'
// let summ = str.split('')
// console.log(+summ[0] + +summ[1] + +summ[2]) // если нужно чтобы выводилось как строка, то можно добавить в конце строку
// console.log(+summ[0] + +summ[1] + +summ[2] + '')

// task 31
// let str = '112121'
// let division = str.split('')
// let num1 =  Number(division[0]) +  Number(division[1]) +  Number(division[2])
// let num2 = Number(division[3]) +  Number(division[4]) +  Number(division[5])
// num1 === num2 ? console.log('да') : console.log('нет')

// task 32
// let str = 'apple'
// let division = str.split('')
// division[0] === 'a' ? console.log('да') : console.log('нет')

// task 33
// let str = '42345'
// str[0] >= '1' && str[0] <= '3' ? console.log('да') : console.log(`нет`)




