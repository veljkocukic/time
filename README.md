# VDate

VDate is a simple library of functionalities intended to make displaying date on pages easier by providing various format options and more.

## Installation

Use the package manager to install vdate.

```
npm install vdate
```

## Usage

```javascript
import {VDate} from "vdate"
let d = new VDate("04-05-2020")

//returns "4-3-2020"
console.log(d.mdyDash())

// returns "04.05.2020."
console.log(d.dmyZeroDot())
```

## Other functionalities

### .addYear(year)
Method accepts integers and adds years to current date. 

### .addMonth(month)
Method accepts integers and adds months years to current date. 

### .addDay(day)
Method accepts integers and adds days years to current date.

### .dmyDot()
Method retruns date of the created object with day first in the output and with a dot as the separator. Example: "5.4.2020.".

### .mdyDot()
Method retruns date of the created object with month first in the output and with a dot as the separator. Example: "4.5.2020.".

### .dmyZeroDot()
Method retruns date of the created object with day first in the output and with a dot as the separator and with an 0 before the number. Example: "05.04.2020.".

### .mdyZeroDot()
Method retruns date of the created object with monthfirst in the output and with a dot as the separator and with an 0 before the number. Example: "04.05.2020.".

.dmyDash()
Method retruns date of the created object with day first in the output and with a dot as the separator. Example: "5-4-2020".

### .mdyDash()
Method retruns date of the created object with month first in the output and with a dot as the separator. Example: "4-5-2020."

### .dmyZeroDash()
Method retruns date of the created object with day first in the output and with a dot as the separator and with an 0 before the number. Example: "05-04-2020."

### .mdyZeroDash()
Method retruns date of the created object with monthfirst in the output and with a dot as the separator and with an 0 before the number. Example: "04-05-2020".

### .isAfter(date1,date2)
A static method that checks if the first date is after the second one and return true or false

### .equal(date1,date2)
A static method that checks if the two dates are equal and returns true or false

### .dayOfTheYear(a)
A static method that retruns the number of a day of the year of the date selected. 
Example:
```javascript
console.log(VDate.dayOfTheYear("04-06-2020"))
//returns 97
```

### .getWeek()
Methos retrun the current week of a date of a created object.
Example:
```javascript
let myDate = new VDate("04-05-2002")
console.log(myDate.getWeek())
//returns 13
```

### .getTime()
Mehthod that retruns current time in hh:mm format. Example: "12:45"

### .getFullTime()
Mehthod that retruns current time in hh:mm:ss format. Example: "12:45:23"


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.



## License
[MIT](https://choosealicense.com/licenses/mit/)