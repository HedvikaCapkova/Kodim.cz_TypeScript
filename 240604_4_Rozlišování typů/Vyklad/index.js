//automaticky import doplni soubor bez pripony - to ale funguje jen s bundlerem, bez nej je nutne psat koncovku .js
const participants = [
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
participants.forEach((participant) => {
    if (participant.role === 'student') {
        console.log(`${participant.name} je student`);
    }
    else {
    }
});
export {};
