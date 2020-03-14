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
    if (document.querySelector('#signInBtn')) {
      document.querySelector('#signInBtn').style.display = 'none';
    }

    const format = `
      <div class="user">
        <h3 id="userName">Hello, ${displayName}</h3>
        <img id="userAvatar" src=${photoURL || defaultPhotoUrl}
        alt="user icon"
        style="
        height:50px;
        border-radius: 25px;"
        type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
          <button id="profile" class="dropdown-item" type="button">Profile</button>
          <button id="logout" class="dropdown-item" type="button">Log out</button>
        </div>
      </div>`
    document.querySelector('.header .nav').innerHTML = format;

    currentPage = window.location.pathname;

    const logout = () => {
      firebase.auth().signOut()
        .then(function() {

        })
        .catch(function(error) {

      });
    }
    document.querySelector('#logout').addEventListener('click', logout);

    var role = null;
    const userRef = firebase.database().ref('users/' + user.uid +'/role');
    userRef.on('value', function(snapshot) {
      role = snapshot.val();
    });

    if (currentPage === '/index.html') {
      document.querySelector('.change_role').style.display = 'none';
    }

    var profileUrl = null;
    const redirectToProfile = () => {
      if (role === 'individual') {
        window.location.href = 'user_profile.html';
      } else {
        window.location.href = 'profile.html';
      }
    }
    document.querySelector('#profile').addEventListener('click', redirectToProfile);

  } else {
    const format = '<a id="signInBtn" href="sign_up.html?as=individual" class="add-chairty">Sign In</a>';
    document.querySelector('.header .nav').innerHTML = format;
  }
});
