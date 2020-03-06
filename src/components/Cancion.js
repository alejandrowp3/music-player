import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Cancion extends Component {

    // funcion tomada de https://stackoverflow.com/questions/21294302/converting-milliseconds-to-minutes-and-seconds-with-javascript
     millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
      }
      
    render(){
        console.log("props cancion",this.props)
        const {cancionName, albumName, index,imageAlbum,duration_ms,albumId,numeroCanciones  } = this.props
        const newTo = {
            pathname: `/reproduciendo/`,
            albumName: albumName,
            albumId:albumId,
            cancionName:cancionName,
            imageAlbum :imageAlbum,
            duration_msCancion:duration_ms,
            numeroCanciones:numeroCanciones
        }
        return(
            <Link
            to = {newTo}
            className="Link">
                <div className="row highlited">
                    <div className="col-1 Centered">
                        <img 
                        className="rounded-circle ImgAlbumCanciones "
                        src = {imageAlbum} 
                        alt={albumName}/>
                    </div>
                    <div className="col-10 paddingDivs">
                        {index+1}. {cancionName} - {albumName}
                    </div>
                    <div className="col-1 paddingDivs">
                        {this.millisToMinutesAndSeconds(duration_ms)}
                    </div>
                </div>
            </Link>
        )
    }
}