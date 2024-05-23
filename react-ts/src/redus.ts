// import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
// interface stateType{
//     count:number;
// }

// const increment=createAction("increment")
// const decrememnt=createAction("decrememnt")

// const initialState:stateType={count:0} 

// const rootReducer=createReducer(initialState,(builder)=>{
//     builder.addCase(increment,(state)=>{
//         state.count++;
//     }).addCase(decrememnt,(state)=>{
//         state.count--;
//     })
// })


// export const store= configureStore({reducer:rootReducer})
import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
export interface stateType{
    count:number;
}
const initialState:stateType={count:0} 
const rootSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.count++;
        },
        decrement:(state)=>{
            state.count--;
        },
        incrementByValue:(state,action:PayloadAction<number>)=>{
            state.count+=action.payload;
        }
    }
})

export const{increment,decrement,incrementByValue}=rootSlice.actions;


export const store= configureStore({reducer:rootSlice.reducer})