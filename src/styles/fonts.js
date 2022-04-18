import VazirWoff2 from '../assets/fonts/Vazir.woff2';
import VazirMediumWoff2 from '../assets/fonts/Vazir-Medium.woff2';
import VazirBoldWoff2 from '../assets/fonts/Vazir-Bold.woff2';
import VazirWoff from '../assets/fonts/Vazir.woff';
import VazirMediumWoff from '../assets/fonts/Vazir-Medium.woff';
import VazirBoldWoff from '../assets/fonts/Vazir-Bold.woff';
import VazirTtf from '../assets/fonts/Vazir.ttf';
import VazirMediumTtf from '../assets/fonts/Vazir-Medium.ttf';
import VazirBoldTtf from '../assets/fonts/Vazir-Bold.ttf';



export const vazir = {
    fontFamily: 'Vazir',
    fontStyle: 'normal',
    fontWeight: 400,
    src: `
    local('Vazir'),
    url(${VazirWoff2}) format('woff2'),
    url(${VazirWoff}) format('woff'),
    url(${VazirTtf}) format('truetype')
  `,
};
export const vazirMedium = {
    fontFamily: 'VazirMedium',
    fontStyle: 'normal',
    fontWeight: 500,
    src: `
    local('Vazir-Medium'),
    url(${VazirMediumWoff2}) format('woff2'),
    url(${VazirMediumWoff}) format('woff'),
    url(${VazirMediumTtf}) format('truetype')
  `,
};

export const vazirBold = {
    fontFamily: 'VazirBold',
    fontStyle: 'normal',
    fontWeight: 700,
    src: `
    local('Vazir-Bold'),
    url(${VazirBoldWoff2}) format('woff2'),
    url(${VazirBoldWoff}) format('woff'),
    url(${VazirBoldTtf}) format('truetype')
  `,
};
