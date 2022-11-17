// 1 Змінні
// camelCase великі та малі букви
// const firstName = 'Yaroslaw'
// const age = 17 //number
// const isProgrammer = true //boolean

// const _ = 'private'
// const $ = 'some value'

// const if = 'text' // помилка
// const withNum = '5'
//const 5withNum = '5' // помилка


// 2 Мутирования
// alert('Імя людини: ' + firstName + ',її вік: ' + age)

// const lastName = prompt('Введіть фамілію')
// alert(firstName + ' ' + lastName)


//3 оператори
// let currentYear = 2022
// const birthYear = 2005

// const age = currentYear - birthYear

// const a = 10
// const b = 5

// let c = 32
// c = c + a
// c += a
 
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(++currentYear)
// console.log(--currentYear)
// console.log(c)


// 4 Типи данних

// const isProgrammer = true
// const name = 'Yaroslaw'
// const age = 26

// let x 

// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)


// 5 приорітети операцій
// const fullAge = 16
// const birthYear = 2005
// const currentYear = 2022

// > < <= >=
// const isFullAge = (currentYear - birthYear) >= fullAge //17 >= 17 => false
// console.log(isFullAge)

// 6 Умовні оператори
// const courseStatus = 'fail' // ready, fail, pending - опрацьовується

// if(courseStatus === 'ready') {
//     console.log('курс готов')
// } else if(courseStatus === 'pending'){
//     console.log('в розробці')
// }else {
//     console.log('курс не получився')
// }

// const isReady = false

// if(isReady){
//     console.log('все готово')
// } else {
//     console.log('все не готово')
// }

// теранарний вираз
// isReady ? console.log('Все готово') : console.log('все не готово')

// const num1 = 42 //number
// const num2 = '42' //string

// console.log(num1 == num2)


// 7 функции

// function calculateAge(year){
    // return 2022 - year
// }

// console.log(calculateAge(2005)

// function logInfoAbout(name, year){
//     const age = calculateAge(year)

//     if(age > 0) {
//     console.log('Мене звати: ' + name + ', мені: ' + age)
//     } else [
//         console.log('Це майбутнє')
//     ]
// }

// logInfoAbout('yaroslav', 2005)
// logInfoAbout('Diana', 2006)


// 8 масиви
// const cars = ['Mazda', 'Mercedez-Benz', 'Ford']
// const cars = new Array('Mazda', 'Mercedez-Benz', 'Ford')
// console.log(cars)

// console.log(cars[1])