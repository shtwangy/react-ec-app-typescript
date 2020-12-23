import React, {Component} from 'react'

export default class SignInClass extends Component {
    render() {
        console.log(this.props.users)
        return (
            <div>
                <h2>サインイン</h2>
                <button onClick={() => this.props.actions.signIn()}>
                    サインインする
                </button>
            </div>
        )
    }
}
