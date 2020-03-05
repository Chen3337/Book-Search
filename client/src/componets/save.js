import React, { Component } from 'react';
import axios from 'axios';
import Savedbooks from './savedbooks';
class Save extends Component {
    state = {
        saveBooks: []
    }
    componentDidMount() {
        this.getSavedBooks();
    }
    getSavedBooks = () => {
        axios.get('/api/savedbook')
            .then((response) => {
                this.setState({
                    saveBooks: response.data
                })
            }).catch((err) => console.log(err));
    }
    deleteSaved = (id) => {
        axios.delete(`/api/deletebook/${id}`)
            .then((response) => {
                this.getSavedBooks();
            }).catch((err) => console.log(err));
    }
    render() {
        return (
            <div>
                <Savedbooks saveBooks={this.state.saveBooks} deleteSaved={this.deleteSaved} />
            </div>
        );
    }
}


export default Save;