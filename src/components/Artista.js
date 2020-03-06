import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Artista extends Component {
    
    render(){
        
        const { id, name, popularity, image  } = this.props
        const newTo = {
            pathname: `/albumes/`,
            image: image,
            name: name,
            popularity:popularity,
            id:id
        }
        return(
        <Link 
        className="Link"
        to={newTo}>
            <div >
                <img 
                className ="rounded-circle ImgArtista opacityImg"
                src= {image} 
                alt ={name}/>
                <div className="centeredTextImgArtista">
                    <p>{name}</p>
                </div>
            </div>
        </Link>
        )
    }
}