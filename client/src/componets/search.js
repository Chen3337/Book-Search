import React, { Component } from 'react';
import SearchBar from './Searchbar';
import Axios from 'axios';
import Results from './searchresult';
class Search extends Component {
    state = {
        search: "",
        result: []
    }
    handleOnChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    // :keyes&key=AIzaSyA7mmY3NZcjuqBUI79Fnscy_ps80-4h2-Y
    handleSubmit = () => {
        Axios.get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURI(this.state.search)}`)
            .then((result) => {
                var array = [];
                var books = result.data.items;
                for (var i = 0; i < books.length; i++) {
                    var book = {
                        title: books[i].volumeInfo.title,
                        authors: books[i].volumeInfo.authors ? books[i].volumeInfo.authors : books[i].volumeInfo.publisher,
                        description: books[i].volumeInfo.description,
                        image: books[i].volumeInfo.imageLinks ? books[i].volumeInfo.imageLinks.thumbnail : null,
                        link: books[i].volumeInfo.infoLink
                    }
                    array.push(book);
                }
                this.setState({
                    result: array
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    onSave = () => {

    }
    render() {
        return (
            <div>
                <SearchBar handleOnChange={this.handleOnChange} search={this.state.search} submit={this.handleSubmit} />
                <Results result={this.state.result} onSave={this.onSave} />
            </div>
        )
    }
}
export default Search;