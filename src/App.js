import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './styles/theme';


function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />

      </ThemeProvider>
    </div>
  );
}

export default App;
