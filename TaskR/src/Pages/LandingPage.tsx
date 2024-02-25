import './PageStyles/LandingPage.css'
import {Link} from "react-router-dom";

function LandingPage() {
    return (
        <>
            <h1>Welcome to <span className={'taskr-logo'}>TaskR</span>,<br/> what would you like to do?</h1>
            <div className={'buttons'}>
                <div className={'single-button'}><Link className={'login-button'} to={'/auth/login'}>Sign In</Link></div>
                <div className={'single-button'}><Link className={'register-button'} to={'/auth/register'}>Sign Up</Link></div>
            </div>
        </>
    )
}

export default LandingPage
