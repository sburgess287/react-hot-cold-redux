// Actions
export const GENERATE_AURAL_UPDATE = 'GENERATE_AURAL_UPDATE'
export const generateAuralUpdate = () => ({
  type: GENERATE_AURAL_UPDATE
});

// Restart game
export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = correctAnswer => ({
  type: RESTART_GAME, 
  correctAnswer,

})

// Make Guess
export const MAKE_GUESS = 'MAKE_GUESS'; 
export const makeGuess = guess => ({
  type: MAKE_GUESS, 
  guess
})

// incorrect/not needed: return feedback logic handled in reducer
// export const RETURN_FEEDBACK = 'RETURN_FEEDBACK';
// export const returnFeedback = feedback => ({
//   type: RETURN_FEEDBACK,
//   feedback, 
//   difference

// })

// missed generate Aural update