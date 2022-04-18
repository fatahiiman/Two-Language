import { ButtonStyled, FlexColumn, MainSectionStyled } from "../commons/homePageStyled";


const MainSection = ({ title, subtitle, button }) => {
    return (
        <MainSectionStyled>
            <FlexColumn>
                <h1>  {title}  </h1>
                <h3 style={{ maxWidth: '780px' }}>{subtitle}</h3>
                <ButtonStyled variant="contained" color="secondary">{button}</ButtonStyled>
            </FlexColumn>
        </MainSectionStyled>
    );
}

export default MainSection;