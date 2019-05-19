import React,{Component} from 'react';
import Content from './ContentComponent';
import Search from './SearchComponent';
   
class Main extends Component{
    render(){
        return(
            <div>
                <Search/>
                <Content/>
            </div>    
        )
    }
}
export default Main