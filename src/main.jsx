import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import theme from "./theme.js";
import App from './App.jsx';
import "remixicon/fonts/remixicon.css";

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </ThemeProvider>
)
