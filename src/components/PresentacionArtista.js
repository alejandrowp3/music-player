import React, {Component} from 'react';

export default class PresentacionArtista extends Component {

    render(){
        const {  name, popularity, image,albumName  } = this.props
        return(
            <div className="presentacionArtista Centered">
                <img
                className="rounded-circle ImgArtista"
                src = {image}
                alt = {name}
                />
                <div>
                    <h4>{name} <span className="spanPopularity" role="img" aria-label="star">⭐{popularity}</span></h4>
                    <h5>{albumName}</h5>
                </div>
            </div>
        )
    }
}