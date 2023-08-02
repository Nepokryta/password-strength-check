import { useState } from 'react';
import './style.css';

function App() {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const getPasswordStrength = (password) => {
        if (password.length === 0) {
            return ["", "", ""];
        } else if (password.length < 8) {
            return ["red", "red", "red"];
        } else if (
            /[a-zA-Zа-яА-Я]/.test(password) &&
            /[0-9]/.test(password) &&
            /[!@#$%^&*]/.test(password)
        ) {
            return ["green", "green", "green"];
        } else if (
            /[a-zA-Zа-яА-Я]/.test(password) &&
            (/[0-9]/.test(password) || /[!@#$%^&*]/.test(password))
        ) {
            return ["yellow", "yellow", ""];
        } else {
            return ["red", "", ""];
        }
    };

    const [section1, section2, section3] = getPasswordStrength(password);

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
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="new-password"
                        type={showPassword ? "text" : "password"}
                    />
                    <button type="button" className="showPassword-btn" onClick={handleTogglePassword}>
                        {showPassword ? <div>&#128580;</div> : <div>&#128526;</div>}
                    </button>
                </div>
                <div className="all-sections">
                    <span className={`section ${section1}`}></span>
                    <span className={`section ${section2}`}></span>
                    <span className={`section ${section3}`}></span>
                </div>
            </form>
        </div>
    );
}

export default App;
