
import { Button } from '@mui/material';
import { BackgroundImage, Container } from '../commons/homePageStyled';
import Pic from '../assets/images/background.jpg'
import NavBar from '../components/navBar';
import MainSection from '../components/mainSection';




const HomePage = () => {

    return (
        <BackgroundImage img={Pic}>
            <Container >
                <NavBar />
                <MainSection />
            </Container>
        </BackgroundImage >

    );
}

export default HomePage;