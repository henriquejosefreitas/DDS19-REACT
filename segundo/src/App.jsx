import { useState } from 'react'
import './App.css'
import ShowUserName from './components/ShowUserName'
import Time from './components/Time'
import Spotify from './components/Spotify'

function App() {
  const nome = 'Cris'
  const [name] = useState("Ney")
  return (
    <>
      <ShowUserName name={nome} shirt="7" />
      <hr />
      <Time nome="São Paulo" estado="SP" posicao={1} campeao={true}/>
      <Time nome="Real Madrid" estado="MD" posicao={2} campeao={true}/>
      <Time nome="Vasco Da Gama" estado="RJ" posicao={100}campeao={false}/>
      <hr />
      <Spotify id={1} nome="Beyoncé" estiloMusical="Hip-Hop" premiado={true}/>
      <Spotify id={2} nome="Katy Perry" estiloMusical="Rock" premiado={false}/>
      <Spotify id={3} nome="Kendrick Lamar" estiloMusical="Rap" premiado={true}/>
      <Spotify id={4} nome="Post Malone" estiloMusical="Country" premiado={false}/>
    </>
  )
}

export default App
