// 1 Funkce head vrátí první prvek pole nebo null, pokud je pole prázdné.
const head = () => { };
// 2 Funkce tail vrátí všechny prvky pole kromě prvního nebo prázdné pole, pokud je vstupní pole prázdné.
// 3 Funkce butLast vrátí všechny prvky pole kromě posledního nebo prázdné pole, pokud je vstupní pole prázdné.
// 4 Funkce last vrátí poslední prvek pole nebo null, pokud je pole prázdné.
const last = (arr) => {
    return arr.length === 0 ? null : arr[arr.length - 1];
};
// const last = <T>(arr: T[]): T | null | undefined => {
//   return arr.length === 0 ? null : arr.at(-1);
// };
// 5 Funkce isEmpty vrátí true, pokud je pole prázdné, jinak false.
// 6 Funkce concat spojí dvě pole do jednoho pole.
// 7 Funkce contains vrátí true, pokud pole obsahuje hledaný prvek, jinak false.
// 8 Funkce strip bude brát pole, které jako své prvky může obsahovat hodnoty null a vrátí pole, které bude obsahovat jen ty prvky, které nejsou null.
// 9 Funkce insert vloží na zadanou pozici do pole nový prvek a vrátí nové pole.
// insert([1, 2, 3], 1, 4); // [1, 4, 2, 3]
// 10 Funkce remove odebere prvek na zadané pozici a vrátí nové pole.
// remove([1, 2, 3], 1); // [1, 3]
