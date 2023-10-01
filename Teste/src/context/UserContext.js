import React, { createContext, useReducer } from 'react';
import users from '../data/users';

const initialState = {users}
const UserContext = createContext({})

const actions = {
    createUser(state, action){
        const newUser = action.payload
        newUser.id = Math.random()
        return{
            ...state,
            users: [...state.users, newUser]
        }
    }
}

export const UserProvider = props => {
    function reducer(state, action){
        const fn = actions[action.type]

        return fn ? fn(state, action) : state
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <UserContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext