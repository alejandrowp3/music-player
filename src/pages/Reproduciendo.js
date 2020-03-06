import React, {Component} from 'react';
import Header from '../components/Header';
import PresentacionCancion from '../components/PresentacionCancion';
import ListaCanciones from '../components/ListaCanciones';

export default class Reproduciendo extends Component {
    render(){
        return(
            <div>
                <Header currentPage="Reproduciendo ahora"/>
                <PresentacionCancion
                    albumName={this.props.location.albumName}
                    numeroCanciones={this.props.location.numeroCanciones}
                    cancionName={this.props.location.cancionName}
                    imageAlbum ={this.props.location.imageAlbum}
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