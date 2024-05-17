function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            
            return num * num;
        } else {
            
            return num * 3;
        }
    });
}

const inputArray = [1, 2, 3, 4, 5];
const resultArray = processArray(inputArray);
console.log(resultArray);

function formatArrayStrings(strings, numbers) {
    
    if (strings.length !== numbers.length) {
        throw new Error('The arrays must be of the same length');
    }

    
    let formattedStrings = [];

    
    for (let i = 0; i < strings.length; i++) {
        let str = strings[i];
        let num = numbers[i];

        if (num % 2 === 0) {
            
            formattedStrings.push(str.toUpperCase());
        } else {
            
            formattedStrings.push(str.toLowerCase());
        }
    }

    return formattedStrings;
}


const strings = ['Gideon', 'is', 'my', 'name', 'dude'];
const numbers = [2, 3, 4, 5, 6];

const formattedStrings = formatArrayStrings(strings, numbers);
console.log(formattedStrings); 



