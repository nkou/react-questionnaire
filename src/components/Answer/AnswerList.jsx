import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import AnswerItem from '../../components/Answer/AnswerItem'
import { Row, Col } from 'react-bootstrap'

export default class AnswerList extends PureComponent {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    question: PropTypes.object.isRequired,
  }

  render() {
    const { dispatch, question } = this.props
    const answerList = question.get('answers')

    return (
      <Row>
        <Col xs={12}>
          {
            (!!answerList.size) ?
              answerList.map((answer, index) => {
                return (
                  <AnswerItem key={index}
                      dispatch={dispatch}
                      questionId={question.get('id')}
                      answer={answer}
                      order={index}
                      last={index + 1 === answerList.size}
                  />
                )
              })
            :
              // Info Text: on empty Answer list.
              <p>No potential answers provided yet.</p>
          }
        </Col>
      </Row>
    )
  }

}
