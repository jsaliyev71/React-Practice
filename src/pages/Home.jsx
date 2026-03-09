import React, { useContext } from "react"
import { Context } from "../context/ContextProvider"
import '../assets/css/Home.css'

function Home() {
  const {jala} = useContext(Context);
  return (
    <div id="home">Home {jala}
      Nothing on Home, About, Contact, and no effort on design.
    </div>
  )
}

export default Home