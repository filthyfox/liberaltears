import React, { Component } from 'react';
import './App.css';
import myQuestions from './QuestionsArray/QuestionsArray';

import Question from './Question/Question';

class App extends Component {

	state = {
		isTestStarted: false,
		isTestFinished: false,
		currentStep: 1,
		currentStepScore: 0,
		myQuestions: myQuestions,
		userScore: 0,
		totalScore: 0,

		totalLetters: [

			A: {
				score: 2
			},

			B: {
				score: 1
			},

			C: {
				score: 0
			},

		]

	}


	switchStepNext = () => {
		let {userScore, totalScore} = this.state
		
			var nextStep = this.state.currentStep + 1;
			this.setState({
				currentStep: nextStep,
				totalScore: totalScore += userScore
			})
		
	}


	changeScore = (optionScore) => {
		var newScore =+ optionScore;
		this.setState({
			userScore: newScore
		})
	}


	render() {

		const questionsOutput = this.state.myQuestions.map(theQuestion => {
			let isCurrent = false;
			if( theQuestion.id === this.state.currentStep ){
				isCurrent = true;
			}
			return <Question key={theQuestion.id} questionObj={theQuestion} isCurrent={isCurrent} changeScore={this.changeScore} />
		});

		return (
			<div className="App">
				{questionsOutput}
				<button onClick={this.switchStepNext}>Next</button>
			</div>
		);
	}


}

export default App;
