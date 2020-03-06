import React, {Component } from 'react';
import Header from '../components/Header'
import ListaArtistas from '../components/ListaArtistas';

export default class Home extends Component {

    render(){
        return(
            <div>
            <Header currentPage="Lista de artistas"/>
            <div className ="container-fluid">
            <ListaArtistas
                //artistas = {this.state.artistas}
            />
            </div>
            </div>
        )
    }
}