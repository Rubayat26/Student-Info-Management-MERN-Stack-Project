
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Student from "./components/showStudent/showStudent.js";
import CreateStudent from "./components/createStudent/createStudent.js";
import useStyles from "./styles.js";
import './App.css';

function App() {
  const classes = useStyles();
  return (
    <div className="App">
     <Container maxWidth="lg">
       <AppBar className={classes.appBar} position='static' color='inherit'>
         <Typography className={classes.appBar} variant='h2' align='center'> Student Information Management System</Typography> 
       </AppBar>

       <Grow in>
         <Container>
           <Grid container justifyContent='space-between' > 
             <Grid item xs={12} sm={7}>           {/*First grid is used to create a table */}
              <AppBar className={classes.appBar} position='static' color='inherit' >
               <Student />
              </AppBar>   
             
             </Grid>

             <Grid item xs={12} sm={4}>         {/* Second grid is used to create a form  */}
             <AppBar className={classes.appBar} position='static' color='inherit' >
               <CreateStudent />
             </AppBar>
             </Grid>

           </Grid>
         </Container>

       </Grow>

     </Container>
    </div>
  );
}

export default App;
