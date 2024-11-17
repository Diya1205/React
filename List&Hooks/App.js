import Task1 from "./hooks1/Task1";
import Task2 from "./hooks1/Task2";
import Task3 from "./hooks1/Task3";
import Task4 from "./hooks1/Task4";
import FruitList from "./List/FruitList";
import UserList from "./List/UserList";


function App() {
  return (
    <div className="App">
      <FruitList/>
      <UserList/>

      <Task1/>
      <Task2/>
      <Task3/>
      <Task4/>
      
    </div>
  );
}

export default App;