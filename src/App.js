import { Component } from 'react';
//going to use this css
import './App.css';
//going to use this to make the id's unique
import{v4 as uuidv4 } from 'uuid'

//our todo list that holds our data, hard coded
export default class App extends Component{

  state={
    todoList:[
      {
        id: uuidv4(),
        todo: "Hang up stockings"
      },
      {
        id: uuidv4(),
        todo: "Decorate Tree",
      },
      {
        id:uuidv4(),
        todo:"Bake Cookies"
        
      },
      {
        id:"",
        todo:""
      }
  
    ]
  }
}




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
