function add(
    number1: number,
    number2: number,
    showResult: boolean,
    resultPhrase: string = ''
): number
{
    const result = number1 + number2;
    if(showResult) {
        console.log(`${resultPhrase}${result}`);
    }
    return result;
}

const number1 = 3;
const number2 = 52;
const showResult = true;
const resultPhrase = 'Result is: ';

const result = add(number1, number2, showResult, resultPhrase);
