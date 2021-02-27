
import './App.css';
import { useEffect, useState } from 'react';
import {Container,makeStyles,Grid} from '@material-ui/core';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';
const useStyles= makeStyles((theme)=>({
  root:{
    backgroundColor:theme.palette.grey[300],
    paddingTop:theme.spacing(5)
  }

}))
function App() {
  const [contries,setCountries]=useState([]);
  const [cart,setCart]=useState([]);
  const classes=useStyles();
  
  const loadCountries=async()=>{
    try {
      const result =await fetch('https://restcountries.eu/rest/v2/all');
      const data= await result.json();
      console.log(data);
      setCountries(data)
      
    } catch (error) {
      console.log(error);
    }
  }

 useEffect(()=>{
  loadCountries();
 },[]);

 const handleCountry=(country)=>{     
     const newCart=[...cart,country];
     setCart(newCart);
 }

  return (

    <Container className={classes.root}>
      <h1>Country Loaded : {contries.length}</h1>
      <h2>Count Country : {cart.length}</h2>
      <Cart cart ={cart} key={cart.name}/>
        <Grid container spacing={4}>
            
                {
                  
                  contries.map((country)=>{
                    return(
                   <Grid item sm={3}>   
                      <Country country={country}  key={country.alpha3Code} handleCountry={handleCountry}/>
                  </Grid>
                  )
                })
                 
                }
        
      </Grid>
    </Container>
  );
}

export default App;
