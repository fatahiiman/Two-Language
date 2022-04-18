import styled from '@emotion/styled'



export const Container = styled.div`
width: 80%;  
height: 80%;  
margin: auto;
`

export const BackgroundImage = styled.div`
height:100vh;
background-image:  url(${props => props.img}); 
background-size:cover;
background-position: center;
background-repeat:no-repeat;
`

export const StyledNavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 16px;
    padding:16px;
    p{
        display:inline;
        margin:8px;
        color:#fff;
    }
  
`
export const IconNavStyled = styled.div`

    margin: 0px 16px;
    padding:16px;
    display:inline;
    p{
        display:inline;
        margin:0px;
        color:#fff;
    }
`
export const MainSectionStyled = styled.div`
    position: absolute;
    top: 30%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -30%) }; 
`
export const FlexColumn = styled.div`
maxWidth: 780px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    h1{
        color:#fff;
        margin-button: 3rem;
        text-align:center;

    }
    h3{
        color:#fff;
        margin-button:2rem;
        text-align:center;

    }
`
export const ButtonStyled = styled.button`

    maxWidth: 64px;
    maxHeight: 1rem;
    padding: 1rem;
    color: #fff;
    background-color: #000;
    border-radius: 8px;
    border-width: 4px;
    border-color: #fff;
`


