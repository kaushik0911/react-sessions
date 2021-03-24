import ClassComponentExample from "./class-component-example/class-component-example";
import FunctionalComponentExample from "./functional-component-example/functional-component-example"

function App() {
  return (
    <div>
      <FunctionalComponentExample name='kaushik'/>
      <ClassComponentExample name='shamantha'/>
    </div>
  );
}

export default App;
