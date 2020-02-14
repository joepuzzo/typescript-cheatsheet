export { };
let message = 'Welcome Back';
console.log(message);
let x = 10;
const y = 20;

let sum;
const title = 'SomeTitle';

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Joe';

let sentence: string = `
Hello ${name}
How are you today
`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ['chirs', 22];

let list3: (string | number)[] = ['foo', 23, 'bar', 6, 7, 8];
let list4: Array<string | number> = ['foo', 23, 'bar', 6, 7, 8];

enum Color {
    Red = 'RED',
    Green = 'GREEN',
    Blue = 'BLUE'
};

let c: Color = Color.Green;

console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = 'Puzzo';

let myVariable: unknown = 'asdf';

const hasName = (obj: any): obj is { name: string } => {
    return !!obj && typeof obj === 'object' && 'name' in obj;
}

if (hasName(myVariable)) {
    console.log('Had Name', myVariable.name);
}

console.log((myVariable as string).toLowerCase());

(myVariable as string).toUpperCase();

let a;
a = true;
a = 10;

let b = 20;
// b = true <<< Cant do this

b.toFixed();
// a.toFixed() <<< Cant do this

// Union Type
let multiType: number | boolean;
multiType = 20;
multiType = true;
multiType.valueOf();

// Any type
let anyType: any;
anyType = 20;
anyType = true;
// anyType.valueOf() <<< Cant do this


/* -------------------- Functions -------------------- */

function add(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(add(5, 10));
add(5, 10).toFixed();

// Optional params
function add2(num1: number, num2?: number): number {
    if (num2) {
        return num1 + num2;
    }
    return num1;
}

console.log(add2(5));

// Default params
function add3(num1: number, num2: number = 0): number {
    return num1 + num2;
}

console.log(add3(5));

/* -------------------- Interfaces -------------------- */

// V1
function fullName(person: { firstName: string, lastName: string }) {
    console.log(`${person.firstName} ${person.lastName}`);
}

const p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
}

fullName(p);

// V2
interface Person {
    firstName: string,
    middleName?: string,
    lastName: string
};

function fullName2(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}

fullName2(p);