//going to use this css
import { Component } from 'react';
import './App.css';

//our todo list that holds our data, hard coded
export default class App extends Component{

  state={
    todoList:[
      {
        id: 1,
        todo: "Hang up stockings"
      },
      {
        id: 2,
        todo: "Decorate Tree",
      },
      {
        id:3,
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
