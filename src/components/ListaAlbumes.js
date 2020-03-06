import React, {Component} from 'react';
import Album from './Album';

export default class ListaAlbumes extends Component {
    state = {albumes:[]}

    constructor (props){
        super(props)
        fetch(`https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com/dev/api/artists/1/albums/?artist=${this.props.id}`)
        .then(res => res.json())
        .then(albumes => {
            console.log({albumes});
            let albums =[]
            if(albumes.length>0){
                console.log(albumes[0].albums)
                albums = albumes[0].albums
                this.setState({albumes:albums} ) 
            }
            //this.setState({albumes} )         
        })
    }

    render(){
        console.log("props lista imagenes",this.props)
        return(
            <div className="container paddingDivs">
                <h6>Álbumes</h6>
                {
              this.state.albumes.map(album => {
                return (
                  <div  key = {`album${album.id}`} >
                   <Album
                        id={album.id}
                        name={album.name}
                        total_tracks={album.total_tracks}
                        image={album.image}
                        imageArtista = {this.props.imageArtist}
                        popularityArtista = {this.props.popularityArtist}
                        nameArtista = {this.props.nameArtist}
                    />
                  </div>
                )
              })
            }
            </div>
        )
    }
}