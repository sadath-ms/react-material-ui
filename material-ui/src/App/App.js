import SideMenu from '../Components/SideMenu';
import './App.css';
import {CssBaseline, makeStyles} from '@material-ui/core';
import Headers from '../Components/Header';
import Employee from '../pages/Employees/Employee';


const useStyles = makeStyles(
  {
    appMain:{
      paddingLeft: '320px',
      width: '100%'
    }
  }
)

function App() {
  const classes = useStyles();
  return (
    <>
    <SideMenu/>
    <div className={classes.appMain}>
      <Headers/>
      <Employee/>
    </div>
    <CssBaseline/> 
    </>
);
}

export default App;
