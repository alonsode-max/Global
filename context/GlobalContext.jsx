import { createContext, useReducer } from "react";

export const GlobalContext = createContext()
const initialState = {
    users: [],
    services:[],
    authToken: null
}
//useReducer
function globalReducer(state, action) {
    //action = {type:"addUser",Payload:{}}

    switch(action.type){
        case "ADD_USER":
            return{
                ...state,
                users: [...state.users, action.payload]
            }
        case "ADD_SERVICE":
            return{
                ...state,
                services: [...state.services, action.payload]
            }
    }
}

export const GlobalProvider =({children})=>{

    const [state, dispatch] = useReducer(globalReducer,initialState)

    const addNewUser = (user) =>{
        dispatch({type:"ADD_USER", payload: user})
    }

    const addNewService = (service)=>{
        dispatch({type:"ADD_SERVICE", payload: service})
    }

    return <GlobalContext.Provider value={{state, addNewUser, addNewService}}>
        {children}
    </GlobalContext.Provider>
}