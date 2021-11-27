import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import './index.css'
// A custom theme for this app
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#BBBBBB',
    },
    secondary: {
      main: '#FFFFFF',
    },
    error: {
      main: red.A400,
    },
  },
});
theme.typography.h1 = {
  fontSize: "35px",
  fontFamily:"GeneralSans-Semibold",
  lineheight:"47px",
  [theme.breakpoints.down('md')]: {
    fontSize: '28px',
    
  },

};
theme.typography.h2 = {
  fontSize: "30px",
  fontFamily:"GeneralSans-Regular",
  lineheight:"41px",
  [theme.breakpoints.down('md')]: {
    fontSize: '20px',
    
  },
};
theme.typography.h3 = {
  fontSize: "28px",
  fontFamily:"GeneralSans-Bold",
  lineheight:"38px",
  [theme.breakpoints.down('md')]: {
    fontSize: '20px',
    
  },
 
};
theme.typography.h4 = {
  fontSize: "20px",
  fontFamily:"GeneralSans-Regular",
  lineheight:"27px",
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
  },
 
};
theme.typography.h5 = {
  fontSize: "18px",
  fontFamily:"GeneralSans-Light",
  lineheight:"24px",
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
  },
 
};
theme.typography.h6 = {
  fontSize: "15px",
  fontFamily:"GeneralSans-Light",
  lineheight:"24px",
  [theme.breakpoints.down('sm')]: {
    fontSize: '10px',
  },
 
};

export default theme;
