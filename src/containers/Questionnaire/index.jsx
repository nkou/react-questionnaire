import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AddQuestion from '../../components/Question/AddQuestion'
import QuestionList from '../../components/Question/QuestionList'
import { Grid } from 'react-bootstrap'

class Questionnaire extends PureComponent {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    questionList: PropTypes.object.isRequired,
  }

  render() {
    const { dispatch, questionList } = this.props

    return (
      <Grid>
        <AddQuestion dispatch={dispatch} disabled={questionList.size === 10} />
        <hr/>
        <QuestionList dispatch={dispatch} questionList={questionList} />
      </Grid>
    )
  }

}

const mapStateToProps = state => ({ ...state.questions })

export default connect(mapStateToProps)(Questionnaire)
