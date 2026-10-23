(function(){
var d=document,r=d.documentElement;
d.getElementById('yr').textContent=new Date().getFullYear();
try{var t=localStorage.getItem('wr-theme');if(t)r.setAttribute('data-theme',t)}catch(e){}
d.getElementById('th').onclick=function(){
var dark=r.getAttribute('data-theme')==='dark'||(!r.getAttribute('data-theme')&&matchMedia('(prefers-color-scheme:dark)').matches);
var n=dark?'light':'dark';r.setAttribute('data-theme',n);
try{localStorage.setItem('wr-theme',n)}catch(e){}};
var mb=d.getElementById('mb'),mn=d.getElementById('menu');
function close(){mn.classList.remove('open');mb.setAttribute('aria-expanded','false');mb.textContent='☰'}
mb.onclick=function(){var o=mn.classList.toggle('open');mb.setAttribute('aria-expanded',o);mb.textContent=o?'✕':'☰'};
mn.addEventListener('click',function(e){if(e.target.tagName==='A')close()});
d.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
var up=d.getElementById('up');
addEventListener('scroll',function(){up.classList.toggle('show',scrollY>600)},{passive:true});
up.onclick=function(){scrollTo({top:0})};
var rv=d.querySelectorAll('.rv');
if('IntersectionObserver' in window){
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
rv.forEach(function(x){io.observe(x)});
var links=d.querySelectorAll('#menu a'),secs=[].map.call(links,function(a){return d.querySelector(a.getAttribute('href'))});
var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-45% 0px -50% 0px'});
secs.forEach(function(s){if(s)so.observe(s)});
}else{rv.forEach(function(x){x.classList.add('in')})}
d.getElementById('f').addEventListener('submit',function(e){
e.preventDefault();
var n=d.getElementById('n'),m=d.getElementById('m');
if(!n.value.trim()||!m.value.trim()){(n.value.trim()?m:n).focus();return}
var b=d.getElementById('b').value.trim(),l=d.getElementById('l').value;
var txt='Halo Wiyantara Relations, saya '+n.value.trim()+(b?' dari '+b:'')+'.\nLayanan: '+l+'\n'+m.value.trim();
open('https://wa.me/6285758540274?text='+encodeURIComponent(txt),'_blank','noopener');
});
})();
