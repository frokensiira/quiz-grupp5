import React from 'react';
import { db } from './modules/firebase';
import AddQuiz from './modules/AddQuiz';


class App extends React.Component {
  render() {

    return (
      <div className="App">
        
        <AddQuiz />
      </div>
    );

  }

}

export default App;
