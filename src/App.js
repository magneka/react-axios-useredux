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

  if (state.loading) {
    return (<p>henter data</p>)
  }

  console.log ('state.data', state.data)  

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      
      {state.data.map((value, index) => {
        return <li key={index}>{value.html_url}</li>
      })}
    

    </div>
  )
}
