import React, {Component} from 'react'

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {term: ''};
    }

    render() {
        return (
            <div className="search-bar">
                <a className="github-repo" href ="">git hub repo</a>
               <input value={this.state.term} onChange={e => this.onInputChange(e.target.value)} />

                </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;

