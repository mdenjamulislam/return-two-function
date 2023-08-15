

// function getSumofAnArray(numbers) {
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++ ) {
//         let index = i;
//         let element = numbers[index];
//         sum = sum + element;
//         console.log(index, element, sum);
//     }

//     return sum;

// }
// let myNumbers = [12, 34, 53, 35, 45, 34, 23];
// let total = getSumofAnArray(myNumbers);
// console.log(total);


function getOddNumbersOfAnArray(numbers) {
    let oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) {
            oddNumbers.push(element);
        }
    }

    // Make sum all odd numbers
    function sumOddNumbers(oddNumber) {
        let sum = 0;
        for (let i = 0; i < oddNumber.length; i++) {
            const index = 1;
            const element = oddNumber[index];
            sum = sum + element;
        }
        return sum;
    }

    let sumOddNumber = sumOddNumbers(oddNumbers);

    return oddNumbers, sumOddNumber;
}



let myNumbers = [12, 34, 53, 35, 45, 34, 23];
const oddNum = getOddNumbersOfAnArray(myNumbers);

console.log(oddNum);