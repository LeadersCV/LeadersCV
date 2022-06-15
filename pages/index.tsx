import type { NextPage } from 'next'
import CustomNavBar from '../components/shared/custom_navbar';
import classes from '../styles/home/home.module.css';
import Image from 'next/image';
import SearchBar from '../components/home/search_bar';
import Suggestions from '../components/home/suggestions';
import Statistics from '../components/home/statistics';
import LoginAndSignUpButtons from '../components/shared/login_signup_buttons';

const Home: NextPage = () => {
  return (
    <div className={classes.container}>
      <CustomNavBar />
      <LoginAndSignUpButtons />
      <div className={classes.mainImage}>
        <Image src='/assets/Leaderscv_full_logo.png' width={400} height={100} />
      </div>
      <SearchBar />
      <Suggestions />
      <Statistics />

    </div>
  )
}

export default Home
