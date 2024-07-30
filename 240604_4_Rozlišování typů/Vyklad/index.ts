import { Person } from './model.js';
//automaticky import doplni soubor bez pripony - to ale funguje jen s bundlerem, bez nej je nutne psat koncovku .js

const participants: Person[] = [
  {
    role: 'student',
    name: 'Robert',
    email: 'robert.sipek@gmail.com',
    level: 'advanced',
  },
  {
    role: 'teacher',
    name: 'Zuzana',
    email: 'zuzana.ovesna@seznam.cz',
    courses: ['Programování v TypeScriptu', 'Programování v JavaScriptu'],
  },
  {
    role: 'teacher',
    name: 'Marek',
    email: 'marek.dovtipil@email.cz',
    courses: ['Programování v TypeScriptu', 'Základy algoritmů'],
  },
  {
    role: 'student',
    name: 'Jitka',
    email: 'jitus1988@gmail.com',
    level: 'beginner',
  },
];

participants.forEach((participant: Person) => {
  if (participant.role === 'student') {
    console.log(
      `${participant.name} je student a je na úrovni ${participant.level}.`
    );
  } else if (participant.role === 'teacher') {
    console.log(
      `${participant.name} je lektor a vede kurzy ${participant.courses.join(
        ', '
      )}.`
    );
  }
});
