module.exports = class Transfer {
    constructor(payer, receiver, value){
        this.payer = payer
        this.receiver = receiver
        this.value = value
        this.dataCriation = this.dataCriation = new Date().toLocaleDateString('pt-us', { weekday:"long", day:"numeric",  month:"short", year:"numeric", hour: '2-digit', minute: '2-digit', second: '2-digit'})
    }
}