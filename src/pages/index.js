
import { Button } from '@mui/material';
import { BackgroundImage, Container } from '../commons/homePageStyled';
import Pic from '../assets/images/background.jpg'
import NavBar from '../components/navBar';




const HomePage = () => {

    return (
        <BackgroundImage img={Pic}>
            <Container >
                <NavBar />
            </Container>
        </BackgroundImage >

    );
}

export default HomePage;