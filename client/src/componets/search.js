import React, {Component} from 'react';
import SearchBar from './Searchbar';
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
    handleSubmit = () => {

    }

    render(){
        return(
            <SearchBar handleOnChange={this.handleOnChange} search={this.state.search} submit={this.handleSubmit}/>
        )
    }
}
export default Search;