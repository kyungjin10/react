import './App.css'
import Header from './conponents/Header'
import Editor from './conponents/Editor'
import List from './conponents/List'
import TodoItem from './conponents/TodoItem'

function App() {
  return (
    <div className='App'>
      <Header />
      <Editor />
      <List />
      <TodoItem />
    </div>
  )
}

export default App
