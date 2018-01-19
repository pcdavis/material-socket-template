import React, {Component} from 'react';
import io from 'socket.io-client'

const socketUrl = "http://localhost:3231" //use the ip address of the server
class Layout extends Component {
    constructor(props){
        super(props);
        this.state= {
                        socket: null
                    };// end of state
    }//end constructor

    componentWillMount(){
        this.initSocket();
    }

    initSocket = () => {
        const socket = io(socketUrl);
        socket.on('connect', () => {
            console.log('you are connected on a socket')
        })
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