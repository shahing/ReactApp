// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import SignInScreen from './screens/SignInScreen';


const App = () => {
  return (
    <Router>
      <Routes>
     
        <Route path="/" element={<SignInScreen />}></Route>
      
        </Routes>
     
    </Router>
  );
};

export default App;