import { useState } from 'react'
import './App.css'
import ShowUserName from './components/ShowUserName'
import Time from './components/Time'
import Singers from './components/Singers'

function App() {
  const titulo = true;
  const nj = 10;
  const nome = 'Cris';
  const [name] = useState("Ney");
  const [cantores] = useState([
    {id:1, nome:"Taylor Swift", estiloMusical:"Pop", premiado:true},
    {id:2, nome:"Michael Jackson", estiloMusical:"R&B", premiado:true},
    {id:3, nome:"Matuê", estiloMusical:"Trap", premiado:false},
  ])
  return (
    <>
    {/* ShowUserName */}
      <ShowUserName name={nome} shirt="7" />
      <hr />
    {/* Time */}
      <Time nome="São Paulo" estado="SP" posicao={1} campeao={true}/>
      <Time nome="Real Madrid" estado="MD" posicao={2} campeao={true}/>
      <Time nome="Vasco Da Gama" estado="RJ" posicao={100}campeao={false}/>
      <hr />
    {/* Singers */}
      {
        cantores.map((cantor) => (
         <Singers 
         key={cantor.id} 
         nome={cantor.nome} 
         estiloMusical={cantor.estiloMusical} 
         premiado={cantor.premiado}/> 
        ))
      }
      <hr />
      <h2 style={ nj > 5 
      ? {color:"green", backgroundColor:"yellow", fontSize:"30px"} 
      : {color:"red", backgroundColor:"blue", fontSize:"30px"}
      }>
        ESTE CSS É DINâMICO
      </h2>
      <h2 style={ nj < 5 
      ? {color:"green", backgroundColor:"yellow", fontSize:"30px"} 
      : {color:"red", backgroundColor:"blue", fontSize:"30px"}
      }>
        ESTE CSS TAMBEM É DINâMICO
      </h2>

      <h1
      className={titulo ? "titulo-incrivel" : "texto-paia"}
      >Titulo incrivel pra teste</h1>
    </>
  );
}

export default App
