
import Todo from "./components/Todo";

//special thing about this function is that ir returns jsx code...is a function and custom html element. This is a component and a component must return something that can be rendered in the browser
//"state" is built into react and lets us change the state of an application
function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React"/>
      <Todo text="Master React"/>
      <Todo text="Explore the full React Course"/>




    </div>
  );
}

export default App;
