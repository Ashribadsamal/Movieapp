import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import SimpleBottomNavigation from './Component/Nav/Navigation';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Container } from '@material-ui/core';
import Trending from './Component/Pages/Trending';
import Movie from './Component/Pages/Movie';
import Series from './Component/Pages/Series';
import Search from './Component/Pages/Search';
import NotFound from './Component/Pages/NotFound';



function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <div className="App">
      <Container>
        <Switch>
          <Route path="/" exact component={Trending}/>
          <Route path="/movie" component={Movie}/>
          <Route path="/series" component={Series}/>
          <Route path="/search" component={Search}/>
          <Route  component={NotFound}/>
        </Switch>
      </Container>      
    </div>
    <SimpleBottomNavigation/>
    </BrowserRouter>
    </>
  );
}

export default App;
