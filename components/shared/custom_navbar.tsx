import classes from '../../styles/shared/custom_navbar.module.css'

function CustomNavBar() {
    return <nav className={classes.container}>
        <p className={classes.navbarElements}>Home</p>
        <p className={classes.navbarElements}>About us</p>
        <div className={classes.createCV}>Create your CV</div>
        <p className={classes.navbarElements}>Pricing</p>
        <p className={classes.navbarElements}>FAQ</p>
    </nav>
}



export default CustomNavBar;