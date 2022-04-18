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
