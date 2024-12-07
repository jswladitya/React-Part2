// we have to install two libraries redux-toolkit & react-redux

import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'


function App() {
  return (
   <>
  {/* since we have wrapped App with Provider of react-redux & gave the access of store, so both components have access to store */}
   <AddTodo/>
   <Todos/>
   </>
  )
}

export default App
