import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import QuestionItem from '../../components/Question/QuestionItem'
import { Row, Col } from 'react-bootstrap'

export default class QuestionList extends PureComponent {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    questionList: PropTypes.object.isRequired,
  }

  render() {
    const { dispatch, questionList } = this.props

    return (
      <Row>
        <Col xs={12}>
          {
            (!!questionList.size) ?
              questionList.map((question, index) => {
                return (
                  <QuestionItem key={index}
                      dispatch={dispatch}
                      question={question}
                      order={index}
                      last={index + 1 === questionList.size}
                  />
                )
              })
            :
              // Info Text: on empty Question list.
              <p>No question has been created yet.</p>
          }
        </Col>
      </Row>
    )
  }

}
