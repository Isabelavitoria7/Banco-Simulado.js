module.exports = class Deposit{
    constructor(value){
        this.value = value
        this.dataCriation = new Date().toLocaleDateString('pt-us', { weekday:"long", day:"numeric",  month:"short", year:"numeric", hour: '2-digit', minute: '2-digit', second: '2-digit'})
    }
}

