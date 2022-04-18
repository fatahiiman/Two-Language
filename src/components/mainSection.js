import { ButtonStyled, FlexColumn, MainSectionStyled } from "../commons/homePageStyled";


const MainSection = () => {
    return (
        <MainSectionStyled>
            <FlexColumn>
                <h1>  {'title'}  </h1>
                <h3>{'subtitle'}</h3>
                <ButtonStyled variant="contained" color="secondary">{'button'}</ButtonStyled>
            </FlexColumn>
        </MainSectionStyled>
    );
}

export default MainSection;