import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./security/AuthContext"

export default function LoginComponent() {

    const [username, setUsername] = useState('mymy')
    const [password, setPassword] = useState('123')
    const [showErrorsMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate();

    const authContext = useAuth();

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    async function handleSubmit() {
        if(await authContext.login(username, password)) {
            navigate(`/welcome/${username}`)
            
        } else {
            setShowErrorMessage(true)
        }
    } 

    return (
        <div className="Login"> 
            <h1>Time to login</h1> 
            {showErrorsMessage && <div className="errorMessage">Authentication Failed. Please check yout credentials.</div>}
            <div className="LoginForm">
                <div>
                    <label>User Name: </label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}