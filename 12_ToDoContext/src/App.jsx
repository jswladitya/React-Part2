import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./contexts/ToDoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem"

function App() {
  //jo todos context se ayenge unhe state me rakhenge
  const [todos, setTodos] = useState([]);

  //making of functionality
  const addTodo = (todo) => {
    //ham add karenge todo ko uper array ke ander but ye bhi ho sakta he us array me already koi todo ho , ab ager aise todo add kar rahe he to purani saari todo remove ho jayegi aur ek nayi todo add ho jayegi
    // setTodos(todo)

    //but ham chahte he ki purani todos remove na ho aur ak nayi todo bhi add ho jaye so ham use karenge call back function
    //purani array manga lo aur purane array se nayi array bana lo aur usme purani values aur nayi values dono daal do using spread
    // setTodos((prevArray) => [todo, ...prevArray])
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
    // Date.Now karke id bana li ek todo ke lie aur baki sari values spread kardi us tofo ki
  };

  //update todo : id lenge jisme update karna he , kisibhi bhi todo ki id ager match kar gayi hamare di gyi id se to naye todo ko add kardo nhi to old wale todo ko hi rehne do
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  //delete todo
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  //toggle complete
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map(
        (prevTodo) =>
          prevTodo.id === id
            ? { ...prevTodo, completed: !prevTodo.completed }
            : prevTodo
        // prevTodo likhne se us todo ki saari values aa gayi & isme se sirf ek value change kardo
        // means -> us todo ka jo completed he use hi bas over ride kardo ie.., pehle false tha to true kardo or vice versa
      )
    );
  };
  //till here we have completed the basic functionalities of context

  useEffect(() => {
    // local storage me values get karte time json me convert karte he aur set karte time string me
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    // update hoke todos state me ja rahi he JSON me toh use convert kia string me
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  
  return (
    <TodoProvider
      value={{ todos, addTodo, toggleComplete, deleteTodo, updateTodo }}
    >
      <div className="bg-[rgb(0,4,8)] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          {/* since todo items bhot saare ho sakte he islie usko loop lagake add karenge */}
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;



//LocalStorage
//jaise hi app load hoye ho sakta he usme already kuch todos added ho & refresh karne par bhi wahi rahe, to islie inhe browser ke local storage me save karna hota he
//useEffect, function call karke local storage me jao saari values leke aao jo bhi uske ander he aur unko state wale 'todos' me update kardo
//