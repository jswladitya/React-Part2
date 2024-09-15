//2nd Step is to make reducers but yaha redux-toolkit me ham Slice bana kar usme reducers introduce karte he

//yaha nanoid use kia he to generate unique id's unlike context wala jisme hamne id's ke lie Date.now() use kia tha
import { createSlice, nanoid } from "@reduxjs/toolkit";

//store byDefault kaisa dikhega , usme kuch value hoga ya empty hoga
//means , yaha todos ek state he
const initialState = {
    todos: [{ id: 1, text: "Hello World" }]
}

//slice reducer ka hi bada version he & reducer is just an functionality
export const todoSlice = createSlice({
    //ab yaha slices ke naam hote he
    name: 'todo', //name property deni hoti he
    initialState,
    reducers: {
        // iske ander ate he properties & uske ander functions & unlike context yaha function ki defination bhi likhte he

        //yaha hamesha milega 2 cheezo ka access,state & action
        //state dega initialstate ke ander ke values ka access milega jo bhi values ka current state hoga wo 
        addTodo: (state, action) => {
            //made a todo template & pushed in the state
            const todo = {
                id: nanoid(),
                text: action.payload //values yaha bhej rahe he action ke through
                // yaha payload ek object he , payload me id aa sakta he ya text aa sakte he , etc etc
            }
            state.todos.push(todo)
            // state ka access lia and push kardia hamare todo ko

        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        //todo list me jo hamaer todo ki id he ager wo nahi match kar jaye jo hamne payload se id bheji he
        //make updateTodo, updateTodo & ToggleComplete by own 
    }
})
//createSlice ek method he inme sirf object hi ate he



//exporting functionality -> jo use karenge components me
export const { addTodo, removeTodo } = todoSlice.actions

//ab hamare store ko bhi awareness chahiye sare reducers ke baare me
//kyuki store ke ander jo bhi reducer register hoti he sirf unse hi values leke update karta he
export default todoSlice.reducer


