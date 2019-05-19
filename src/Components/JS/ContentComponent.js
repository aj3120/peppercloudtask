import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loadMoreAction } from '../../Redux/Actions/loadMoreAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../CSS/Content.css";
import ImageGallery from './ImageGallery';
const mapStateToProps = state => {
    return {
        content_list: state.searchReducer.content_list,
        search_loading_flag: state.searchReducer.search_loading_flag,
        current_page: state.searchReducer.current_page,
        search_text: state.searchReducer.search_text,
        current_count: state.searchReducer.current_count,
        total_count: state.searchReducer.total_count

    };
};
const mapDispatchToProps = dispatch => {
    return {
        action: bindActionCreators({ loadMoreAction }, dispatch)
    };
};
class Content extends Component {
    constructor(props) {
        super(props);
        this.loadMoreRef = React.createRef()
    }
    loadMore = () => {
        if(this.props.current_count<this.props.total_count)
            this.props.action.loadMoreAction({ page: this.props.current_page + 1, search_text: this.props.search_text });
    }
    handleScroll = (event) => {
        let scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
        let sccrollable = Math.ceil(window.scrollY)
        if (sccrollable === scrollTotal) {
            this.loadMore();
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }
    render() {
        if (this.props.content_list.length === 0 && this.props.search_loading_flag === undefined) {
            return (<div className="welcome-container">Welcome To Twitter Search App</div>)
        }
        else if (this.props.content_list.length === 0 && this.props.search_loading_flag === false) {
            return (<div className="no-output">Sorry... There is no content available</div>)
        }
        else {
            return (

                <div className="content-container ">

                    {this.props.content_list.map(item => (
                        <div key={item.id} className="container tweet-container">
                            <div className="tweet-header row">
                                <div className="profile-image-container col-sm-2">
                                    <img className="profile-pic" src={item.user.profile_image_url} alt="Pro Pic" onError={(e)=>{e.target.src="/assets/propic.png"}} />
                                    {/* <img className="profile-pic" src={"/assets/propic.png"} alt="Pro Pic" onerror=""/> */}
                                </div>

                                <div className="tweet-details col-sm-7">
                                    <div className="user-name">
                                        <span>{item.user.name}</span>
                                    </div>
                                    <div className="screen-name">
                                        <span>@{item.user.screen_name}</span>
                                    </div>

                                </div>
                                <div className="follow-box col-sm-3">
                                    <div className="follow-button">
                                        <FontAwesomeIcon icon={['fab', 'twitter']} color="#00acee" />
                                        <span>FOLLOW</span>
                                    </div>

                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-2"></div>
                                <div className="tweet-text col-8">
                                    <p>{item.text === undefined ? "No Description" : item.text}</p>
                                </div>
                            </div>
                            <div className="row ">
                                
                                <div className="tweet-images col-4">
                                {
                                    item.extended_entities!==undefined ? <ImageGallery items={item.extended_entities.media}/> : null
                                }
                                     
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2"></div>
                                <div className="tweet-information col-5">
                                    <div className="row">
                                    <FontAwesomeIcon className="col-4 col-md-2" icon="heart" color="#00acee" />
                                    <FontAwesomeIcon className="col-4 col-md-2" icon="retweet" color="#00acee" />
                                    <FontAwesomeIcon className="col-4 col-md-2" icon="comment" color="#00acee" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className={`loader-container ${this.props.search_loading_flag === true ? 'loader-show' : 'loader-hide'}`}><img src="assets/loader.gif" alt="loader"></img></div>
                </div>

            );
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Content);
