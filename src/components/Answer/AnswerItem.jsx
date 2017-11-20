import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { reorderAnswer, deleteAnswer } from '../../actions'
import { Row, Col, FormGroup, Button, Glyphicon } from 'react-bootstrap'

export default class AnswerItem extends PureComponent {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    questionId: PropTypes.number.isRequired,
    answer: PropTypes.object.isRequired,
    order: PropTypes.number.isRequired,
    last: PropTypes.bool.isRequired,
  }

  render() {
    const { dispatch, questionId, answer, order, last } = this.props
    const answerId = answer.get('id')
    const text = answer.get('text')

    return (
      <Row>
        <Col xs={12}>
          <FormGroup>
            <Col xs={8}>
              {order + 1}. {text}
            </Col>
            <Col xs={4} className="col--align-right">
              <Button className="btn--side-margins"
                onClick={() => dispatch(reorderAnswer(questionId, answerId, -1))}
                disabled={order === 0}
              ><Glyphicon glyph="menu-up" /></Button>
              <Button className="btn--side-margins"
                onClick={() => dispatch(reorderAnswer(questionId, answerId, +1))}
                disabled={last}
              ><Glyphicon glyph="menu-down" /></Button>
              <Button className="btn--side-margins"
                onClick={() => dispatch(deleteAnswer(questionId, answerId))}
              ><Glyphicon glyph="trash" /></Button>
            </Col>
          </FormGroup>
        </Col>
      </Row>
    )
  }
}
