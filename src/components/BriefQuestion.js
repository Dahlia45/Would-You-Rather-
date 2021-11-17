import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { formatDate } from '../utils/helpers';
import Avatar from './Avatar';

class BriefQuestion extends Component {
	render() {
		const { question, author } = this.props;
		const { optionOne, optionTwo, timestamp, id } = question;
		const { name, avatarURL } = author;

		return (
			<Row className="justify-content-center">
				<Col xs={12} md={6}>
					<Card bg='white' className="m-3" border="primary" >
						<Card.Header>
							<Avatar avatarURL={avatarURL} className="mr-2" />
							{name} Ask Would You Ratherr?
						</Card.Header>
						<Card.Body className="text-center">
							<Card.Text>{optionOne.text.slice(0, 50)}  <a class="text-danger fw-bold">OR</a> {optionTwo.text.slice(0, 50)}?</Card.Text>
							<Link to={`/questions/${id}`}>
								<Button variant="info">View </Button>
							</Link>
						</Card.Body>
						
					</Card>
				</Col>
			</Row>
		);
	}
}

function mapStateToProps({ questions, users }, { id }) {
	const question = questions[id];

	return {
		question: question ? question : null,
		author: question ? users[question.author] : null
	};
}

export default connect(mapStateToProps)(BriefQuestion);
