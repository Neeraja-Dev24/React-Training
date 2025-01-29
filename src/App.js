
import './App.css';
import CountdownTimer from './CountdownTimer/countdownTimer';
import Counter from './Counter/counter';
import Parent from './Greetings/parent';
import TemperatureControl from './TempratureController/TempratureController';
import Todo from './Todo/Todo';
function App() {
  return (
    <div className="App">
      <Counter/>
      <Todo/>
      {/* <CountdownTimer/>
      <Parent/>
      <TemperatureControl/> */}
      {/* <Controller/> */}
    </div>
  );
}

export default App;
