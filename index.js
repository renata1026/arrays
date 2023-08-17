// Generating an array of random numbers
const newArray = () => {
  let array = [];
  for (let i = 0; i < 10; i++) {
    let num = Math.ceil(Math.random() * 100);
    array.push(num);
  }
  return array;
};

let generatedArray = newArray();
let formattedArray = generatedArray.join(', ');
let display = document.querySelector('#display-array');
display.textContent = `[${formattedArray}]`;

// Initial button and visibility toggle
let initialState = document.querySelector('#initial-button');
let nextButtons = document.querySelector('#next-buttons');

initialState.addEventListener('click', () => {
  initialState.classList.toggle('is-visible');
  nextButtons.style.visibility = 'visible';
});

// Displays the First Number
let firstNum = document.querySelector('#first-num');
firstNum.addEventListener('click', () => {
  display.textContent = generatedArray[0];
});

// Add random number
let ranNum = document.querySelector('#add-ran-num');
ranNum.addEventListener('click', () => {
  let num = Math.ceil(Math.random() * 100);
  generatedArray.push(num);
  formattedArray = generatedArray.join(', ');
  display.textContent = `[${formattedArray}]`;
});

// Bears
let bears = document.querySelector('#bear-emoji');
bears.addEventListener('click', () => {
  let bearArray = generatedArray.map(() => '🐻');
  formattedArray = bearArray.join(', ');
  display.textContent = `[${formattedArray}]`;
});

// Reverse it
let reverse = document.querySelector('#reverse-it');
reverse.addEventListener('click', () => {
  generatedArray.reverse();
  formattedArray = generatedArray.join(', ');
  display.textContent = `[${formattedArray}]`;
});

// Show the highest number
let highestNumber = document.querySelector('#highest');
highestNumber.addEventListener('click', () => {
  let highestArray = [...generatedArray];
  highestArray.sort((a, b) => b - a);
  let highest = highestArray[0];
  display.textContent = highest;
});

// Fizz Buzz
let fizzBuzz = document.querySelector('#fizz-buzz');
fizzBuzz.addEventListener('click', () => {
  let fizzBuzzResult = generatedArray.map((number) => {
    if (number % 15 === 0) {
      return '✨,🫧';
    } else if (number % 3 === 0) {
      return '🫧';
    } else if (number % 5 === 0) {
      return '✨';
    } else {
      return number;
    }
  });
  formattedArray = fizzBuzzResult.join(', ');
  display.textContent = `[${formattedArray}]`;
});

// Heart
let heart = document.querySelector('#heart');
let heartEmoji = '❤️';
let currentIndex = 0;
let originalFontSize;

heart.addEventListener('click', () => {
  if (currentIndex < generatedArray.length) {
    if (currentIndex === 0) {
      // Store the original font size
      originalFontSize = display.style.fontSize;
    }

    // Change font size to 16px for displaying hearts
    display.style.fontSize = '16px';

    const currentNumber = generatedArray[currentIndex];
    display.textContent = heartEmoji.repeat(currentNumber);

    setTimeout(() => {
      display.textContent = '';
      currentIndex++;
      if (currentIndex < generatedArray.length) {
        heart.click(); // Trigger the click event again
      } else {
        // Restore the original font size
        display.style.fontSize = originalFontSize;
      }
    }, 1000);
  }
});

const select = document.querySelector('#remove');

// Function to update the select options
const updateSelectOptions = () => {
  select.innerHTML = '<option disabled selected>Remove a Number</option>';
  for (let num of generatedArray) {
    const option = document.createElement('option');
    option.textContent = num;
    select.appendChild(option);
  }
};

// Initial population of select options
updateSelectOptions();

// Event listener for select change
select.addEventListener('change', () => {
  const selectedValue = parseInt(select.value);
  if (selectedValue) {
    const indexToRemove = generatedArray.indexOf(selectedValue);
    if (indexToRemove !== -1) {
      generatedArray.splice(indexToRemove, 1);
      updateSelectOptions(); // Update the options after removal

      // Update the displayed array
      formattedArray = generatedArray.join(', ');
      display.textContent = `[${formattedArray}]`;
    }
  }
});

//reset
const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
  const generatedArray = newArray();
  const formattedArray = generatedArray.join(', '); // Change ', ' to ' ' for spaces
  display.textContent = `[${formattedArray}]`;
});
