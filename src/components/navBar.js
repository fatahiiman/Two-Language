import { Chip } from '@mui/material';
import { StyledNavBar, IconNavStyled } from "../commons/homePageStyled";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LanguageIcon from '@mui/icons-material/Language';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';

const NavBar = () => {
    return (
        <StyledNavBar>
            <div>
                <IconNavStyled>
                    <p>12345</p>
                    <LocalPhoneIcon color='primary' />
                </IconNavStyled>
                <p>"this_is_an_example"</p>
            </div>
            <div>
                <IconNavStyled>
                    <p>EN</p>
                    <LanguageIcon color='primary' />
                </IconNavStyled>
                <ShoppingBasketIcon color='primary' />
            </div>
        </StyledNavBar>
    );
}

export default NavBar;