
const hamb=document.querySelector('.hamb');const mob=document.querySelector('.mobile');if(hamb){hamb.addEventListener('click',()=>mob.classList.toggle('open'))}
const obs=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));


// V15 scroll polish
(function(){
  const line=document.createElement('div');
  line.className='scroll-line';
  document.body.appendChild(line);
  const nav=document.querySelector('.nav');
  function onScroll(){
    const h=document.documentElement.scrollHeight-window.innerHeight;
    const p=h>0?(window.scrollY/h)*100:0;
    line.style.width=p+'%';
    if(nav) nav.classList.toggle('scrolled', window.scrollY>20);
  }
  window.addEventListener('scroll',onScroll,{passive:true});
  onScroll();
})();

window.addEventListener('scroll',()=>{const n=document.querySelector('.nav'); if(n) n.classList.toggle('scrolled', window.scrollY>8);});
