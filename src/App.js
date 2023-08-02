import { useState } from 'react';

import './style.css';

function App() {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="App">
            <form className="form">
                <input
                    type="text"
                    name="username"
                    style={{ display: "none" }}
                    autoComplete="username"
                />
                <label htmlFor="password">Password<sup>*</sup></label>
                <div className="password">
                    <input
                        id="password"
                        name="password"
                        autoComplete="new-password"
                        type={showPassword ? "text" : "password"}
                    />
                    <button type="button" className="showPassword-btn" onClick={handleTogglePassword}>
                        {showPassword ? <div>&#128580;</div> : <div>&#128526;</div>}
                    </button>
                </div>
                <div className="all-sections">
                    <span className="section"></span>
                    <span className="section"></span>
                    <span className="section"></span>
                </div>
            </form>
        </div>
    );
}

export default App;
