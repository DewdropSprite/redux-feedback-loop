import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUnderstandingFeedback } from '../../store';

const UnderstandingComponent = () => {
    const dispatch = useDispatch();
    const feeling = useSelector((state) => state.feeling)

    const understandingChange = (event) => {
        const selectedValue = event.target.value;
        dispatch(setUnderstandingFeedback(selectedValue));
    };
    return (
        <div>
            <h2>How well are you understanding the content?</h2>
            <div>
                <h3>Understanding?</h3>
                <select
                    value={feeling}
                    onChange={understandingChange}
                    data-testid="input"
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
            </select>
            </div>
        </div>
    )
}

export default UnderstandingComponent;