import React, { useEffect, useState } from 'react';
import './Style/Component3.css';

const Component3 = () => {
    const [sec, setSec] = useState(0);
    const [value, setValue] = useState('');
    const [show, setShow] = useState(false);
    let timer;

    useEffect(() => {
        if (show && sec > 0) {
            timer = setInterval(() => {
                setSec(prevSec => {
                    if (prevSec <= 1) {
                        clearInterval(timer);
                        setShow(false);
                        return 0;
                    }
                    return prevSec - 1;
                });
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [show, sec]);

    const handleValue = (e) => {
        setValue(e.target.value);
    };

    const startTimer = () => {
        if (value && !show) {
            setSec(parseInt(value));
            setShow(true);
        }
    };

    const resetTimer = () => {
        setSec(0);
        setValue('');
        setShow(false);
        clearInterval(timer);
    };

    return (
        <div className="container">
            <div className="timer">
                <h3>Enter Countdown Time</h3>
                <input
                    type="number"
                    placeholder="Enter Seconds"
                    value={value}
                    onChange={handleValue}
                />
                <br />
                <button onClick={startTimer}>Start Timer</button>
            </div>

            {show && (
                <p id="showtime">
                    {sec > 0 ? sec : ''}{' '}
                    <span onClick={resetTimer} className="cut">
                        X
                    </span>
                </p>
            )}
        </div>
    );
};

export default Component3;
