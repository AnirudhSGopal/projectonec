import React from 'react';
/*import Navbar from './Components/Navbar/Navbar'
import Page1 from './Components/pages/page1/page1';*/
import FrontPage from './Components/FrontPage/FrontPage';

import{HashRouter} from "react-router-dom";

function App() {
  return (
   <div >
  <HashRouter>
   <FrontPage></FrontPage>
   </HashRouter>
   </div>
  );
}

export default App;
