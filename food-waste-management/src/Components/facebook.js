import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'

export default class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''

    }

    responseFacebook = response => {
        console.log(response)
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        });
        console.log(this.state);
    }

    componentDidMount = () => {
    }

    render() {
        let fbContent;
        if (this.state.isLoggedIn) {
            fbContent = (
                <div style= {{
                    width: '400px',
                    margin: 'auto',
                    background: '#F4F4F4',
                    padding: '20px'
                }}>
                    <img src={this.state.picture} alt={this.state.name}/>
                    <h2>Welcome {this.state.name}</h2>
                    <h3> {this.state.email} </h3>
                </div>
            )
        } else {
            fbContent = (<FacebookLogin 
            appId = "292748748133212"
            autoLoad = {true}
            fields = "name, email, picture"
            autoLoad = {true}
            //onClick = {this.componentClicked}
            callback = {this.responseFacebook}/>)
        }

        return ( 
        <div>
        {fbContent}
        </div>
        )
    }
}