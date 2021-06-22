import React from 'react';
import './App.css';


const sayHello = () => {
    fetch('/mockapi/helloWorld')
        .then(response => {
            console.log("hello back to you");
            console.log(response);
        })
        .catch(error => {
            console.error("No hello", error);
        })
}
const sayHelloFromVaultinum = () => {
    fetch('/api/hello')
        .then(response => {
            console.log("hello from V");
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
                <p>Var ENV</p>
                <button onClick={sayHelloFromVaultinum}>Hello From V</button>
            </header>
        </div>
    );
}

export default App;
