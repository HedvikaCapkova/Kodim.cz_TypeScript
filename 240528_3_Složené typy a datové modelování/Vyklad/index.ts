const ages: number[] = [1, 2, 3];
const names: string[] = ['Anna', 'Hana'];

const ages1: Array<number> = [1, 2, 3]; //jina verze zapisu

interface User {
  name: string;
  age?: number; //nepovinny udaj
  email: string;
  loggedIn: boolean;
  address: string | undefined;
}

const user: User = {
  name: 'Anna',
  email: '@',
  loggedIn: true,
  address: '',
};

const zipCode: number | string = '12000';
const address: string | undefined = undefined;

//literarni typy (vyctove typy)
const nameOfAlice: 'Alice' = 'Alice';
const numberOfAge: 45 = 45;
const married: true = true;
const color: 'red' | 'green' | 'blue' = 'green';
const dayOfWeek: 1 | 2 | 3 | 4 | 5 | 6 | 7 = 5;

//alias
type Color = 'red' | 'green' | 'blue';
type DayOfWeek = 1 | 2 | 3 | 4 | 5 | 6 | 7;

const favoriteColor: Color = 'red';
const favoriteDay: DayOfWeek = 5;

//jiny zapis definovani aliasu
const RED = 'red';
const GREEN = 'green';
const BLUE = 'blue';

type Color1 = typeof RED | typeof GREEN | typeof BLUE;

//dedicnost
interface AnotherUser {
  name: string;
  email: string;
}

interface Student {
  name: string;
  email: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

//neni treba vsechny parametry psat znovu, ale lze pouzit existujici typ (takto vytvoreny typ neni podtypem)
interface Student1 extends AnotherUser {
  level: 'beginner' | 'intermediate' | 'advanced';
}

interface Lecturer extends AnotherUser {
  courses: string[];
}
