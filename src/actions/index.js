let questionIdCounter = 0
let answerIdCounter = 0

export const addQuestion = (text) => (
  { type: 'ADD_QUESTION', id: ++questionIdCounter, text }
)

export const updateQuestion = (id, text) => (
  { type: 'UPDATE_QUESTION', id, text }
)

export const reorderQuestion = (id, index) => (
  { type: 'REORDER_QUESTION', id, index }
)

export const deleteQuestion = (id) => (
  { type: 'DELETE_QUESTION', id }
)

export const toggleLimitAnswers = (id) => (
  { type: 'TOGGLE_LIMIT_ANSWERS', id }
)

export const updateAnswersLimits = (id, min, max) => (
  { type: 'UPDATE_ANSWERS_LIMITS', id, min, max }
)

export const addAnswer = (questionId, text) => (
  { type: 'ADD_ANSWER', questionId, answerId: ++answerIdCounter, text }
)

export const reorderAnswer = (questionId, answerId, index) => (
  { type: 'REORDER_ANSWER', questionId, answerId, index }
)

export const deleteAnswer = (questionId, answerId) => (
  { type: 'DELETE_ANSWER', questionId, answerId }
)
