import Link from "next/link"
import classes from '../../styles/shared/login_signup_buttons.module.css'

export default function LoginAndSignUpButtons() {
    return <div className={classes.smallContainer}>
        <Link href="/login" >
            <a className={classes.login}>Login</a>
        </Link>
        <Link href="/signup" >
            <a className={classes.signup}>Sign up</a>
        </Link>
    </div>
}