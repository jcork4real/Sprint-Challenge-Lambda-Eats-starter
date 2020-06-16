import React from "react";
import {Button, Navbar, Card,CardImg } from 'reactstrap';
import{Link, Route} from 'react-router-dom';
import OrderForm from './Form';



const App = () => {
  return (
    <>
      <Navbar style={{backgroundColor: 'black'}}>
      <h1 style={{color:"white"}}>LAMBDA EATS</h1>
      <Link to="/">
      <Button style={{backgroundColor: 'black'}}>Home</Button>
      </Link>
      </Navbar>
      <Route exact path="/">

      <Card>
        <CardImg src={require('./Assets/Pizza.jpg')} />
        <Link to ="/pizza">
        <Button color='secondary' style={{position:'absolute', left:'50%', top:'50%'}}>Order your Pizza here!</Button>
        </Link>
      </Card>
      </Route>
      <Route path="/pizza">
        <OrderForm/>
        </Route> 

          </>
  );
};
export default App;