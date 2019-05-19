import React,{Component} from "react";
import {connect} from 'react-redux';
import '../CSS/Search.css'
import {bindActionCreators} from 'redux';
import {searchAction} from '../../Redux/Actions/searchAction'
const mapDispatchToProps=(dispatch)=>{
    return(
        {
            action: bindActionCreators({searchAction},dispatch)
        }
    )
}

class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            search_text:''
        }
    }
    onSearchTextChange=(event)=>{
        this.setState({search_text:event.target.value})
    }
    onEnterPress=(event)=>{
        if(event.charCode===13 && this.state.search_text!==""){
            this.props.action.searchAction({search_text:this.state.search_text})
        }
        else if(event.charCode===13){
            alert('Please enter any value in the input box') 
        }
    }
    searchAction=()=>{
        if(this.state.search_text!=="")
            this.props.action.searchAction({search_text:this.state.search_text})
        else   
            alert('Please enter any value in the input box') 
    }
    render(){
        return(
            <div className="container">
                <div className="searchbox row justify-content-center">
                    <input className="search-input col-10" type="text" onKeyPress={this.onEnterPress} onChange={this.onSearchTextChange} value={this.state.search_text} placeholder="Search tweets here .."/>
                    <div className="search-image-container" onClick={this.searchAction}>
                        <img className="search-button" src="assets/search.png" alt="search-button"/>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(null,mapDispatchToProps)(Search)