import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { toggleLimitAnswers, updateAnswersLimits } from '../../actions'
import { Col, FormGroup, ControlLabel, FormControl, Checkbox } from 'react-bootstrap'

export default class QuestionFilters extends PureComponent {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    question: PropTypes.object.isRequired,
  }

  // Event Handler: updating Answer limit toggler.
  toggleLimits = (e) => {
    const questionId = this.props.question.get('id')
    this.props.dispatch(toggleLimitAnswers(questionId))
  }

  // Event Handler: updating Answer min/max limits.
  updateLimits = (e) => {
    const questionId = this.props.question.get('id')
    const minAnswers = this.minAnswerEl.value
    const maxAnswers = this.maxAnswerEl.value
    // Input validation on min/max answers limit, before updating data.
    if (this.minAnswerEl.value > this.maxAnswerEl.value) {
      // In case of invalid logic input, set both limits equal to latest given input.
      this.props.dispatch(updateAnswersLimits(questionId, e.target.value, e.target.value))
    } else {
      this.props.dispatch(updateAnswersLimits(questionId, minAnswers, maxAnswers))
    }
  }

  getValidationState = () => {
    // Input validation on min/max answers limit, showing error colors on labels and fields.
    if (this.minAnswerEl && this.maxAnswerEl && this.minAnswerEl.value > this.maxAnswerEl.value) {
      return 'error'
    }
    return null
  }

  render() {
    const question = this.props.question

    return (
      <FormGroup
        controlId="formSampleControl"
        validationState={this.getValidationState()}
      >
        <Col sm={3} xs={4}>
          <ControlLabel>Limit Answers</ControlLabel>
          <Checkbox
            checked={question.get('limitAnswers')}
            onChange={(e) => this.toggleLimits(e)}
          ></Checkbox>
        </Col>
        <Col sm={2} xs={4}>
          <ControlLabel>At least</ControlLabel>
          <FormControl
            type="number"
            min={1}
            max={question.get('maxAnswers')}
            value={question.get('minAnswers')}
            onChange={(e) => this.updateLimits(e)}
            inputRef={(el) => this.minAnswerEl = el}
            disabled={!question.get('limitAnswers')}
          />
        </Col>
        <Col sm={2} xs={4}>
          <ControlLabel>No more than</ControlLabel>
          <FormControl
            type="number"
            min={question.get('minAnswers')}
            value={question.get('maxAnswers')}
            onChange={(e) => this.updateLimits(e)}
            inputRef={(el) => this.maxAnswerEl = el}
            disabled={!question.get('limitAnswers')}
          />
        </Col>
      </FormGroup>
    )
  }
}
