import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { addQuestion } from '../../actions'
import { Row, Col, Button, Popover } from 'react-bootstrap'

export default class AddQuestion extends PureComponent {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
  }

  // Event Handler: creating a new empty Question.
  handleClick() {
    this.props.dispatch(addQuestion(''))
  }

  render() {
    const disabled = this.props.disabled

    return (
      <Row>
        <Col xs={8}>
          <h3>Create your Questionnaire</h3>
        </Col>
        <Col xs={4} className="col--align-right">
          <Button
            bsSize="large"
            onClick={() => this.handleClick()}
            disabled={disabled}
          >Add New Question</Button>
          {
            // Info Popover: display once Question limit is reached.
            disabled ?
            <Popover
              id="popover-question-limit"
              placement="bottom"
              positionLeft={40}
              positionTop={50}
            >Total number (10) of questions has been reached.</Popover> : ''
          }
        </Col>
      </Row>
    );
  }
}
