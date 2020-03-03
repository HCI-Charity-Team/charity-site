const urlParams = new URLSearchParams(window.location.search);
const role = urlParams.get('as');

if (role === 'individual') {
  document.querySelector('#slogan').innerHTML = 'Discover the nearby charities.';
  document.querySelector('#sloganImage').src = './images/logo_sign_in.png';
  document.querySelector('.auth-sidebar').style.backgroundColor = '#FFEBE9';
  document.querySelector('.auth-sidebar').style.color = '#945A54';

  document.querySelector('#role').innerHTML = 'Sign in to Sharity as an individual to donate or join a charity.'
  document.querySelector('.top a').innerHTML = "I'm not an individual. &nbsp Sign in as a charity";
  document.querySelector('.top a').href = 'sign_up.html?as=charity'
} else {
  document.querySelector('#slogan').innerHTML = 'Extra donations and helps your charity deserves.';
  document.querySelector('#sloganImage').src = './images/logo_for_charity.jpg';
  document.querySelector('.auth-sidebar').style.backgroundColor = '#FBDDD1';
  document.querySelector('.auth-sidebar').style.color = '#764B3A';

  document.querySelector('#role').innerHTML = 'Sign in to Sharity as a charity to get more help.'
  document.querySelector('.top a').innerHTML = "I'm not a charity. &nbsp Sign in as an individual";
  document.querySelector('.top a').href = 'sign_up.html?as=individual'
}
