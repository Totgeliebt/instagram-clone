import './Login.css'
import {useState} from "react";

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleChangeEmail = event => setEmail(event.target.value)
    const handleChangePassword = event => setPassword(event.target.value)
    const handleSubmitButton = event => {
        event.preventDefault()
        handleLogin({email, password})
    }

    return(
        <section className="login">
            <div className="login_wrapper">
                <h1 className="login_text">Добро пожаловать!</h1>
                <form className="login_form" onSubmit={handleSubmitButton}>
                    <div className="login_input-wrapper">
                        <input value={email} onChange={handleChangeEmail} id="input_type_email" className="login_input" type="email" placeholder=' ' required/>
                        <label className="login_label">E-mail</label>
                    </div>
                    <div className="login_input-wrapper">
                        <input value={password} onChange={handleChangePassword} id="input_type_password" className="login_input" type="password" placeholder=' ' required/>
                        <label className="login_label">Пароль</label>
                    </div>
                    <button className="login_button">Войти</button>
                </form>
            </div>
        </section>
    )
}
export default Login