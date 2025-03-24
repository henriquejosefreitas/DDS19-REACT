import React from 'react'

const Spotify = ({id, nome, estiloMusical, premiado}) => {
  return (
    <div>
        <h1>O id do artista é:{id}</h1>
        <h2>Nome do Artista: {nome}</h2>
        <h2>Seu estilo musical: {estiloMusical}</h2>
        {(premiado && <h3>Foi premiado</h3>) || 
        (<h3>Não foi premiado</h3>)}

    </div>
  )
}

export default Spotify