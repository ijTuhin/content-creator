import './App.css';
import DndFiles from './Components/DndFiles';
import AddComment from './Components/AddComment';

function App() {
  return (
    <div className='flex flex-col items-center '>
      <AddComment></AddComment>
      <DndFiles></DndFiles>
    </div>
  );
}

export default App;
