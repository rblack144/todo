import {useState} from "react";
import ToDoListWithToolbar from "./components/todo/ToDoListWithToolbar";
import { TodosDataProvider} from "./contexts/ToDosDataContext";
import ToDoManager from "./components/todo/ToDoManager";
import Layout from "./components/layout/Layout";

import './App.css';

const App = () => {
  const [displayStatus, setDisplayStatus] = useState("all");
  const [important, setImportant] = useState(false);
  const [searchText, setSearchText] = useState("");

  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };
  return(
    <TodosDataProvider>
      <Layout toggleTheme={toggleTheme} darkTheme={darkTheme}>
        <ToDoListWithToolbar
          displayStatus={displayStatus} setDisplayStatus={setDisplayStatus} important={important}
          setImportant={setImportant} searchText={searchText} setSearchText={setSearchText}>
            <ToDoManager
              displayStatus={displayStatus} important={important} searchText={searchText}
              darkTheme={darkTheme} />
          </ToDoListWithToolbar>
      </Layout>
    </TodosDataProvider>
  );
};

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

export default App;
