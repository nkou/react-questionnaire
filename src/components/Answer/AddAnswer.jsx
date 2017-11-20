import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { addAnswer } from '../../actions'
import { Col, FormGroup, FormControl } from 'react-bootstrap'

export default class AddAnswer extends PureComponent {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    questionId: PropTypes.number.isRequired,
  }

  handleKeyPress(e) {
    const { questionId } = this.props

    if (e.key === 'Enter' && e.target.value) {
      this.props.dispatch(addAnswer(questionId, e.target.value))
      this.answerInput.value = ""
    }
  }

  render() {
    return (
      <FormGroup>
        <Col xs={4}>
          <FormControl
            type="text"
            placeholder="Add a potential answer here..."
            onKeyPress={(e) => this.handleKeyPress(e)}
            inputRef={(el) => {this.answerInput = el}}
          />
        </Col>
      </FormGroup>
    )
  }
}
