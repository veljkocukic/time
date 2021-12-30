export class VDate {

    constructor(date) {
        date = new Date(date)
        this.day = date.getDate()
        this.month = date.getMonth() + 1
        this.year = date.getFullYear()
        this.date = date
        this.addZero = (num) => {
            if (parseInt(num) <= 9) {
                return "0" + num.toString()
            }
            return num
        }

        this.dayOfTheYear = (a) => { //Taken from StackOverflow https://stackoverflow.com/a/50116028
            a = new Date(a)
            let currentYear = a.getFullYear();
            let currentMonth = a.getMonth();
            let currentDay = a.getDate();
            let date365 = 0
            let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

            let leapYear = new Date(currentYear, 1, 29);
            if (leapYear.getDate() == 29) { // If it's a leap year, changes 28 to 29
                monthLength[1] = 29;
            }

            for (let i = 0; i < currentMonth; i++) {
                date365 = date365 + monthLength[i];
            }
            return date365 = date365 + currentDay; // Done!}
        }
    }

    get getDay() {
        return this.day
    }

    get getMonth() {
        return this.month
    }

    get getYear() {
        return this.year
    }


    set setYear(year) {
        this.year = parseInt(year)
    }

    set setMonth(month) {
        if (parseInt(month) < 13 && parseInt(month) > 0) {
            this.month = parseInt(month)
        } else {
            console.log("Cannot set month with number bigger than 12 or smaller than 1")
        }

    }

    set setDay(day) { ////Needs further validation
        if (parseInt(day) < 32 && parseInt(day) > 0) {
            this.day = parseInt(day)
        } else {
            console.log("Cannot set day with number bigger than 31 or smaller than 1")
        }
    }

    addYears(num) {
        this.year = this.year += parseInt(num)
    }

    dmyDot() {
        return this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + "."
    }

    mdyDot() {
        return (this.date.getMonth() + 1) + "." + (this.date.getDay()) + "." + this.date.getFullYear() + "."
    }

    dmyZeroDot() {
        return this.addZero(this.date.getDate()) + "." + this.addZero((this.date.getMonth() + 1)) + "." + this.date.getFullYear() + "."
    }

    mdyZeroDot() {
        return this.addZero((this.date.getMonth() + 1)) + "." + this.addZero((this.date.getDay())) + "." + this.date.getFullYear() + "."
    }

    dmyDash() {
        return this.date.getDate() + "-" + (this.date.getMonth() + 1) + "-" + this.date.getFullYear()
    }

    mdyDash() {
        return (this.date.getMonth() + 1) + "-" + (this.date.getDay()) + "-" + this.date.getFullYear()
    }

    dmyZeroDash() {
        return this.addZero(this.date.getDate()) + "-" + this.addZero((this.date.getMonth() + 1)) + "-" + this.date.getFullYear()
    }

    mdyZeroDash() {
        return this.addZero((this.date.getMonth() + 1)) + "-" + this.addZero((this.date.getDay())) + "-" + this.date.getFullYear()
    }

    static isAfter(date1, date2) {
        date1 = new Date(date1)
        date2 = new Date(date2)
        return date1 > date2
    }

    static equal(date1, date2) {
        date1 = new Date(date1)
        date2 = new Date(date2)
        return date1.getSeconds() === date2.getSeconds()
    }

    static dayOfTheYear(a) { //Taken from StackOverflow https://stackoverflow.com/a/50116028
        a = new Date(a)
        let currentYear = a.getFullYear();
        let currentMonth = a.getMonth();
        let currentDay = a.getDate();
        let date365 = 0
        let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        let leapYear = new Date(currentYear, 1, 29);
        if (leapYear.getDate() == 29) { // If it's a leap year, changes 28 to 29
            monthLength[1] = 29;
        }

        for (let i = 0; i < currentMonth; i++) {
            date365 = date365 + monthLength[i];
        }
        return date365 = date365 + currentDay; // Done!
    }

    getWeek() {
        return Math.floor(this.dayOfTheYear(this.date) / 7)
    }

    getTime(date) {
        date = new Date(date)
        return this.addZero(this.date.getHours()) + ":" + this.addZero(this.date.getMinutes())
    }

    getFullTime() {
        return this.addZero(this.date.getHours()) + ":" + this.addZero(this.date.getMinutes()) + ":" + this.addZero(this.date.getSeconds())
    }




}
