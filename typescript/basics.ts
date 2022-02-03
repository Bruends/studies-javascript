//tipos
let nome: string;
let age: number;
let registered: boolean;

// strong typed functions
function showMessage(message: string): void {
    console.log(message);
}

// custom type
// "?" => makes the field optional
type Person = {
    name: string;
    age: number;
    graduated?: boolean;
}

const bruno: Person = {
    name: 'bruno',
    age: 25,
}

//union type
type Style = 'bold' | 'italic';
let font: Style = 'italic';

// tuples
type List = [number, string, boolean];
const list: List = [25, 'foo', false];

// interfaces
interface CarInteface {
    model: string;
    year: number;

    showInfo(): void;
}

// classes 
class CarClass implements CarInteface {
    model: string;
    year: 2022;

    showInfo(): void {
        console.log(`
            model: ${this.model}
            year: ${this.year}
        `);
    }
}