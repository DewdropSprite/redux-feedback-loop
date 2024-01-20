import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFeelingFeedback } from '../../store';
// import { useHistory } from 'react-router-dom';

const FeelingComponent = () => {
    const dispatch = useDispatch();
    const feeling = useSelector((state) => state.feeling)
    // const history = useHistory()

    // const handleClick = () => {
    //   // alert('You\'re headed to the animal  page')
    //   // Send user to animals page
    //   history.push('/understandingcomponent')
    // }

    const feelingChange = (event) => {
        const selectedValue = event.target.value;
        dispatch(setFeelingFeedback(selectedValue));
    };
    return (
        <div>
            <h2>How are you feeling today?</h2>
            <div>
                <h3>Feeling?</h3>
                <select
                    value={feeling}
                    onChange={feelingChange}
                    data-testid="input"
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            {/* <div>
                <button onClick={handleClick}>NEXT</button>
            </div> */}
        </div>
    )
}

export default FeelingComponent;