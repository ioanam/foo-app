import React from 'react';
import './App.css';


const sayHello = () => {
    fetch('/api/helloWorld',{
        method: "GET",
        headers: {
            "access-control-allow-origin" : "*",
            "Content-type": "application/json; charset=UTF-8"
        }})
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
            </header>
        </div>
    );
}

export default App;
