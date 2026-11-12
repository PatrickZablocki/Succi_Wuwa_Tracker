const CK='succi_wuwa_challenges_v1',CT=['Chat-Challenge','Community Game','Turm','Whimpering Wastes','Boss','Sonstiges'],CS=['Geplant','Läuft','Geschafft','Gescheitert'];
let CH=[];try{CH=JSON.parse(localStorage.getItem(CK)||'[]')}catch(_){}
const csave=()=>{try{localStorage.setItem(CK,JSON.stringify(CH))}catch(_){}};
const opt=(l,v)=>l.map(x=>`<option ${x==v?'selected':''}>${x}</option>`).join('');
const ce=s=>String(s??'').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
$('#chf').innerHTML+=CS.map(s=>`<option>${s}</option>`).join('');
function chcard(c){return `<div class="ch" data-id="${c.id}" data-s="${c.status}">
<div class="chh"><input class="t" data-f="title" placeholder="Titel" value="${ce(c.title)}">
<button data-a="del" title="Löschen">✕</button></div>
<div class="chr"><select data-f="type">${opt(CT,c.type)}</select><select data-f="status">${opt(CS,c.status)}</select>
<input type="date" data-f="date" value="${ce(c.date)}"></div>
<textarea data-f="rules" rows="2" placeholder="Regeln / Beschreibung">${ce(c.rules)}</textarea>
<div class="chr"><span>Versuche</span><button data-a="dec">−</button><b>${c.tries}</b><button data-a="inc">+</button>
<span>Ziel</span><input data-f="goal" placeholder="z. B. Etage 10" value="${ce(c.goal)}"></div>
<textarea data-f="notes" rows="2" placeholder="Notizen / Ergebnis">${ce(c.notes)}</textarea></div>`}
function chsum(){const n=s=>CH.filter(c=>c.status==s).length;
$('#chsum').innerHTML=`Läuft: <b>${n('Läuft')}</b> · Geschafft: <b>${n('Geschafft')}</b> · Gesamt: <b>${CH.length}</b>`}
function chrender(){const f=$('#chf').value,l=CH.filter(c=>!f||c.status==f);
$('#chl').innerHTML=l.length?l.map(chcard).join(''):'<p class="empty">Noch keine Challenges. Mit „+ Neue Challenge“ legst du die erste an.</p>';chsum()}
$('#chadd').onclick=()=>{CH.unshift({id:Date.now(),title:'',type:CT[0],status:CS[0],date:'',rules:'',goal:'',tries:0,notes:''});csave();$('#chf').value='';chrender()};
$('#chf').addEventListener('input',chrender);
$('#chl').addEventListener('input',e=>{const t=e.target,f=t.dataset.f;if(!f)return;const el=t.closest('.ch'),c=CH.find(x=>x.id==el.dataset.id);
c[f]=t.value;if(f=='status'){el.dataset.s=t.value;chsum()}csave()});
$('#chl').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const el=b.closest('.ch'),c=CH.find(x=>x.id==el.dataset.id),a=b.dataset.a;
if(a=='del'){if(confirm('Challenge löschen?')){CH=CH.filter(x=>x!==c);csave();chrender()}return}
if(a=='inc')c.tries++;if(a=='dec')c.tries=Math.max(0,c.tries-1);el.querySelector('b').textContent=c.tries;csave()});
chrender();
