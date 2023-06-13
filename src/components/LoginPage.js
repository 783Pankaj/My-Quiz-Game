import React, {  useState , useEffect} from 'react';
import LayoutPage from './LayoutPage';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginUser=(e)=>{
        e.preventDefault();
        localStorage.setItem('login', true)
        navigate('/')
        if(username ==="Pankaj" && password==="Pankaj"){
            alert("login Scuessfuly");
            setUsername('');
            setPassword('');
        }
        
         else{
            setUsername('');
            setPassword('');
         }
    }
    const navigate = useNavigate();
    useEffect(()=>{
        let login = localStorage.getItem('login');
        if(login){
            navigate('/')
        }
      });

    return (
       
        <div>
            <LayoutPage />
            <center>
                <div className="loginPage">

                    <h2>Login </h2>
                    <br />
                    <form>
                        <label>
                            Username:
                            <input
                                type="text"
                                placeholder='ram_pal'
                                required
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>
                        <br /><br /><br />
                        <label>
                            Password:
                            <input
                                type="password"
                                placeholder='ram_pal783'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        <br /><br />
                        <button className='loginBtn' type='submit' onClick={loginUser}>Login</button>
                    </form>
                </div>
            </center>
        </div>
        
    );
};

export default LoginPage;
