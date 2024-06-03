import { useState } from "react";
import { useNavigate } from 'react-router-dom';

// importing styled components
import { 
    PageWrapper,
    FormsWrapper,
    Forms,
    Form,
    SocialIcon,
    PanelsWrapper,
    Panel,
} from "../Styles/Login.Styled";

// importing react-icons
import { FaUser, FaGoogle, FaGithub, FaEnvelope} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiPasswordFill } from "react-icons/pi";

// importing SVGs
import SigninSVG from "../Tools/Imgs/signin.svg";
import SignupSVG from "../Tools/Imgs/signup.svg";


function Login() {
    const [mode, setMode] = useState('signin');
    const changeMode = () => {
        setMode((prevMode) => (prevMode === 'signin' ? 'signup'  : 'signin'));
        // setMode((prevMode) => {
        //     if (prevMode === 'signin'){
        //         setMode('signup')
        //         navigate('/register')
        //     }else {
        //         setMode('signin')
        //         navigate('/login')
        //     }
        // })
    }
    const HandleRoute = (routeName)=> {
        if(routeName === 'register'){
            changeMode()
            navigate('/register')
        }else{
            changeMode()
            navigate('/login')
        }
    }
    const navigate = useNavigate();

    return (
        <PageWrapper $mode ={mode}>
            <FormsWrapper>
                <Forms $mode={mode}>
                    {/* Start Sign In */}
                    <Form $formType='signin' $mode={mode} >
                        <h2 className="form-title">Sign in</h2>
                        <div className="input-field">
                            <i><FaUser /></i>
                            <input type='email' placeholder='Email'  />
                        </div>
                        <div className="input-field">
                            <i><PiPasswordFill /></i>
                            <input type='password' placeholder='Password' />
                        </div>
                        <input className="submit-btn" type='submit' value='Sign in' />
                        <p className="social-txt">Or Sign in with social platforms</p>
                        <div className="social-media">
                            <SocialIcon ><FaGoogle /></SocialIcon>
                            <SocialIcon ><FaGithub /></SocialIcon>
                            <SocialIcon ><FaXTwitter /></SocialIcon>
                        </div>
                    </Form>
                        {/* End Sign In */}

                        {/* Start Sign Up */}
                    <Form $formType='signup' $mode={mode} >
                        <h2 className="form-title">Sign Up</h2>
                        <div className="input-field">
                            <i><FaUser /></i>
                            <input type='text' placeholder='Username' />
                        </div>
                        <div className="input-field">
                            <i><FaEnvelope /></i>
                            <input type='email' placeholder='Email'  />
                        </div>
                        <div className="input-field">
                            <i><PiPasswordFill /></i>
                            <input type='password' placeholder='Password'  />
                        </div>
                        <input className="submit-btn" type='submit' value='Sign Up'  />
                        <p className="social-txt">Or Sign in with social platforms</p>
                        <div className="social-media">
                            <SocialIcon ><FaGoogle /></SocialIcon>
                            <SocialIcon ><FaGithub /></SocialIcon>
                            <SocialIcon ><FaXTwitter /></SocialIcon>
                        </div>
                    </Form>
                        {/* End Sign Up */}

                </Forms>
            </FormsWrapper>

            <PanelsWrapper>
                <Panel $placement='left' $mode={mode}>
                    <div className="panel-content">
                        <h3>New in our store?</h3>
                        <p>Register and enjoy the best deals ever on our collection of laptops.</p>
                        <button className="panel-btn" onClick={()=>{ HandleRoute('register')}}>Sign Up</button>
                    </div >
                    <img className="panel-img" src={SignupSVG} alt='signup' />
                </Panel>
                
                <Panel $placement='right' $mode={mode}>
                    <div className="panel-content">
                        <h3>One of us?</h3>
                        <p>If you already have an account, just sign in. We missed you!</p>
                        <button className="panel-btn" onClick={()=>HandleRoute('login')}>Sign In</button>
                    </div>
                    <img className="panel-img" src={SigninSVG} alt='signin' />
                </Panel>
            </PanelsWrapper>
        </PageWrapper>
    )
}

export default Login