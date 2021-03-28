import {useState} from 'react';
import './App.css';

function App() {

    const [res, setRes] = useState({});

    return (
        <div className="App">
            <header className="App-header">
                <h2>Webapp From Another Domain</h2>

                <button className="btn btn-default" onClick={() => {
                    fetch('https://localhost:8443/api/login').then(() => {
                        alert('login success, open dev tool to check the cookie')
                    })
                }}>
                    Login to Get Cookies
                </button>

                <button className="btn btn-default" onClick={() => {
                    fetch('https://localhost:8443/api/cookies-received')
                        .then(res => res.json())
                        .then(res => {
                            setRes(res);
                        })
                }}>
                    Cookies Server Received
                </button>

                <div>{JSON.stringify(res, null, 2)}</div>
            </header>
        </div>
    );
}

export default App;
