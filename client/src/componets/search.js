import React, {Component} from 'react';
import SearchBar from './Searchbar';
import Axios from 'axios';
class Search extends Component{
    state={
        search: "",
        result:[],

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
                console.log(result.data.items);
                this.setState({
                    result: result.data.items
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render(){
        return(
            <SearchBar handleOnChange={this.handleOnChange} search={this.state.search} submit={this.handleSubmit}/>
        )
    }
}
export default Search;