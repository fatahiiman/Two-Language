import React from "react";
import { useTranslation } from "react-i18next";
import i18next, { changeLanguage } from "i18next";
import LanguageIcon from '@mui/icons-material/Language';
import { IconNavStyled } from "../commons/homePageStyled";




const languageMap = {
    en: { label: "English", dir: "ltr", active: false },
    fa: { label: "فارسی", dir: "rtl", active: true }
};

const SelectLanguage = () => {
    const selected = localStorage.getItem("i18nextLng") || "en";

    React.useEffect(() => {
        document.body.dir = languageMap[selected].dir;
    }, [selected]);

    const changeLanguage = () => {
        if (selected === "en") {
            i18next.changeLanguage('fa');
        } else {
            i18next.changeLanguage('en');
        }
    }

    const { t } = useTranslation();


    return (
        <IconNavStyled onClick={changeLanguage}>
            <p>{t("language")}</p>
            <LanguageIcon color='primary' />
        </IconNavStyled>
    );
};

export default SelectLanguage;
