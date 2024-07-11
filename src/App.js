import React, {useState, useEffect} from "react"
import './App.css';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';


function App() {

  useEffect(() => {
    document.title = 'To-Do List'; 
  }, []);


  const [todos, setTodos] = useState([])

  const onAddTask = (value) => {
    setTodos([
      ...todos,
      {
        id: new Date().getTime(),
        name: value,
        checked: false
      }
    ])
  }

  const onToggle = (todo) => {
    setTodos(
      todos.map((obj) => obj.id === todo.id ? {...obj, checked: !todo.checked } : obj)
    )
  }

  const onRemove = (todo) => {
    let notRemove = []
    for(var i = 0; i < todos.length; i++) {
      if(todo.id !== todos[i].id){
        notRemove.push(todos[i])
      }
    }
    setTodos(notRemove)
  }

  return (
    <section id="app" className='container'>
      <header>
        <h1 className='title'>Lista de Tarefas</h1>
      </header>
      <div className='main'>
        <TodoItem onAddTask={onAddTask} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </div>
    </section>
  );
}

export default App;
