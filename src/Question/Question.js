import React, { Component } from 'react';
import Option from '../Option/Option';


class Question extends Component {

    questionObj = this.props.questionObj;

    optionsOutput = this.questionObj.options.map(theOption => {
        return <Option 
                    key={theOption.id} 
                    optionObj={theOption}

                    questionId={this.questionObj.id} 
                    changeScore={this.props.changeScore} 
                />
    });


    render() {
        return (
            <div className={this.props.isCurrent === true ? "step is-current" : "step not-current"}>
                
                <div className="step-question">{this.questionObj.q}</div>
                
                <div className="step-options">
                    {this.optionsOutput}
                </div>                

            </div>
        );
    }

}


export default Question;
