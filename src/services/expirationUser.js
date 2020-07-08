import { auth } from "./firebase";

const expirationUser =() =>{

    auth().onAuthStateChanged((user) => {
        let userSessionTimeout = null;
      
        if (user === null && userSessionTimeout) {
          clearTimeout(userSessionTimeout);
          userSessionTimeout = null;
        } else {
          user.getIdTokenResult().then((idTokenResult) => {
            const authTime = idTokenResult.claims.auth_time * 1000;
            const sessionDurationInMilliseconds = 60 * 60 * 1000; // 60 min
            const expirationInMilliseconds = sessionDurationInMilliseconds - (Date.now() - authTime);
            userSessionTimeout = setTimeout(
              () => auth().signOut(),
              expirationInMilliseconds
            );
          });
        }
    });
}

export default expirationUser;