import React, { useState } from 'react';
import axios from "axios";



const useGet = (() => {

    const initialState = {
      data: {},
      loading: false,
      error: false
    }  

    const [state, setState] = useState(initialState)

    const getData = (props) => {      
      axios.get(
        `https://api.github.com/search/repositories?q=stars:>1+language:javascript&sort=stars&order=desc&type=Repositories`
      )
      .then(result => {
        console.log(result);
        setState({
          data: result.data.items,
          loading: false,
          error: false
        });
      })
      .catch(error => {
        console.error("error: ", error);
        setState({
          // objects cannot be used as a react child
          // -> <p>{error}</p> would throw otherwise
          error: `${error}`,
          loading: false
        });
      });
    } 
  
    return [getData, state]
})

export default useGet
