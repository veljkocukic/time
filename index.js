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

        this.dayOfTheYear = () => { //Taken from StackOverflow https://stackoverflow.com/a/50116028
            let a = this.date
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

    getDay() {
        return this.day
    }

    getMonth() {
        return this.month
    }

    getYear() {
        return this.year
    }


    setYear(year) {
        this.year = parseInt(year)
        this.date = new Date(parseInt(year), this.month - 1, this.day)
    }

    // Important: Month input is not the JS Date month index but the actual number of the month,
    // for example, input for January is not 0 but 1
    setMonth(month) {
        if (parseInt(month) < 13 && parseInt(month) > 0) {
            this.date = new Date(this.year, parseInt(month - 1), this.day)
            this.month = parseInt(month)
        } else {
            console.log("Cannot set month with number bigger than 12 or smaller than 1")
        }

    }

    setDay(day) { ////Needs further validation
        if (parseInt(day) < 32 && parseInt(day) > 0) {
            this.date = new Date(this.year, this.month - 1, parseInt(day))
            this.day = parseInt(day)
        } else {
            console.log("Cannot set day with number bigger than 31 or smaller than 1")
        }
    }

    addYears(num) {
        this.date = new Date(this.year += parseInt(num), this.month - 1, this.day)
        this.year = this.year += parseInt(num)
    }

    addMonths(num) {
        num = parseInt(num)
        let years = Math.floor(num / 12)
        let months = this.month + (num - years * 12)
        if (this.month + months > 12) {
            years += Math.floor((this.month + months) / 12)
            months = this.month + months - Math.floor((this.month + months) / 12) * 12
        }

        this.month = months
        this.date = new Date(this.year += years, months - 1, this.day)
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
        return date1.getTime() === date2.getTime()
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

    getTime() {
        return this.addZero(this.date.getHours()) + ":" + this.addZero(this.date.getMinutes())
    }

    getFullTime() {
        return this.addZero(this.date.getHours()) + ":" + this.addZero(this.date.getMinutes()) + ":" + this.addZero(this.date.getSeconds())
    }

    getMonthName() {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        return months[this.date.getMonth()]
    }

    getMonthShort() {
        let months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."]
        return months[this.date.getMonth()]
    }

    getDayName() {
        let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        return days[this.date.getDay() + 1]
    }

    getDayShort() {
        let days = ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."]
        return days[this.date.getDay() + 1]
    }

    isLeapYear() {
        let leapYear = new Date(this.date.getFullYear(), 1, 29);
        return (leapYear.getDate() == 29)
    }

}
