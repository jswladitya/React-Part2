//step 1: sabse pehle we need to make a store so
import {configureStore} from '@reduxjs/toolkit'

//jo reducer banaya he store ko bhi unka knowledge dedo
import todoReducer from '../Features/ToDo/todoSlice';


export const store = configureStore({
    reducer: todoReducer
})
//most of the cheeze yaha object hi lete he
//reducers me functions hote he aur wahi store me modifications kar sakte he
// useSelector jab store ki value access karni he
//useDispatch jab store me value bhejni he ya add karni he