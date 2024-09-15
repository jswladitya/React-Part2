import { createContext, useContext } from "react"

export const TodoContext = createContext({
    todos: [
        //apna har ek todo ek object hoga aur saare ek ke baad ek add hote jayenge
        {
            id: 1,
            todo: " Todo Message ",
            completed: false,
        }
        //uper hamne likhdi properties jaise hamne DarkMode wale me likha tha ab hame likhenge functionalities , But unke define karenge bas
    ],
    addTodo: (todo) => { },
    //jaise hi msg pass hoga ye kuch kaam karega jo ham decide karenge App.jsx me

    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
})


//useTodo ek custom hook he jiske pass todoContext ke ander rakhe hue variables ka access hoga
export const useTodo = () => {
    return useContext(TodoContext)
}

//making of provider
export const TodoProvider = TodoContext.Provider