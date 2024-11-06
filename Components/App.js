import Greeting from "./Components/Greeting";
import WelcomeMessage from "./Components/WelcomeMessage";
import Counter from "./Props & State/Counter";
import UserCard from "./Props & State/UserCard";

function App() {
  return (
    <div className="App">
     <Greeting />
     <WelcomeMessage/>
     <UserCard/>
     <Counter/>
    </div>
  );
}

export default App;
