import {useDeferredValue, useState} from "react";
import ToDoListWithToolbar from "./components/todo/ToDoListWithToolbar";
import { TodosDataProvider} from "./contexts/ToDosDataContext";
import ToDoManager from "./components/todo/ToDoManager";
import Layout from "./components/layout/Layout";
import './App.css';

const App = () => {
  const [displayStatus, setDisplayStatus] = useState("all");
  const [important, setImportant] = useState(false);
  const [searchText, setSearchText] = useState("");
  const searchTextDeffered = useDeferredValue(searchText);

  return(
    <TodosDataProvider>
        <Layout>
          <ToDoListWithToolbar
            displayStatus={displayStatus} 
            setDisplayStatus={setDisplayStatus} 
            important={important}
            setImportant={setImportant} 
            searchText={searchText} 
            setSearchText={setSearchText}>
              <ToDoManager
                displayStatus={displayStatus} 
                important={important} 
                searchText={searchTextDeffered}
              />
          </ToDoListWithToolbar>
        </Layout>
    </TodosDataProvider>
  );
};

export default App;
