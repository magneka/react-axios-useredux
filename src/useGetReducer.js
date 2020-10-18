import React, { useReducer } from 'react';
import axios from "axios";


const useGetReducer = (() => {

  const LOADING = "LOADING"
  const DATA = 'DATA'
  const ERROR = 'ERROR'

  const dataReducer = (state, action) => {
    
    console.log(JSON.stringify(action))
    
    switch (action.type) {
      case LOADING:
        return {
          // we want to keep a copy of the existing state
          ...state,
          loading: true,
          error: null
        };
      case DATA:
        return {
          loading: false,
          data: {},
          error: action.error
        };
      case ERROR:
        return {
          ...state,
          loading: false,          
          error: action.error
        };
      
      default:
        return state;
    }
  }

  const initialState = {
    data: {},
    loading: false,
    error: false
  }  

  const [state, dispatch] = useReducer(dataReducer, initialState)

  const getData = (props) => {      
    axios.get(
      `https://api.github.com/search/repositories?q=stars:>1+language:javascript&sort=stars&order=desc&type=Repositories`
    )
    .then(result => {
      console.log(result);
      dispatch({ type: DATA, contributors: result.data });
    })
    .catch(error => {
      console.error("error: ", error);
      dispatch({ type: ERROR, error: error });        
    });
  } 

  return [getData, state]
})

export default useGetReducer
