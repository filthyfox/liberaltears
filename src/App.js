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
		Leter:null,
		TotalLeter:[],
	}


	switchStepNext = () => {
		let {userScore, totalScore, Leter, TotalLeter} = this.state
		
			var nextStep = this.state.currentStep + 1;
			this.setState({
				currentStep: nextStep,
				TotalLeter: TotalLeter.concat(Leter),
				totalScore: totalScore += userScore
			})
		
	}


	changeScore = (optionScore ,optionLetter) => {
		var newScore =+ optionScore;
		this.setState({
			userScore: newScore,
			Leter: optionLetter
		})
	}

     
	render() {
		let countA = 0;
		let countB = 0;
		let countC = 0;
		for(var i = 0; i < this.state.TotalLeter.length; ++i){
			if(this.state.TotalLeter[i] == "A"){
				countA++;
			}
			if(this.state.TotalLeter[i] == "B"){
				countB++;
			}
			if(this.state.TotalLeter[i] == "C"){
				countC++;
			}
				
		}
        
		const questionsOutput = this.state.myQuestions.map(theQuestion => {
			let isCurrent = false;
			if( theQuestion.id === this.state.currentStep ){
				isCurrent = true;
			}
			return <Question key={theQuestion.id} questionObj={theQuestion} isCurrent={isCurrent} changeScore={this.changeScore} />
		});

		return (
			<div className="App">
				<React.Fragment>
					
					{questionsOutput}
					<button onClick={this.switchStepNext}>Next</button>

					<p>A-{countA} count</p>
					<p>B-{countB} count</p>
					<p>C-{countC} count</p>
				</React.Fragment>
				
			</div>
		);
	}


}

export default App;
