import React, {Component} from 'react';
import io from 'socket.io-client';
import {USER_CONNECTED} from '../Events'
import LoginForm from './LoginForm'
import {LOGOUT} from '../Events'

const socketUrl = "http://localhost:3231" //use the ip address of the server
class Layout extends Component {
    constructor(props){
        super(props);
        this.state= {
                        socket: null,
                        user: null
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

    setUser = (user) => {
        const {socket} = this.state;
        socket.emit(USER_CONNECTED, user);
        this.setState({ user: user});
    }

    logout = () => {
        const { socket } = this.state;
        socket.emit(LOGOUT);
        this.setState({ user: null})
    }

    render(){
        const {title} = this.props;
        const {socket} = this.state;    
        return (
            <div className="container" >

            <LoginForm socket = {socket} setUser = {this.setUser} />

            </div>
        );
    }
}


export default Layout;