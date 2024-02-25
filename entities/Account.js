const Deposit = require("./Deposit")

module.exports = class Account {
    #balance
    constructor(ownerAccount){
        this.ownerAccount = ownerAccount
        this.#balance = 0
        this.deposits = []
        this.loans = []
        this.tranfers = []
    }

    getBalance(){
        return this.#balance
    }

    createDeposit(deposit){
        this.#balance += deposit.value
        this.deposits.push(deposit)
    }

    createLoan(loan){
        this.#balance += loan.value
        this.loans.push(loan)
    }

    createTransfer(transfer){
        if(transfer.payer.email === this.ownerAccount.email){
            this.#balance += transfer.value
            this.tranfers.push(transfer)
        }else if(transfer.receiver.email === this.ownerAccount.email){
            this.#balance -= transfer.value
            this.tranfers.push(transfer)
        }
    }
}