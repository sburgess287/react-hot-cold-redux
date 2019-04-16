import {RESTART_GAME, MAKE_GUESS, GENERATE_AURAL_UPDATE} from '../actions';

// set initial state
const initialState = {
    guesses: [],
    feedback: 'Make a Guess!',
    auralStatus: '', 
    correctAnswer: Math.floor(Math.random() * 100) + 1
 
}


// export reducer and return state
export default (state=initialState, action) => {
  if(action.type === RESTART_GAME) {
    return Object.assign({}, state, {
      guesses: [],
      feedback: 'Make a Guess!',
      auralStatus: '', 
      correctAnswer: action.correctAnswer
      
    });
  }

  else if(action.type === MAKE_GUESS) {
    let feedback, guess;

    guess = parseInt(action.guess, 10);
    if(isNaN(guess)) {
      feedback = 'Please enter a valid number' 
    } return Object.assign({}, state, {
      feedback, 
      guesses: [...state.guesses, guess]
    })

    // error says unreachable code here
    const difference = Math.abs(guess - state.correctAnswer);
    
    if (difference >= 50){
      feedback = 'You\'re Ice Cold...'
    } else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    } else if (difference >= 1) {
      feedback = 'You\'re Hot...'
    } else {
      feedback = "You got it";
    }
    return Object.assign({} , state, {
      feedback, 
      guesses: [...state.guesses, guess]
    }) 
  }

  if (action.type === GENERATE_AURAL_UPDATE) {
    const {guesses, feedback} = state;

    const pluralize = guesses.length !==1;

    let auralStatus = `Here's the state of the game right now: ${feedback} 
    You've made ${guesses.length} 
    ${pluralize ? 'guesses' : 'guess'}.`;

    if (guesses.length > 0){
      auralStatus += `${pluralize
      ? 'in order of most-to least recent, they are'
      : 'It was'}: ${guesses.reverse().join(', ')}`;
    }
    return Object.assign({}, state, {auralStatus});
  }


  return state;
};