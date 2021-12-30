class VTime {

    constructor(date){
        date = new Date(date)
        this.day = date.getDate()
        this.month = date.getMonth()+1
        this.year = date.getFullYear()
    }

    get getDay(){
        return this.day
    }

    get getMonth(){
        return this.month
    }

    get getYear(){
        return this.year
    }

    static dmyString (date){
        date = new Date(date)
        return date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear()+"."
    }

    static mdyString(date){
        date = new Date(date)
        return (date.getMonth()+1)+"."+(date.getDay())+"."+date.getFullYear()+"."
    }

    static isAfter(date1,date2){
        date1 = new Date(date1)
        date2 = new Date(date2)
        return date1>date2
    }

    static equal(date1,date2){
        date1 = new Date(date1)
        date2 = new Date(date2)
        return date1.getSeconds()===date2.getSeconds()
    }

}

module.exports=VTime