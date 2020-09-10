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

enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
}

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: number
} = {
    name: 'Paulo',
    age: 22,
    hobbies: ['Soccer', 'Fishing'],
    role: Role.ADMIN
};

// person.role.push('admin'); // this is an exception of ts
// person.role[1] = 10; // this not follow the rule

// person.role = [0, 'admin', 'user']; // this not follow the rule

console.log(person);

const number1 = 3;
const number2 = 52;
const showResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, showResult, resultPhrase);

function combine(input1: number|string, input2: number|string)
{
    if(typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }

    return input1.toString() + input2.toString();
}

