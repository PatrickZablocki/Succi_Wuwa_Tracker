const RF={hp:20000,atk:3000,def:1500,cr:100,cd:300,er:200,dmg:100},RL={hp:'HP',atk:'ATK',def:'DEF',cr:'CR',cd:'CD',er:'ER',dmg:'DMG'};
function radar(st){const ks=Object.keys(RF),n=ks.length,C=80,R=50;
const pt=(i,r)=>{const a=-Math.PI/2+i*2*Math.PI/n;return[C+r*Math.cos(a),C+r*Math.sin(a)]};
let g=[.25,.5,.75,1].map(f=>`<polygon points="${ks.map((_,i)=>pt(i,R*f).join(',')).join(' ')}" fill="none" stroke="currentColor" stroke-opacity=".2"/>`).join('');
g+=ks.map((k,i)=>{const[x,y]=pt(i,R+13);return`<line x1="${C}" y1="${C}" x2="${pt(i,R)[0]}" y2="${pt(i,R)[1]}" stroke="currentColor" stroke-opacity=".2"/><text x="${x}" y="${y}" font-size="9" text-anchor="middle" dominant-baseline="central" fill="currentColor" opacity=".7">${RL[k]}</text>`}).join('');
const v=ks.map((k,i)=>pt(i,R*Math.min(1,Math.max(0,(+st[k]||0)/RF[k]))).join(',')).join(' ');
return`<svg viewBox="0 0 160 160" width="100%" style="max-width:190px;display:block;margin:6px auto 0;color:var(--tx)">${g}<polygon points="${v}" fill="var(--ac)" fill-opacity=".35" stroke="var(--ac)" stroke-width="1.5"/></svg>`}
const K='succi_wuwa_v1';let S={};try{S=JSON.parse(localStorage.getItem(K)||'{}')}catch(_){}
const save=()=>{try{localStorage.setItem(K,JSON.stringify(S))}catch(_){}};
const get=n=>S[n]||(S[n]={own:false,lv:1,wn:'',wl:1,wr:1,st:{}});
const STATS=[['hp','HP'],['atk','ATK'],['def','DEF'],['cr','Crit-Rate %'],['cd','Crit-DMG %'],['er','Energy Regen %'],['dmg','Elem.-DMG-Bonus %']];
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/"/g,'&quot;');
$('#el').innerHTML+=Object.keys(EC).map(e=>`<option>${e}</option>`).join('');
const slug=n=>n.toLowerCase().replace(/ /g,'-');
function av(c,d){const s=d.img||`images/${slug(c.n)}.jpg`;return `<img src="${s}" alt="${c.n}" onerror="this.parentNode.textContent='${c.n[0]}'">`}
function wimg(n){const w=WBY[n];return w?`<img src="images/weapons/${w.f}" alt="${esc(n)}">`:''}
function wopts(type,cur){let o='<option value="">– keine Waffe –</option>';
if(cur&&!WBY[cur])o+=`<option selected value="${esc(cur)}">${esc(cur)}</option>`;
return o+W.filter(w=>w[1]==type).map(w=>`<option value="${esc(w[0])}" ${w[0]==cur?'selected':''}>${w[0]} (${w[2]}★)</option>`).join('')}
function card(c){const d=get(c.n);
return `<div class="c ${d.own?'':'off'} ${d.own&&d.lv>=90?'max':''}" data-n="${esc(c.n)}">
${d.own&&d.lv>=90?'<span class="ok">Lv. 90</span>':''}
<div class="top"><div class="av" style="background:${EC[c.e]}" title="Bild ändern">${av(c,d)}</div>
<div><div class="nm">${c.n}</div><div class="meta"><span class="r${c.r}">${c.r}★</span> · ${c.e} · ${c.w}</div>
<label class="meta"><input type="checkbox" data-f="own" ${d.own?'checked':''}> Besitzt</label></div></div>
<div class="row"><label>Level</label><input type="number" min="1" max="90" data-f="lv" value="${d.lv}"></div>
<div class="row"><label>Waffe</label><span class="wimg">${wimg(d.wn)}</span><select data-f="wn">${wopts(c.w,d.wn)}</select></div>
<div class="row"><label>Waffen-Lv.</label><input type="number" min="1" max="90" data-f="wl" value="${d.wl}">
<label style="width:auto">Rang</label><select data-f="wr" style="flex:.6">${[1,2,3,4,5].map(i=>`<option ${i==d.wr?'selected':''}>${i}</option>`).join('')}</select></div>
<details open><summary>Stats</summary><div class="st">${STATS.map(([k,l])=>`<div>${l}<input type="number" step="any" data-f="st.${k}" value="${d.st[k]??''}"></div>`).join('')}</div><div class="rd">${radar(d.st)}</div><div class="meta" style="font-size:10px;text-align:center">Netz: Werte relativ zu Richtwerten (HP 20000, ATK 3000, DEF 1500, CR 100, CD 300, ER 200, DMG 100)</div></details></div>`}
function render(){const q=$('#q').value.toLowerCase(),e=$('#el').value,o=$('#own').checked;
$('#g').innerHTML=D.filter(c=>(!q||c.n.toLowerCase().includes(q))&&(!e||c.e==e)&&(!o||get(c.n).own)).map(card).join('');sum()}
function sum(){const own=D.filter(c=>get(c.n).own),mx=own.filter(c=>get(c.n).lv>=90).length;
$('#sum').innerHTML=`Besitz: <b>${own.length}</b>/${D.length} · Lv. 90: <b>${mx}</b>`}
$('#g').addEventListener('input',ev=>{const t=ev.target,f=t.dataset.f;if(!f)return;const card=t.closest('.c'),d=get(card.dataset.n);
let v=t.type=='checkbox'?t.checked:t.value;if(t.type=='number'&&f.indexOf('st.')<0)v=Math.min(90,Math.max(1,+v||1));
if(f=='wn')card.querySelector('.wimg').innerHTML=wimg(v);
if(f.startsWith('st.')){d.st[f.slice(3)]=v;card.querySelector('.rd').innerHTML=radar(d.st)}else d[f]=(f=='wr')?+v:v;save();
card.classList.toggle('off',!d.own);const m=d.own&&d.lv>=90;card.classList.toggle('max',m);
let ok=card.querySelector('.ok');if(m&&!ok){card.insertAdjacentHTML('afterbegin','<span class="ok">Lv. 90</span>')}else if(!m&&ok)ok.remove();sum()});
let cur=null;
$('#g').addEventListener('click',ev=>{const a=ev.target.closest('.av');if(a){cur=a.closest('.c').dataset.n;$('#pic').click()}});
$('#pic').onchange=e=>{const file=e.target.files[0];if(!file||!cur)return;const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{
const cv=document.createElement('canvas');cv.width=cv.height=160;const x=cv.getContext('2d'),s=Math.min(im.width,im.height);
x.drawImage(im,(im.width-s)/2,(im.height-s)/4>0?(im.height-s)/4:0,s,s,0,0,160,160);
get(cur).img=cv.toDataURL('image/jpeg',.8);save();render()};im.src=r.result};r.readAsDataURL(file);e.target.value=''};
['q','el','own'].forEach(i=>$('#'+i).addEventListener('input',render));
$('#ex').onclick=()=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(S)],{type:'application/json'}));a.download='succi_wuwa_backup.json';a.click()};
$('#im').onclick=()=>$('#imf').click();
$('#imf').onchange=e=>{const f=e.target.files[0];if(!f)return;f.text().then(t=>{try{S=JSON.parse(t);save();render()}catch(_){alert('Datei ungültig')}})};
render();
