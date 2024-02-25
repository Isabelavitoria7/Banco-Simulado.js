
module.exports = class Installment{
    constructor(valueInstallment, num){
        this.valueInstallment = valueInstallment
        this.num = num
        this.status = 'pending'
    }
}