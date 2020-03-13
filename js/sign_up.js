const urlParams = new URLSearchParams(window.location.search);
const role = urlParams.get('as');

if (role === 'individual') {
  document.querySelector('video').src = 'https://cdn.dribbble.com/users/14268/screenshots/8921521/media/dc5be48952b04977b562cf8352b22085.mp4';
  document.querySelector('#role').innerHTML = 'Sign in as an individual to donate or join a charity.'
  document.querySelector('.top a').innerHTML = "I'm not an individual. &nbsp Sign in as a charity";
  document.querySelector('.top a').href = 'sign_up.html?as=charity'
} else {
  document.querySelector('video').src = 'https://cdn.dribbble.com/users/14268/screenshots/8778221/media/eeaa027529e04701008f62bcd3b0cd72.mp4';
  document.querySelector('#role').innerHTML = 'Sign in as a charity to get more help.'
  document.querySelector('.top a').innerHTML = "I'm not a charity. &nbsp Sign in as an individual";
  document.querySelector('.top a').href = 'sign_up.html?as=individual'
}
