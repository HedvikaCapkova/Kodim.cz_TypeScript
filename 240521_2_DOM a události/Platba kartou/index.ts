const numericValue = (value: string)=> {
    return value.replace(/\D/g, '').slice(0, 16);
  };

// const handleInput = (event: Event) => {
//     const target = event.target as HTMLInputElement
//     const userInput: string = inputElement.value;
// }

document.querySelector(".card-input").addEventListener("input", (e) => {
    const inputElement: HTMLInputElement = document.querySelector(".card-input");
    const userInput: string = inputElement.value;
    console.log(userInput);
    const cleanedValue =  numericValue(userInput);
    console.log(cleanedValue)
})

