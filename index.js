//To capitalize the first letter of a string 
function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

//To convert a sentence to title case
function titleCase(sentence) {
  const words = sentence.split(' ');
  const titleCasedWords = words.map(word => capitalizeFirstLetter(word));
  return titleCasedWords.join(' ');
}

//Converting tutorials to title case
function titleCased() {
  return tutorials.map(titleCase);
}

const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//Function to return tutorials in title case
const getTitleCasedTutorials = () => {
  return titleCased();
}

