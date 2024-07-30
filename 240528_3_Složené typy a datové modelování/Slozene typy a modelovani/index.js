//1 Jednohubky
//1
let inputArr = [1, 3, 5, 7, 9];
const middle = (inputArr) => {
    const inputArrLength = inputArr.length;
    const middleIndex = Math.floor(inputArrLength / 2);
    let middleNumber = inputArr[middleIndex];
    middleIndex === null ? (middleNumber = -1) : middleNumber;
    console.log('middleIndex', middleIndex);
    console.log('middleNumber', middleNumber);
    return middleNumber;
};
//2
let inputString = 'cviceni2';
const fairSplit = (inputString) => {
    const inputStringLength = inputString.length;
    const firstHalfInputString = inputString.slice(0, Math.round(inputStringLength / 2));
    const secondHalfInputString = inputString.slice(Math.floor(inputStringLength / 2), inputStringLength);
    console.log('firstHalfInputString', firstHalfInputString);
    console.log('secondHalfInputString', secondHalfInputString);
    return [firstHalfInputString, secondHalfInputString];
};
//3
let inputString1 = 'cviceni3';
