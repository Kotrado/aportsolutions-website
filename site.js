(function(){
  var btn=document.querySelector('.menu-btn'), nav=document.getElementById('site-nav');
  if(btn&&nav){
    function setOpen(o){nav.classList.toggle('open',o); btn.setAttribute('aria-expanded',o?'true':'false');}
    btn.addEventListener('click',function(){setOpen(!nav.classList.contains('open'));});
    nav.addEventListener('click',function(e){if(e.target.closest('a'))setOpen(false);});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')setOpen(false);});
  }
  var bar=document.querySelector('.announce');
  if(bar){
    try{if(localStorage.getItem('announce-scioperi')==='1')bar.hidden=true;}catch(e){}
    var x=bar.querySelector('button');
    if(x)x.addEventListener('click',function(){bar.hidden=true;try{localStorage.setItem('announce-scioperi','1');}catch(e){}});
  }
})();
