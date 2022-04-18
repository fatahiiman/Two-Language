
import { Button } from '@mui/material';
import { BackgroundImage, Container } from '../commons/homePageStyled';
import Pic from '../assets/images/background.jpg'
import NavBar from '../components/navBar';
import MainSection from '../components/mainSection';
import { useTranslation } from "react-i18next";




const HomePage = () => {

    const { t } = useTranslation();


    return (
        <BackgroundImage img={Pic}>
            <Container >
                <NavBar discuss={t("discuss")} />
                <MainSection title={t("title")} subtitle={t("subtitle")} button={t("button")} />
            </Container>
        </BackgroundImage >

    );
}

export default HomePage;