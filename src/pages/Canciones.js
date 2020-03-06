import React, {Component} from 'react';
import Header from '../components/Header';
import PresentacionArtista from '../components/PresentacionArtista';
import ListaCanciones from '../components/ListaCanciones';

export default class Canciones extends Component {
    

    render(){
        console.log("imagen artista",this.props.location)
        return(
            <div>
                <Header currentPage="Lista de canciones"/>
                <PresentacionArtista
                    image = {this.props.location.imageArtista}
                    popularity = {this.props.location.popularityArtista}
                    name = {this.props.location.nameArtista}
                    albumName ={this.props.location.albumName}
                />
                <ListaCanciones
                    albumId={this.props.location.albumId}
                    albumName ={this.props.location.albumName}
                    imageAlbum ={this.props.location.imageAlbum}
                />
            </div>
        )
    }
}