import React from "react";
import PropTypes from "prop-types";
import { uuid } from 'uuidv4';
import style from'./onFeedback.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => (
    <div>
        
        {options.map(option => (
            <button key={uuid()} name={option} type="button" onClick={onLeaveFeedback}>{option}</button>
        ))}

    </div>
);

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
}

export default FeedbackOptions;

