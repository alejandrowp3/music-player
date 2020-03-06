import React, { Component } from 'react'
import Artista from './Artista';

export default class ListaArtistas extends Component {
    state = {artistas:[]}

    constructor (props){
        super(props)
        fetch(`https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com/dev/api/artists`)
        .then(res => res.json())
        .then(artistas => {
            console.log({artistas})
            this.setState({artistas} )         
        })
    }
    

    render () {
        console.log("renderlista",this.state.artistas)
        return (
          <div className='ListaArtistas'>
            {
              this.state.artistas.map(artista => {
                return (
                  <div className="containerImgArtista" key={artista.id} >
                    <Artista
                      id={artista.id}
                      name={artista.name}
                      popularity={artista.popularity}
                      image={artista.image}
                    />
                  </div>
                )
              })
            }
          </div>
        )
      }
}