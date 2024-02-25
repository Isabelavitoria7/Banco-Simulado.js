const App = require ("./App")

App.createUser("isabela@gmail.com", "Isabela Vitoria")
App.createUser("jose@gmail.com", "José Oliveira")
App.createUser("flavia@gmail.com", "Flávia Luiza")

App.deposit("isabela@gmail.com", 100)
App.transfer("isabela@gmail.com", "jose@gmail.com", 20)
App.changeLoanRate(1.9)
App.takeLoan("flavia@gmail.com", 2000, 12)

console.log(App.findUser("isabela@gmail.com"))
console.log(App.findUser("isabela@gmail.com").account)
console.log(App.findUser("jose@gmail.com"))
console.log(App.findUser("jose@gmail.com").account)
console.log(App.findUser("flavia@gmail.com"))
console.log(App.findUser("flavia@gmail.com").account)
console.log(App.findUser("flavia@gmail.com").account.loans[0].numInstallments)