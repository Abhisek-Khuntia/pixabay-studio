import './App.css';
import Navbar from './components/Navbar/Navbar'
import Search from './components/Search/Search'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


function App() {
  return (
    <div className="App">
    <MuiThemeProvider>
     <Navbar/>
     <Search/>
    </MuiThemeProvider>

    </div>
  );
}

export default App;
