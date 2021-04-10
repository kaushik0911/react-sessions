import logo from './logo.svg';
import './App.css';
import Todo from './todo-example/todo';
import TodoForm from './todo-example/todo-form';
import ImageList from './image-list/image-list';
import ImageForm from './image-list/image-form';

function App() {
  return (
    <div className="App">
      <h1>Kaushik</h1>
      <TodoForm/>
      <Todo/>
      <ImageForm/>
      <ImageList/>
    </div>
  );
}

export default App;
