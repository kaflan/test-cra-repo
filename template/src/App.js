import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        data
    };
    render ( ) {
        const { data } = this.state;
        const submit = () => {
            this.result = JSON.stringify(this.data);
        }
        return (
            <div>
                <h1>Demo Component. Submit me!</h1>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label for="firstName">First name</label>
                        <input type="text" className="form-control" id="firstName" placeholder="" value={data.firstName} required/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label for="lastName">Last name</label>
                        <input type="text" className="form-control" id="lastName" placeholder="" value={data.lastName} required/>
                    </div>
                </div>
    
                <div className="mb-3">
                    <label for="username">Username</label>
                    <input type="text" className="form-control" id="username" placeholder="Username" value={data.username}  required/>
                </div>
    
                <div className="mb-3">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" id="email" value={data.email} placeholder="you@example.com"/>
                </div>
    
                <div className="mb-3">
                    <label for="address">Address</label>
                    <input type="text" className="form-control" id="address" value={data.address} placeholder="1234 Main St"
                           required/>
                </div>
                <div>
                    <button onClick={submit()}>Submit</button>
                </div>
                <div>
                    <h1>Result</h1>
                    <pre id="result" > {JSON.stringify(this.result)} </pre>
                </div>
            </div>
        );
    }
}

export default App;
