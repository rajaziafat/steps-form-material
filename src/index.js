import * as React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';
import './index.css'
import { StyledEngineProvider } from '@mui/material/styles';

ReactDOM.render(
  <>
  <StyledEngineProvider injectFirst>
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
  </ThemeProvider>
  </StyledEngineProvider>
  </>,
  
  document.querySelector('#root'),
);
