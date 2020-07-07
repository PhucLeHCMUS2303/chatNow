import {auth} from './firebase';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
export const doRegister = (info) => {

        auth().createUserWithEmailAndPassword(info.email, info.password)
        .then((res => {
	    // const user = auth().currentUser;
	    // user.updateProfile({displayName: info.firstName+' '+ info.lastName}).then(() => {
        //     history().push('/');
        console.log(res);
        })
    //     .catch(error => {
	// 	    this.setState({error});
	// 	});
    //     }).catch(error => {
    //     this.setState({error});
    //});
        )
}

export const logOutUser = () => {
    auth().signOut()
        .then(window.location = "/");
}

export const doLogin = e => {
    e.preventDefault();
    const {email, password} = this.state;
    auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            this.props.history.push('/');
        })
        .catch(error => {
            this.setState({error});
        });
}