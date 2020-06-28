import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Sections from './Sections';
import Notification from './Notification';

export default class App extends Component{

    static propTypes = {};

    state = {
        good: 0,
        neutral: 0,
        bad: 0,

    }; 

    handleChange = e =>{
        const { name } = e.target
        this.setState(prevState => {
            return {
                [name]: prevState[name] + 1,
            }
        })
    }

    countTotalFeedback = () =>{

        return Object.values(this.state).reduce((t, n) => t + n);

    }
    countPositiveFeedbackPercentage = () =>{
        const positiveFeedback =  (this.state.good * 100)/(this.countTotalFeedback())
        return Math.trunc(positiveFeedback);
    }

    render(){
        const objKey = Object.keys(this.state)
        const total = this.countTotalFeedback();
        return(
            <div>
              <Sections title={"Please leave feedback"}>
                <FeedbackOptions options={objKey} onLeaveFeedback={this.handleChange}/>
              </Sections>

              <Sections title="Statistics">
                {this.countTotalFeedback() === 0 

                ?
                
                <Notification message={"No feedback given"} /> 
                
                : 
                
                <Statistics
               
                    good = {this.state.good}
                    neutral = {this.state.neutral}
                    bad = {this.state.bad}
                    total = {this.countTotalFeedback()}
                    positivePercentage = {this.countPositiveFeedbackPercentage()}

                />}
              </Sections>

            </div>
        );
    }
}   

