import React from 'react';
import Test from './Test.jsx';


class App extends React.Component {
 constructor() {
   super();
   this.state = {
     count: 0,
   };
 }

 render() {
   return (
    <div id="app-container">
      <Test />
    </div>
   );
 }
}
export default App;