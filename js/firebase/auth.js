firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        const displayName = user.displayName;
        const email = user.email;
        const emailVerified = user.emailVerified;
        const photoURL = user.photoURL;
        const isAnonymous = user.isAnonymous;
        const uid = user.uid;
        const providerData = user.providerData;

        const defaultPhotoUrl = "https://img1.wikia.nocookie.net/__cb20140209140937/spudroosi/images/thumb/b/bb/Default_channel_icon.png/500px-Default_channel_icon.png";
        document.querySelector('#signInBtn').style.display = 'none';
        const format = `
            <div class="user">
                <h3 id="userName">Hello, ${displayName}</h3>
                <img id="userAvatar" src=${photoURL || defaultPhotoUrl}
                alt="user icon"
                style="
                height:50px;
                border-radius: 25px;">
            </div>`
        document.querySelector('.header .nav').innerHTML = format;
    } else {
        // User is signed out.
        // ...
    }
});
