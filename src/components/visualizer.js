import React from 'react';
import './style.css';

export default class Visualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    } 

    resetArray() {
        const array = [];
        for (let i = 0; i < 25; i++) {
            array.push(randomInt(10, 100));
        }
        this.setState({ array });
    }

    swap(arr, x, y) {
        var temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }

    sortArrayUp = () => {
        const array = this.state.array;
        for (let i = 0; i < this.state.array.length; i++) {
            for (let j = 0; j < this.state.array.length - i; j++) {
                if (this.state.array[j] > this.state.array[j + 1]) {
                    this.swap(array, j, j + 1);
                }
            }
        }
        this.setState({ array });
    }

    sortArrayDown = () => {
        const array = this.state.array;
        for (let i = 0; i < this.state.array.length; i++) {
            for (let j = 0; j < this.state.array.length - i; j++) {
                if (this.state.array[j] < this.state.array[j + 1]) {
                    this.swap(array, j, j + 1);
                }
            }
        }
        this.setState({ array });
    }

    render() {
        const { array } = this.state;

        return (
            <>
                <div className='array-container'>
                    {array.map((value, index) => (
                        <div className="array-bar" key={index} style={{ height: `${value * 5}px` }}>
                        </div>
                    ))}
                </div>
                <div className="buttons">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-repeat" viewBox="0 0 16 16" onClick={() => this.resetArray()}>
                        <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                        <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16" onClick={() => this.sortArrayUp()}>
                        <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16" onClick={() => this.sortArrayDown()}>
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16" onClick={() => exit()}>
                        <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                        <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                    </svg>
                </div>
            </>
        );
    }
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function exit() {
    window.open('https://soumyajit-12.github.io/ThankYouWebPage/', "_self")
}