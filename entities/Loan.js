const Installment = require("./Installment");

module.exports = class Loan{
    static #rateLoan = 1.7

    constructor(value, numInstallments){
        this.value = value
        this.numInstallments = []
        for (let i = 1; i <= numInstallments; i++) {
            this.numInstallments.push(new Installment((value / numInstallments) + (value / numInstallments) * Loan.#rateLoan, i));
        }
        this.dataCriation = new Date().toLocaleDateString('pt-us', { weekday:"long", day:"numeric",  month:"short", year:"numeric", hour: '2-digit', minute: '2-digit', second: '2-digit'})
    }

    static get rate(){
        return Loan.#rateLoan
    }

    static set rate(newRate){
        Loan.#rateLoan = newRate/100
    }
}