import React from 'react';
import './App.css';


const sayHello = () => {
    fetch('/api/helloWorld')
        .then(response => {
            console.log("hello back to you");
            console.log(response);
        })
        .catch(error => {
            console.error("No hello", error);
        })
}


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <button onClick={sayHello}>Hello</button>
                <p>${process.env.REACT_APP_MY_PROP}</p>
            </header>
        </div>
    );
}

export default App;
