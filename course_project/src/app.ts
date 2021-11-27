let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Thing';

if (typeof userInput === 'string') {
  userName = userInput;
}

// This techincally has a type of "never" as in never returns anything
function generateError(message: string, code: number) {
  throw { message: message, errorCode: code}
}

generateError('An error occured!', 500);