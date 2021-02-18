import {Provider} from "react-redux";
import React from 'react';
import {store} from "./state"

import RepositoriesList from "./components/RepositoriesList";

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <h1> Search for a repository list</h1>
        <RepositoriesList />
      </div>

    </Provider>
  );
}

export default App;
