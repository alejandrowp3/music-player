import React, {Component} from 'react';

export default class PresentacionCancion extends Component {

    render(){
        console.log("props reproduciendo",this.props)
        const {  numeroCanciones, imageAlbum, cancionName,albumName  } = this.props

        return(
            <div className="container-fluid presentacionArtista">
                <div className="container ">
                    <div className ="row">
                        <div >
                            <img
                            className=" ImgArtista"
                            src = {imageAlbum}
                            alt = {albumName}
                            />
                        </div>
                        <div >
                            <h2>{cancionName}</h2>
                            <small>Álbum • {albumName}</small><br/>
                            <small>{numeroCanciones} • canciones</small>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}