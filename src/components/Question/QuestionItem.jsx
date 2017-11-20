import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { updateQuestion, reorderQuestion, deleteQuestion } from '../../actions'
import QuestionFilters from '../../components/Question/QuestionFilters'
import AddAnswer from '../../components/Answer/AddAnswer'
import AnswerList from '../../components/Answer/AnswerList'
import { Row, Col, Form, FormGroup, FormControl, Button, Glyphicon } from 'react-bootstrap'

export default class QuestionItem extends PureComponent {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    question: PropTypes.object.isRequired,
    order: PropTypes.number.isRequired,
    last: PropTypes.bool.isRequired,
  }

  onTextChange = (e) => {
    const id = this.props.question.get('id')
    this.props.dispatch(updateQuestion(id, e.target.value))
  }

  render() {
    const { dispatch, question, order, last } = this.props
    const id = question.get('id')
    const text = question.get('text')

    return (
      <Row>
        <Col xs={12}>
          <fieldset>
            <legend>Question {order + 1}</legend>
            <Form horizontal>
              <FormGroup>
                <Col xs={8}>
                  <FormControl
                    type="text"
                    value={text}
                    placeholder="Enter your question prompt..."
                    onChange={(e) => this.onTextChange(e)}
                  />
                </Col>
                <Col xs={4} className="col--align-right">
                  <Button className="btn--side-margins"
                    onClick={() => dispatch(reorderQuestion(id, -1))}
                    disabled={order === 0}
                  ><Glyphicon glyph="menu-up" /></Button>
                  <Button className="btn--side-margins"
                    onClick={() => dispatch(reorderQuestion(id, +1))}
                    disabled={last}
                  ><Glyphicon glyph="menu-down" /></Button>
                  <Button  className="btn--side-margins"
                    onClick={() => dispatch(deleteQuestion(id))}
                  ><Glyphicon glyph="trash" /></Button>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col xs={12}>
                  <QuestionFilters dispatch={dispatch} question={question} />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col xs={12}>
                  <AnswerList dispatch={dispatch} question={question} />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col xs={12}>
                  <AddAnswer dispatch={dispatch} questionId={id} />
                </Col>
              </FormGroup>
            </Form>
          </fieldset>
        </Col>
      </Row>
    )
  }
}
