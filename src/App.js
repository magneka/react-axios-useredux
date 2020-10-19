import React, { useEffect } from "react";
import "./style.css";
//import useGet from './useGet'
import useGetReducer from './useGetReducer'

export default function App() {

  //const [getData, state] = useGet()
  const [getData, state] = useGetReducer()

  useEffect(() => {
       getData()
  }, []);

  if (state.isLoading) {
    return (<p>henter data</p>)
  }
    

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      
      {[...state.data].map((rec, i) => {
          <div>test</div>
      })}

    </div>
  )
}
