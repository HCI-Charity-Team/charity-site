const jsonObj = {"total_results":16, "organizations":[
  {"name":"Alliance of Hope for Suicide Loss Suicide", "img": "https://cdn.greatnonprofits.org/images/logos/lotusnight.jpg", "geo":"", "des":"","category":"mental health"},
  {"name":"The Cradle", "img": "https://cdn.greatnonprofits.org/images/logos/Cradlelogoblue7705withCG9tagline.jpg", "geo":"", "des":"","category":"education"},
  {"name":"Fabretto Children's Foundation", "img": "https://cdn.greatnonprofits.org/images/logos/2013FabrettoLogoAPPROVED-01250px.png", "geo":"", "des":"","category":"human services"},
  {"name":"Rainbows for All Children", "img": "https://cdn.greatnonprofits.org/images/logos/Rainbows4all_logo_COLOR2.jpg", "geo":"", "des":"","category":"human services"},
  {"name":"Benevolent", "img": "https://cdn.greatnonprofits.org/images/logos/BenevolentFulllogo1.jpg", "geo":"", "des":"","category":"human services"},
  {"name":"Impact Behavioral Health Partners", "img":"https://cdn.greatnonprofits.org/images/logos/Impact-Primary-Color-EMAIL1.jpg", "geo":"", "des":"","category":"mental health"},
  {"name":"The Rotary Foundation of Rotary International", "img": "", "geo":"", "des":"","category":"international"},
  {"name":"Kidney Cancer Association", "img": "https://cdn.greatnonprofits.org/images/logos/itunespodcast300x300.jpg", "geo":"", "des":"","category":"health"},
  {"name":"Field Ready Inc", "img":"https://cdn.greatnonprofits.org/images/logos/FIELDREADYLogoAIfile.jpg", "geo":"", "des":"","category":"public/societal benefit"},
  {"name":"YWCA Evanston North Shore", "img": "", "geo":"", "des":"","category":"advocacy"},
  {"name":"Infant Welfare Society of Evanston, Inc", "img": "", "geo":"", "des":"","category":"human services"},
  {"name":"Living Earth Television NFP", "img": "https://cdn.greatnonprofits.org/images/logos/LETVcalliglogo.JPG", "geo":"", "des":"","category":"arts/culture"},
  {"name":"Allowance of Good", "img": "", "geo":"", "des":"","category":"international"},
  {"name":"Learning Bridge Early Education Center", "img":"", "geo":"", "des":"","category":"education"},
  {"name":"Evanston Environmental Association", "img": "https://cdn.greatnonprofits.org/images/logos/ecology-center-rendering-w-.jpg", "geo":"", "des":"","category":"environment/animals"},
  {"name":"Girls Play Sports, Inc", "img": "https://cdn.greatnonprofits.org/images/logos/clubGPS_3c_border0.jpg", "geo":"", "des":"", "category":"education"},
  {"name":"Youth Job Center Inc", "img":"", "geo":"", "des":"", "category":"other"}
]};

let charities = jsonObj["organizations"];

var i = 1;
for(charity of charities){
  if (charity.img === "") {
    let template = `
      <li class="group">
        <div class="charity">
          <div class="logo">
            <img src="./images/${i}.jpg" alt=${charity.name}>
          </div>
          <div class="name">${charity.name}</div>
          <div class="tags">
            <div class="tag">${charity.category}</div>
          </div>
        </div>
      </li>
    `;
    document.querySelector('.charity-cards').innerHTML += template;
    i += 1;
  } else {
    let template = `
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
}

urlParams = new URLSearchParams(window.location.search);
document.getElementById('searchBox').value = urlParams.get('search')
