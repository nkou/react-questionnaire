import { combineReducers } from 'redux'
import { List, Map } from 'immutable'

const initialState = List()

function questionList(state = initialState, action) {
  switch(action.type) {
    case 'ADD_QUESTION':
      // Add a new Question Map on the Questionnaire State List.
      return state.push(
        Map({
          id: action.id,
          text: action.text,
          answers: List(),
          limitAnswers: false,
          minAnswers: 1,
          maxAnswers: 1
        })
      )

    case 'UPDATE_QUESTION':
      // Add the given Question on the text.
      return state.update(
        state.findIndex(
          question => question.get('id') === action.id
        ),
        question => question.set('text', action.text)
      )

    case 'REORDER_QUESTION':
      const firstIndex = state.findIndex(
        question => question.get('id') === action.id
      )
      const secondIndex = firstIndex + action.index
      // Swap indices for the given Question and the prev/next from given Question list.
      return state.map(function(question, index) {
          if (index === firstIndex)
            return state.get(secondIndex)
          else if (index === secondIndex)
            return state.get(firstIndex)
          else
            return question
        })

    case 'DELETE_QUESTION':
      // Filter out the given Question from given Question list.
      return state.filter(question => question.get('id') !== action.id)

    case 'TOGGLE_LIMIT_ANSWERS':
      // Update the given Question on answer limit toggler.
      return state.update(
        state.findIndex(
          question => question.get('id') === action.id
        ),
        question => question.set('limitAnswers', !question.get('limitAnswers'))
      )

    case 'UPDATE_ANSWERS_LIMITS':
      // Update the given Question on both answer limits.
      return state.update(
        state.findIndex(
          question => question.get('id') === action.id
        ),
        question => question.merge({minAnswers: action.min, maxAnswers: action.max})
      )

    case 'ADD_ANSWER':
      // Add a new Answer Map on the given Question Answer List.
      return state.update(
        state.findIndex(
          question => question.get('id') === action.questionId
        ),
        question => question.update(
          'answers',
          answers => answers.push(
            Map({
              id: action.answerId,
              text: action.text
            })
          )
        )
      )

    case 'REORDER_ANSWER':
      const questionIndex = state.findIndex(
        question => question.get('id') === action.questionId
      )
      const firstAnswerIndex = state.get(questionIndex).get('answers').findIndex(
        answer => answer.get('id') === action.answerId
      )
      const secondAnswerIndex = firstAnswerIndex + action.index
      // Swap indices for the given Answer and the prev/next from given Question's Answers list.
      return state.update(
        questionIndex,
        question => question.update(
          'answers',
          answers => answers.map(function(answer, index) {
            if (index === firstAnswerIndex)
             return answers.get(secondAnswerIndex)
            else if (index === secondAnswerIndex)
             return answers.get(firstAnswerIndex)
            else
             return answer
          })
        )
       )

    case 'DELETE_ANSWER':
      // Filter out the given Answer from given Question's Answers list.
      return state.update(
        state.findIndex(
          question => question.get('id') === action.questionId
        ),
        question => question.update(
          'answers',
          answers => answers.filter(
            answer => answer.get('id') !== action.answerId
          )
        )
      )

    default:
      return state
  }
}

export default combineReducers({
  questionList,
})
