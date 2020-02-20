const jsonObj = {"total_results":16, "organizations":[
  {"name":"Alliance of Hope for Suicide Loss Suicide", "img": "https://cdn.greatnonprofits.org/images/logos/lotusnight.jpg", "geo":"", "des":"","category":"mental health"},
  {"name":"The Cradle", "img": "https://cdn.greatnonprofits.org/images/logos/Cradlelogoblue7705withCG9tagline.jpg", "geo":"", "des":"","category":"education"},
  {"name":"Fabretto Children's Foundation", "img": "https://cdn.greatnonprofits.org/images/logos/2013FabrettoLogoAPPROVED-01250px.png", "geo":"", "des":"","category":"human services"},
  {"name":"Rainbows for All Children", "img": "https://cdn.greatnonprofits.org/images/logos/Rainbows4all_logo_COLOR2.jpg", "geo":"", "des":"","category":"human services"},
  {"name":"Benevolent", "img": "https://cdn.greatnonprofits.org/images/logos/BenevolentFulllogo1.jpg", "geo":"", "des":"","category":"human services"},
  {"name":"Impact Behavioral Health Partners", "img":"https://cdn.greatnonprofits.org/images/logos/Impact-Primary-Color-EMAIL1.jpg", "geo":"", "des":"","category":"mental health"},
  {"name":"The Rotary Foundation of Rotary International", "img": "./images/1.jpg", "geo":"", "des":"","category":"international"},
  {"name":"Kidney Cancer Association", "img": "https://cdn.greatnonprofits.org/images/logos/itunespodcast300x300.jpg", "geo":"", "des":"","category":"health"},
  {"name":"Field Ready Inc", "img":"https://cdn.greatnonprofits.org/images/logos/FIELDREADYLogoAIfile.jpg", "geo":"", "des":"","category":"public/societal benefit"},
  {"name":"YWCA Evanston North Shore", "img": "./images/2.jpg", "geo":"", "des":"","category":"advocacy"},
  {"name":"Infant Welfare Society of Evanston, Inc", "img": "./images/3.jpg", "geo":"", "des":"","category":"human services"},
  {"name":"Living Earth Television NFP", "img": "https://cdn.greatnonprofits.org/images/logos/LETVcalliglogo.JPG", "geo":"", "des":"","category":"arts"},
  {"name":"Allowance of Good", "img": "./images/4.jpg", "geo":"", "des":"","category":"international"},
  {"name":"Learning Bridge Early Education Center", "img":"./images/5.jpg", "geo":"", "des":"","category":"education"},
  {"name":"Evanston Environmental Association", "img": "https://cdn.greatnonprofits.org/images/logos/ecology-center-rendering-w-.jpg", "geo":"", "des":"","category":"environment/animals"},
  {"name":"Girls Play Sports, Inc", "img": "https://cdn.greatnonprofits.org/images/logos/clubGPS_3c_border0.jpg", "geo":"", "des":"", "category":"education"},
  {"name":"Youth Job Center Inc", "img":"./images/6.jpg", "geo":"", "des":"", "category":"other"}
]};

let charities = jsonObj["organizations"];

for(charity of charities){
  const template = `
    <li class="group">
      <div class="charity">
        <div class="logo">
        <img src=${charity.img} alt=${charity.name}>
        </div>
        <div class="name">${charity.name}</div>
        <div class="tags">
        <div class="tag">${charity.category}</div>
        </div>
      </div>
    </li>
  `;
  document.querySelector('.charity-cards').innerHTML += template;
}

urlParams = new URLSearchParams(window.location.search);
document.getElementById('searchBox').value = urlParams.get('search')

const local_path = './data/';
const remote_path = 'https://raw.githubusercontent.com/HCI-Charity-Team/charity-site/experimental/data/';
var selected_tag;
var clist;
let causes;
causes = ["all", "mental health", 'human services', 'education', 'international', 'arts'];
function filter_charities(charity_list, cause) {
  var template = '';
  for (org of charity_list.organizations) {
    if ((org.category === cause) || (cause === 'all')) {
      template += `
        <li class="group">
          <div class="charity">
            <div class="logo">
            <img src=${org.img} alt=${org.name}>
            </div>
            <div class="name">${org.name}</div>
            <div class="tags">
            <div class="tag">${org.category}</div>
            </div>
          </div>
        </li>
      `;
    }
  }
  document.querySelector('.charity-cards').innerHTML = template;
};

function set_charities(charity_list)  {
  clist = charity_list;
  return clist;
};

const load_charities = () => {
  fetch(remote_path + 'charities.json')
  .then((response) => {
    return response.json();
  })
  .then((charity_list) => {
    set_charities(charity_list);
  });
};

const buttons_arr = document.querySelectorAll('.category');
set_charities(load_charities());

function clear_btn_state() {
  for (btn of buttons_arr) {
    btn.classList.remove('active');
  }
}

buttons_arr.forEach((button, index, array) => {
  button.onclick = () => {
    cause = causes[index];
    filter_charities(clist, cause);
    clear_btn_state();
    button.classList.add('active');
  };
});
