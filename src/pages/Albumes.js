import React, {Component} from 'react';
import Header from '../components/Header';
import PresentacionArtista from '../components/PresentacionArtista';
import ListaAlbumes from '../components/ListaAlbumes';

export default class Almbumes extends Component {
    //state = { artista: {} }
    
    render(){
        console.log(this.props.location.id)
        return(
            <div>
            <Header currentPage="Lista de albumes"/>
            <PresentacionArtista
                image = {this.props.location.image}
                popularity = {this.props.location.popularity}
                name = {this.props.location.name}
            />
            <ListaAlbumes 
                id={this.props.location.id}
                imageArtist = {this.props.location.image}
                popularityArtist = {this.props.location.popularity}
                nameArtist = {this.props.location.name}
            />
            </div>
        )
    }
}