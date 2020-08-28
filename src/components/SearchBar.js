import React from 'react'
class SearchBar extends React.Component{
    state = {
        term:''
    }

    onSubmitHandler = (e) =>{
        e.preventDefault()
        this.props.onSubmit(this.state.term)
    }


    onChangeHandler = (e) =>{
        this.setState({term:e.target.value})
    }

    render(){
        return(
            <div className="ui segment searchbar">
            <form onSubmit={this.onSubmitHandler} className = "ui form search-input">
            <div className="ui inverted left icon input massive">
            <input  onChange = {this.onChangeHandler}
                    value={this.state.term} 
                    type="text"
                    placeholder='Video search ....'
                    />
            <i className = "search icon"></i>
            </div>

            </form>

            </div>
            
        )
    }
}
export default SearchBar