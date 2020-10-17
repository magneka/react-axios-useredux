import React, { useEffect } from "react";
import "./style.css";
import useGet from './useGet'

export default function App() {

  const [getData, state] = useGet()

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
    </div>
  );
}
