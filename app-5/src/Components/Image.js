import React, {Component} from 'react'
class Image extends Component {

    render(){
        return(
            <div>
                <img src ={this.props.myImage}></img>
                <div>SUCK IT!</div>
            </div>
        )
    }
}

export default Image
