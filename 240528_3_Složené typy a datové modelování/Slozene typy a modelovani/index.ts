//1 Jednohubky

//1 Napište funkci middle, která obdrží pole čísel a vrátí číslo, která se nachází uprostřed pole. Pokud pole nemá přesný střed, vrátíte číslo na pravé straně středu. Například pro pole [1, 2, 3, 4, 5] vrátíte 3, pro pole [1, 2, 3, 4] vrátíte 3. Pokud je pole prázdné, vrátíte -1.

let inputArr: number[] = [1, 3, 5, 7, 9];

const middle = (inputArr: number[]): number => {
  const inputArrLength: number = inputArr.length;

  if (!inputArrLength) {
    return -1;
  }

  const middleIndex: number = Math.floor(inputArrLength / 2);
  let middleNumber: number = inputArr[middleIndex];

  console.log('middleIndex', middleIndex);

  return middleNumber;
};
console.log(middle(inputArr));

//2 Napište funkci fairSplit, která obdrží řetězec rozdělí jej na dvě poloviny. Pokud je délka řetězce lichá, bude první polovina o jeden znak delší. Funkce vrátí pole s dvěma řetězci. Například pro řetězec "TypeScript" vrátíte pole ["TypeS", "cript"].

let inputString: string = 'testString';

const fairSplit = (inputString: string): string[] => {
  const inputStringLength: number = inputString.length;
  const firstHalfInputString: string = inputString.slice(
    0,
    Math.round(inputStringLength / 2)
  );
  const secondHalfInputString: string = inputString.slice(
    Math.floor(inputStringLength / 2),
    inputStringLength
  );

  return [firstHalfInputString, secondHalfInputString];
};
console.log(fairSplit(inputString));

//3 Napište funkci rotate, která obdrží řetězec, a vrátí nový řetězec, ve kterém jsou všechny znaky posunuty o jedno doprava. Například pro řetězec "TypeScript" vrátíte "pTypeScri".

let inputString1: string = 'TypeScript';

const rotate = (inputString1: string): string => {
  const inputStringLength1: number = inputString1.length;
  const removedLastCharacter: string = inputString1.slice(
    0,
    inputStringLength1 - 1
  );
  const lastCharacter: string = inputString1.charAt(inputStringLength1 - 1);

  return lastCharacter + removedLastCharacter;
};
console.log(rotate(inputString1));

//4 Upravte funkci rotate tak, aby jako druhý parametr přijímala výčtový typ udávající směr rotace. Například pro řetězec "TypeScript" a směr right vrátíte "pTypeScri", pro směr left vrátíte "ypeScripT".

enum Direction {
  left = 'left',
  right = 'right',
}

const rotate1 = (
  inputString2: string = 'TypeScript',
  direction: Direction = Direction.left
): string => {
  const inputStringLength2: number = inputString2.length;
  switch (direction) {
    case Direction.left: {
      const firstCharacter: string = inputString2.charAt(0);
      const removedFirstCharacter: string = inputString2.slice(
        1,
        inputStringLength2
      );
      console.log(removedFirstCharacter + firstCharacter);
      return removedFirstCharacter + firstCharacter;
    }
    case Direction.right: {
      const lastCharacter: string = inputString2.charAt(inputStringLength2 - 1);
      const removedLastCharacter1: string = inputString2.slice(
        0,
        inputStringLength2 - 1
      );
      console.log(lastCharacter + removedLastCharacter1);
      return lastCharacter + removedLastCharacter1;
    }
  }
};
console.log(rotate1());
