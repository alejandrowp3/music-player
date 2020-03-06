import React, { Component } from 'react';


export default class Header extends Component {
    render(){
        return (
        <header className="App-header ">
            <span className="App-Name">Music player</span>
            <span className="App-currentPage">{this.props.currentPage}</span>
        </header>
        );
    }
  };

  Header.defaultProps = {
    currentPage: "Busca tu música",
  }