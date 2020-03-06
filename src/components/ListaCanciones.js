import React, {Component} from 'react';
import Cancion from './Cancion'
export default class ListaCanciones extends Component {
    state = {canciones:[]}

    constructor (props){
        super(props)
        fetch(`https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com/dev/api/artists/1/songs/?album=${this.props.albumId}`)
        .then(res => res.json())
        .then(canciones => {
            console.log("canciones",{canciones})
            let songs =[]
            if(canciones.length>0){
                console.log(canciones[0].songs)
                songs = canciones[0].songs
                this.setState({canciones:songs} ) 
            }
            //this.setState({canciones} )         
        })
    }

    render(){
        return(
            <div className="container paddingDivs">
                <h6>Canciones</h6>
                {
              this.state.canciones.map((cancion,index) => {
                return (
                  <div  key = {`cancion${cancion.id}`} >
                   <Cancion
                        cancionId={cancion.id}
                        cancionName={cancion.name}
                        duration_ms={cancion.duration_ms}
                        albumName = {this.props.albumName}
                        imageAlbum = {this.props.imageAlbum}
                        albumId = {this.props.albumId}
                        numeroCanciones = {this.state.canciones.length}
                        index={index}

                    />
                  </div>
                )
              })
            }


            </div>
        )
    }
}
