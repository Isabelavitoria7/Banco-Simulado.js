const Deposit = require("./Deposit")
const Loan = require("./Loan")
const Transfer = require("./Transfer")
const User = require("./User")

module.exports = class App {
    static #users = []
    
    static findUser(email){
        const user = this.#users.find(user => user.email === email)
        return user ?? null
    }

    static createUser(email,fullName){
        const userExists = App.findUser(email)
        if(!userExists){
            this.#users.push(new User(email, fullName))
        }
    }

    static deposit(email, value){
        const user = App.findUser(email)
        if(user) {
            const newDeposit = new Deposit(value)
            user.account.createDeposit(newDeposit)
        }
    }

    static transfer(payerEmail, receiverEmail, value){
        const payerUser = App.findUser(payerEmail)
        const receiverUser = App.findUser(receiverEmail)
        if(payerEmail && receiverEmail){
            const newTransfer = new Transfer(payerUser, receiverUser, value)
            payerUser.account.createTransfer(newTransfer)
            receiverUser.account.createTransfer(newTransfer)
        
        }
    }

    static takeLoan(email, value, numInstallments){
        const user = App.findUser(email)
        if(user){
            const newLoan = new Loan(value, numInstallments)  
            user.account.createLoan(newLoan)       
        }
    }

    static changeLoanRate(newRatePercentage){
        Loan.rate = newRatePercentage
    }
}