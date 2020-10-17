import React, { useState } from "react";
import "./style.css";
import './useGet'

export default function App() {

  const [getData, state] = useGet()

  useEffect(() => {
       getData()
    }, []);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
