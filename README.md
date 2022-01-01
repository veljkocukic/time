# VDate

VDate is a simple library of functionalities intended to make displaying date on pages easier by providing various format options and more.

## Installation

Use the package manager to install vdate.

```
npm install vdate
```

## Usage

```javascript
import { VDate } from "vdate";
let d = new VDate("04-05-2020");

//returns "4-5-2020"
console.log(d.mdyDash());

// returns "05.04.2020."
console.log(d.dmyZeroDot());
```

## Other functionalities

For documentation visit https://vdate.netlify.app/doc-main.htm

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
