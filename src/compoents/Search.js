import React from 'react';
import axios from "axios";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            products: [],
         }
    }

    getsearch = (event) => {
        console.log(event.target.value)
        this.setState({ search: event.target.value })
        if (this.state.search === ' ') {
            this.props.history.push('/')
        }
        else {
            axios.get('http://localhost:3000/productdetails/?q=' + this.state.search)
                .then(response => {
                    console.log(response.data)
                    this.setState({ products: response.data })
                }, error => {
                    console.error(error);
                })
        }
    }

  
    render() { 
        return (
            <div>
            <input type="text" className="searchtext" placeholder="Search.." name="search" onChange={this.getsearch}></input>
            <button type="submit" className="searchbutton" onClick={this.getsearch}>Search</button>
            </div>
            );
    }
}
 
export default Search;