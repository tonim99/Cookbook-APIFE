import { findAllByDisplayValue } from '@testing-library/react';
import React from 'react';
import { Route, Link, Switch } from "react-router-dom"
import './App.css';
import Display from "./Display"
function App() {
  const url ="http://localhost:4000/api"

  const [authors, setAuthors] = React.useState([])

  React.useEffect(() => {
    const getAuthors = () => {
      fetch(url + "/authors/")
        .then((response) => response.json())
        .then((data) => { setAuthors(data) })
     }
    getAuthors()
   }, []
 )
    
  return (
    <div className="App">
      <Switch>
        <Route 
          exact
          path='/'
          render={(rp) => (
            <Display 
              {...rp}
              authors={authors}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App
