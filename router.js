const VIEWS=['menu','team','challenges'];
function route(){const h=VIEWS.includes(location.hash.slice(1))?location.hash.slice(1):'menu';
VIEWS.forEach(v=>document.getElementById('v-'+v).hidden=v!==h);document.body.dataset.view=h;window.scrollTo(0,0)}
addEventListener('hashchange',route);route();
