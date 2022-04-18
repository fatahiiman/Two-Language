import { Chip } from '@mui/material';
import { StyledNavBar, IconNavStyled } from "../commons/homePageStyled";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import SelectLanguage from './selectLanguage';

const NavBar = ({ discuss }) => {
    return (
        <StyledNavBar>
            <div>
                <IconNavStyled>
                    <p>12345</p>
                    <LocalPhoneIcon color='primary' />
                </IconNavStyled>
                <p>{discuss}</p>
            </div>
            <div>


                <SelectLanguage></SelectLanguage>

                <ShoppingBasketIcon color='primary' />
            </div>
        </StyledNavBar>
    );
}

export default NavBar;