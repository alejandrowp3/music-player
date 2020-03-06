import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Album extends Component {
    render(){

        console.log("props",this.props)
        const { id, name, total_tracks, image,imageArtista,popularityArtista,nameArtista  } = this.props
        const newTo = {
            pathname: `/canciones/`,
            albumName: name,
            albumId:id,
            imageArtista:imageArtista,
            imageAlbum :image,
            popularityArtista:popularityArtista,
            nameArtista:nameArtista
        }
        return(
            <Link
            to = {newTo}
            className="Link">
            <div className="row highlited">
                <div className="col-1">
                    <img 
                    className="rounded-circle ImgAlbum centeredTextImgArtista"
                    src = {image} 
                    alt={name}/>
                </div>
                <div className="col-10 paddingDivs ">
                    {name}<br/>
                    <small>Canciones: {total_tracks}</small>
                    <hr  style={{
                        color: 'white',
                        backgroundColor: 'white',
                        borderColor : 'white'
                    }}/>
                </div>
                <div className="col-1">
                   <span className="centeredTextImgArtista">▶</span>
                </div>
                <hr  style={{
                    color: 'white',
                    backgroundColor: 'white',
                    height: .5,
                    borderColor : 'white'
                }}/>

            </div>
            </Link>
        )
    }
}