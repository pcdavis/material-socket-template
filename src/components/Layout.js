import React, {Component} from 'react';
import io from 'socket.io-client'

const socketUrl = ""
class Layout extends Component {
    constructor(props){
        super(props);
        this.state= {
                        socket: null
                    };// end of state
    }//end constructor

    initSocket = () => {
        const socket = io(socketUrl);

        this.setState({socket});
    }

    render(){
        const {title} = this.props;
        return (
            <div className="container" >

            {title}

            </div>
        );
    }
}


export default Layout;