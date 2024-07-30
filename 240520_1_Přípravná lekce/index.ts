let firstName: string = "Martin";
let firstName1 = "Martin";
let age: number = 21;
let married: boolean = true;
let variable: null = null;
let obj1: object = {
    name: "pracka",
    price: 15000,
};
let obj2: object = [1,2,3];

const buildEmail = (firstName: string, lastName: string): string => {
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;
  };

const greet = (name: string): void => {
    console.log(`Hello, ${name}!`);
};