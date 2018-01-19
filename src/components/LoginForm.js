import React, {Component} from 'react';
import VERIFY_USER from '../Events'

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
                    nickname: "",
                    error: ""                        
                    } //end of state
      }//end of constructor

    setUser = ({ user, isUser}) => {
        console.log(user, isUser);
        if(isUser){
            this.setError("Sorry, that nickname is already taken.")
        } else {
            this.props.setUser(user)
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault;
        const {nickname} = this.state;
        const {socket} = this.props;
        socket.emit(VERIFY_USER, nickname, this.setUser)
    }
    
    handleChange = (e) => {
        this.setState({nickname: e.target.value})
    }

    setError = (error) => {
        this.setState({error})
    }
    
    render(){
        const {nickname, error} = this.state;
        return (
            <div className = "login">

                <form onSubmit = {this.handleSubmit} className = "login-form" >
                    <label htmlFor="nickname">
                        <h2>Have a nickname?</h2>
                    </label>
                    <input
                        ref={(input) => { this.textInput = input}}
                        type="text"
                        id="nickname"
                        value={nickname}
                        onChange={this.handleChange}
                        placeholder={'Username'}
                     />
                     <div className="error" >{error ? error : null} </div>
                </form>           

            </div>
        );
    }
}


export default LoginForm;