import logo from './logo.svg';
import './App.css';
import Todo from './todo-example/todo';
import TodoForm from './todo-example/todo-form';

function App() {
  return (
    <div className="App">
      <h1>Kaushik</h1>
      <TodoForm/>
      <Todo/>
    </div>
  );
}

export default App;
