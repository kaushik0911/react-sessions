import ClassComponentExample from "./class-component-example/class-component-example";
import FunctionalComponentExample from "./functional-component-example/functional-component-example"
import StateInClass from './state-example/state-in-class';
import StateInFunction from './state-example/state-in-function';


function App() {
  return (
    <div>
      <StateInClass/>
      <StateInFunction/>
      {/* <FunctionalComponentExample name='kaushik'/> */}
      {/* <ClassComponentExample name='shamantha'/> */}
    </div>
  );
}

export default App;
