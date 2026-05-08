/* ── SERVICE DATA ── */
const PX = id => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop`;

const SRV = {
  'produccion-av':{tag:'Servicio 01',title:'Producción<br><em>Audiovisual</em>',body:`<p><strong>Twisted Media</strong> produce contenido audiovisual de alto impacto para empresas en Morelia, Michoacán y toda la República Mexicana. Spots comerciales, videos corporativos, documentales de marca y piezas para redes sociales que generan resultados reales.</p><p>Nuestro equipo trabaja contigo desde el concepto creativo hasta la entrega final. <em>No producimos ruido</em> — producimos piezas que la gente recuerda, comparte y que posicionan tu marca en el mercado.</p><p>Grabación en locación, postproducción completa con color grading, sound design y motion graphics. Tu historia, contada con el más alto estándar técnico y creativo.</p>`,labels:['Spots Comerciales','Video Corporativo','Documental de Marca'],imgs:[6794837,7239913,8981847]},
  'redes-sociales':{tag:'Servicio 02',title:'Manejo de<br><em>R.R.S.S.</em>',body:`<p>Gestionamos tu presencia en redes sociales con <strong>estrategia real y medible</strong>, no solo publicaciones al aire. Análisis de audiencia, calendario editorial, producción de contenido y gestión de comunidad activa.</p><p>Crecimiento orgánico, campañas de pago segmentadas y contenido que realmente conecta con tu cliente ideal. <em>Audiencias reales, no bots</em>. Resultados comprobables para tu marca en Morelia y México.</p><p>Instagram, TikTok, YouTube, Facebook y LinkedIn — donde esté tu cliente, ahí construimos tu presencia digital con propósito y consistencia.</p>`,labels:['Estrategia Editorial','Community Management','Campañas Pagadas'],imgs:[15406294,8886104,1250453]},
  'branding':{tag:'Servicio 03',title:'<em>Branding</em>',body:`<p>Diseñamos la <strong>identidad visual completa</strong> de tu marca: logotipo, sistema de identidad, tipografía, paleta de color y manual de marca. Una identidad poderosa que conecta con tu audiencia y te diferencia de la competencia.</p><p>Material digital y de impresión, redes sociales, packaging y señalética. <em>Piezas de diseño gráfico que no se olvidan</em> — cada elemento comunica quién eres y por qué tu marca importa.</p><p>Branding estratégico que no solo se ve bien: también vende, genera confianza y posiciona tu negocio en Morelia, Michoacán y México.</p>`,labels:['Identidad Visual','Manual de Marca','Diseño Gráfico'],imgs:[12802261,7661590,7661184]},
  'transmisiones':{tag:'Servicio 04',title:'Transmisiones<br><em>en Vivo</em>',body:`<p>Producimos y transmitimos tus <strong>eventos en vivo con calidad broadcast</strong>: conferencias, lanzamientos de producto, conciertos y eventos corporativos en Morelia y toda la República Mexicana.</p><p>Múltiples cámaras, switching en vivo, graficación en tiempo real y distribución simultánea en todas tus plataformas digitales. <em>Tu evento, en todas las pantallas</em>, sin interrupciones y con la calidad técnica que tu marca merece.</p><p>Stream a YouTube, Facebook, Instagram, Twitch y plataformas privadas. Grabación 4K y entrega de master al finalizar para que tu contenido siga funcionando después del evento.</p>`,labels:['Eventos Corporativos','Conciertos y Shows','Conferencias'],imgs:[30397935,2883051,1659740]},
  'desarrollo-web':{tag:'Servicio 05',title:'Desarrollo<br><em>Web</em>',body:`<p>Construimos <strong>sitios web y plataformas digitales a medida</strong> que convierten visitantes en clientes: landing pages de alta conversión, portafolios, e-commerce y aplicaciones web para empresas en Morelia, Michoacán.</p><p>Código limpio, diseño UX/UI enfocado en resultados y performance optimizado para SEO. <em>Tu presencia digital, poderosa y funcional</em>. Cada pixel y cada línea de código trabajan para tu negocio.</p><p>Desarrollo front-end y back-end, integración con sistemas de pago, CRM y herramientas de marketing digital. Soluciones reales para negocios reales.</p>`,labels:['Sitios Web','E-Commerce','Landing Pages'],imgs:[14553720,270488,16023919]},
  'cobertura-eventos':{tag:'Servicio 06',title:'Cobertura de<br><em>Eventos</em>',body:`<p>Capturamos los momentos más importantes de tus <strong>eventos corporativos, sociales y culturales</strong> en Morelia y Michoacán con la calidad visual y narrativa que tu marca necesita.</p><p>Fotografía profesional de alto impacto, video de eventos y contenido inmediato para redes sociales. <em>Cada momento, en su mejor versión</em>. Desde congresos y lanzamientos hasta festivales y eventos sociales.</p><p>Equipo de cobertura completo: fotógrafos, videógrafos y editores en tiempo real. Entrega rápida de contenido listo para publicar y archivo de alta resolución para uso futuro de tu marca.</p>`,labels:['Fotografía de Eventos','Video de Eventos','Contenido para Redes'],imgs:[1190298,2306281,1763075]}
};

/* ── CURSOR ── */
const cur=document.getElementById('cur');
document.addEventListener('mousemove',e=>{cur.style.left=e.clientX+'px';cur.style.top=e.clientY+'px';},{passive:true});
document.querySelectorAll('a,button,.pc,.val-card,.srv-card,.cl,.client-logo').forEach(el=>{
  el.addEventListener('mouseenter',()=>cur.classList.add('big'),{passive:true});
  el.addEventListener('mouseleave',()=>cur.classList.remove('big'),{passive:true});
});

/* ── LOADER ── */
window.addEventListener('load',()=>{setTimeout(()=>document.getElementById('loader').classList.add('out'),1700);});

/* ── HACK POPUP ── */
let hackDone=false;
function closeHack(){document.getElementById('hackPopup').classList.remove('show');cur.style.display='block';}
document.getElementById('hackPopup').addEventListener('click',e=>{if(e.target===e.currentTarget)closeHack();});
setTimeout(()=>{if(!hackDone){hackDone=true;cur.style.display='none';document.getElementById('hackPopup').classList.add('show');}},60000);

/* ── MOBILE MENU ── */
(function(){
  var hbg  = document.getElementById('hbg');
  var nav  = document.getElementById('mobileNav');
  var cls  = document.getElementById('mobClose');
  var links= document.querySelectorAll('.mob-link');

  function openMobile(){
    hbg.classList.add('open');
    hbg.setAttribute('aria-expanded','true');
    nav.classList.add('open');
    document.body.style.overflow='hidden';
  }
  function closeMobile(){
    hbg.classList.remove('open');
    hbg.setAttribute('aria-expanded','false');
    nav.classList.remove('open');
    document.body.style.overflow='';
  }
  window.closeMobile = closeMobile;

  hbg.addEventListener('click', function(e){
    e.stopPropagation();
    nav.classList.contains('open') ? closeMobile() : openMobile();
  });

  cls.addEventListener('click', function(e){
    e.stopPropagation();
    closeMobile();
  });

  links.forEach(function(btn){
    btn.addEventListener('click', function(e){
      e.stopPropagation();
      var page = btn.getAttribute('data-page');
      closeMobile();
      // small delay so menu closes before page switches
      setTimeout(function(){ goPage(page); }, 80);
    });
  });

  // close on backdrop click
  nav.addEventListener('click', function(e){
    if(e.target === nav) closeMobile();
  });
})();


/* ── ROUTING ── */
const PAGES=['inicio','nosotros','proyectos','contacto','servicio','privacidad'];
function goPage(name){
  PAGES.forEach(p=>document.getElementById('page-'+p).classList.remove('active'));
  document.getElementById('page-'+name).classList.add('active');
  window.scrollTo(0,0);
  // Use data-nav attribute for active state (supports dropdown button too)
  document.querySelectorAll('.nav-links [data-nav]').forEach(b=>b.classList.toggle('active',b.dataset.nav===name));
  setTimeout(runReveals,50);
  if(name==='inicio')setTimeout(runStats,200);
  if(name!=='servicio')history.pushState(null,'','#'+name);
}
window.addEventListener('popstate',()=>{const h=location.hash.replace('#','')||'inicio';if(PAGES.includes(h))goPage(h);});
(()=>{const h=location.hash.replace('#','')||'inicio';if(PAGES.includes(h))goPage(h);})();

/* ── SERVICE DETAIL ── */
function openService(id){
  const s=SRV[id];if(!s)return;
  document.getElementById('srv-tag').textContent=s.tag;
  document.getElementById('srv-title').innerHTML=s.title;
  document.getElementById('srv-body').innerHTML=s.body;
  const cards=document.querySelectorAll('.srv-content-card');
  ['sc1','sc2','sc3'].forEach((el,i)=>{
    const n=document.getElementById(el);if(n)n.textContent=s.labels?s.labels[i]||'—':'—';
    if(cards[i]&&s.imgs&&s.imgs[i]){
      cards[i].style.backgroundImage=`url(${PX(s.imgs[i])})`;
      cards[i].classList.add('has-img');
    }
  });
  goPage('servicio');
}

/* ── REVEAL ── */
function getCurrentPage(){return PAGES.find(p=>document.getElementById('page-'+p).classList.contains('active'))||'inicio';}
function runReveals(){
  const p=getCurrentPage();
  const els=document.querySelectorAll('#page-'+p+' .rev');
  const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}});},{threshold:0.07});
  els.forEach(el=>{el.classList.remove('in');obs.observe(el);});
}

/* ── STATS ── */
var _statsDone = false;
function runStats(){
  if(_statsDone) return;
  _statsDone = true;
  document.querySelectorAll('#page-inicio [data-target]').forEach(el=>{
    const target=+el.dataset.target;let n=0;const step=target/55;
    const isMill=el.closest('.stat').querySelector('.stat-l').textContent.includes('Mill');
    const t=setInterval(()=>{n+=step;if(n>=target){n=target;clearInterval(t);}el.textContent=Math.floor(n)+(isMill?'M+':'+');},28);
  });
}

/* ── FILTER ── */
function setFilter(btn,cat){
  document.querySelectorAll('.ftab').forEach(b=>b.classList.remove('on'));btn.classList.add('on');
  document.querySelectorAll('.pc').forEach(c=>{c.style.display=(cat==='todo'||c.dataset.cat===cat)?'':'none';});
}

/* ── FORM ── */
function sendForm(e){
  e.preventDefault();
  const txt=document.getElementById('fsubtxt'),btn=document.getElementById('fsub');
  txt.textContent='✓ SEÑAL RECIBIDA';btn.style.background='var(--tm-offwhite)';
  setTimeout(()=>{txt.textContent='ENVIAR SEÑAL';btn.style.background='';e.target.reset();},3000);
}

/* ── PARTICLES ── */
for(let i=0;i<22;i++){
  const p=document.createElement('div');p.className='particle';
  const tall=Math.random()>.6;
  p.style.cssText=`left:${Math.random()*100}%;width:${tall?2:Math.floor(Math.random()*3+1)}px;height:${tall?Math.floor(Math.random()*40+8):2}px;background:${Math.random()>.5?'#45B48F':'#02634D'};--dx:${(Math.random()-.5)*150}px;animation-duration:${5+Math.random()*10}s;animation-delay:${Math.random()*12}s;`;
  document.body.appendChild(p);
}

/* ── GLITCH FLASH ── (throttled, uses RAF for smoothness) */
(function(){
  function glitchTick(){
    if(Math.random()>.88){
      document.body.style.filter='hue-rotate(5deg) brightness(1.03)';
      setTimeout(()=>{document.body.style.filter='';},70);
    }
    setTimeout(glitchTick, 2800);
  }
  setTimeout(glitchTick, 2800);
})();

/* ── INIT ── */
setTimeout(()=>{runReveals();runStats();},1800);

/* ── VALORES INTERACTIVE ── */
(function(){
  function initValores(){
    var btns = document.querySelectorAll('.val-icon-btn');
    var panels = document.querySelectorAll('.val-panel');
    if(!btns.length) return;
    btns.forEach(function(btn){
      btn.addEventListener('click', function(){
        var idx = btn.getAttribute('data-val');
        btns.forEach(function(b){ b.classList.remove('active'); });
        panels.forEach(function(p){ p.classList.remove('active'); });
        btn.classList.add('active');
        var panel = document.querySelector('.val-panel[data-panel="'+idx+'"]');
        if(panel){
          panel.classList.add('active');
          // restart bar animation
          var fill = panel.querySelector('.val-panel-fill');
          if(fill){ fill.style.animation='none'; fill.offsetHeight; fill.style.animation=''; }
        }
      });
    });
  }
  /* ── PROCESO CIRCLE ── */
  function initProceso(){
    var nodes = document.querySelectorAll('.proceso-node');
    var panels = document.querySelectorAll('.proceso-panel');
    if(!nodes.length) return;
    var current = 0;
    function activate(idx){
      nodes.forEach(function(n){ n.classList.remove('active'); });
      panels.forEach(function(p){ p.classList.remove('active'); });
      nodes[idx].classList.add('active');
      var panel = document.querySelector('.proceso-panel[data-panel="'+idx+'"]');
      if(panel) panel.classList.add('active');
      current = idx;
    }
    nodes.forEach(function(node){
      node.style.cursor = 'pointer';
      node.addEventListener('click', function(){
        activate(parseInt(node.getAttribute('data-step')));
        clearInterval(autoTimer);
        autoTimer = setInterval(function(){ activate((current+1)%4); }, 3500);
      });
      node.addEventListener('mouseenter', function(){
        activate(parseInt(node.getAttribute('data-step')));
      });
    });
    // Auto-rotate
    var autoTimer = setInterval(function(){ activate((current+1)%4); }, 3500);
    activate(0);
  }
  window.addEventListener('load', function(){
    initValores();
    initProceso();
  });
  // Re-init when switching to nosotros page
  var _origGoPage = window.goPage;
  window.goPage = function(name){
    _origGoPage(name);
    if(name === 'nosotros'){
      setTimeout(function(){ initValores(); initProceso(); }, 120);
    }
  };
})();


/* ══════════════════════════════════════════════
   GENERATIVE ANIMATIONS
══════════════════════════════════════════════ */
(function(){

  var G = '#45B48F', T = '#02634D', W = 'rgba(69,180,143,';

  /* ── Global RAF IDs — prevents duplicate animation loops ── */
  var RAF_HERO = null;
  var RAF_CONT = null;
  var resizeHeroFn = null;
  var resizeContFn = null;

  /* ── HERO CANVAS — particle network ── */
  function initHeroCanvas(){
    var c = document.getElementById('hero-canvas');
    if(!c) return;
    // cancel any existing loop before starting a new one
    if(RAF_HERO){ cancelAnimationFrame(RAF_HERO); RAF_HERO = null; }
    if(resizeHeroFn){ window.removeEventListener('resize', resizeHeroFn); }
    var ctx = c.getContext('2d');
    var W2, H, pts = [];
    var N = window.innerWidth < 768 ? 40 : 80;

    function resize(){
      W2 = c.width  = c.offsetWidth;
      H  = c.height = c.offsetHeight;
    }
    resizeHeroFn = resize;
    resize();
    window.addEventListener('resize', resizeHeroFn, { passive: true });

    pts = [];
    for(var i=0;i<N;i++){
      pts.push({
        x: Math.random()*W2, y: Math.random()*H,
        vx:(Math.random()-.5)*0.4, vy:(Math.random()-.5)*0.4,
        r: Math.random()*2+1
      });
    }

    function draw(){
      ctx.clearRect(0,0,W2,H);
      // draw connections
      for(var i=0;i<pts.length;i++){
        for(var j=i+1;j<pts.length;j++){
          var dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y;
          var d=Math.sqrt(dx*dx+dy*dy);
          if(d<120){
            ctx.beginPath();
            ctx.strokeStyle='rgba(69,180,143,'+(1-d/120)*0.35+')';
            ctx.lineWidth=0.5;
            ctx.moveTo(pts[i].x,pts[i].y);
            ctx.lineTo(pts[j].x,pts[j].y);
            ctx.stroke();
          }
        }
      }
      // draw dots
      pts.forEach(function(p){
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle='rgba(69,180,143,0.55)';
        ctx.fill();
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<0||p.x>W2) p.vx*=-1;
        if(p.y<0||p.y>H)  p.vy*=-1;
      });
      RAF_HERO = requestAnimationFrame(draw);
    }
    RAF_HERO = requestAnimationFrame(draw);
  }

  /* ── CONTACT CANVAS — mesh triangles ── */
  function initContCanvas(){
    var c = document.getElementById('cont-canvas');
    if(!c) return;
    // cancel any existing loop before starting a new one
    if(RAF_CONT){ cancelAnimationFrame(RAF_CONT); RAF_CONT = null; }
    if(resizeContFn){ window.removeEventListener('resize', resizeContFn); }
    var ctx = c.getContext('2d');
    var W2, H, pts = [];
    var N = window.innerWidth < 768 ? 20 : 40;

    function resize(){
      var wrap = c.closest('.cont-page-wrap') || c.parentElement;
      W2 = c.width  = wrap.offsetWidth;
      H  = c.height = wrap.offsetHeight;
    }
    resizeContFn = resize;
    resize();
    window.addEventListener('resize', resizeContFn, { passive: true });

    pts = [];
    for(var i=0;i<N;i++){
      pts.push({
        x:Math.random()*W2, y:Math.random()*H,
        vx:(Math.random()-.5)*0.3, vy:(Math.random()-.5)*0.3
      });
    }

    function draw2(){
      ctx.clearRect(0,0,W2,H);
      for(var i=0;i<pts.length;i++){
        for(var j=i+1;j<pts.length;j++){
          var dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y;
          var d=Math.sqrt(dx*dx+dy*dy);
          if(d<160){
            ctx.beginPath();
            ctx.strokeStyle='rgba(69,180,143,'+(1-d/160)*0.25+')';
            ctx.lineWidth=0.8;
            ctx.moveTo(pts[i].x,pts[i].y);
            ctx.lineTo(pts[j].x,pts[j].y);
            ctx.stroke();
          }
        }
        ctx.beginPath();
        ctx.arc(pts[i].x,pts[i].y,2,0,Math.PI*2);
        ctx.fillStyle='rgba(69,180,143,0.4)';
        ctx.fill();
        pts[i].x+=pts[i].vx; pts[i].y+=pts[i].vy;
        if(pts[i].x<0||pts[i].x>W2) pts[i].vx*=-1;
        if(pts[i].y<0||pts[i].y>H)  pts[i].vy*=-1;
      }
      RAF_CONT = requestAnimationFrame(draw2);
    }
    RAF_CONT = requestAnimationFrame(draw2);
  }

  /* ── CIRCUIT LINES — clientes section ── */
  function initCircuit(){
    var bg = document.getElementById('circuitBg');
    if(!bg) return;
    var lines=[], DOT_R=3;
    var COLS=['rgba(69,180,143,0.22)','rgba(2,99,77,0.18)','rgba(69,180,143,0.15)'];

    function spawnLine(){
      var isH = Math.random()>0.4;
      var el = document.createElement('div');
      el.className='circuit-line '+(isH?'h':'v');
      var pos = Math.random()*100;
      var delay = Math.random()*8;
      var dur = 4+Math.random()*6;
      el.style.cssText=(isH
        ? 'top:'+pos+'%;'
        : 'left:'+pos+'%;')
        +'animation-delay:'+delay+'s;animation-duration:'+dur+'s;'
        +'background:'+COLS[Math.floor(Math.random()*COLS.length)]+';';
      // dot at end
      var dot=document.createElement('div');
      dot.style.cssText='position:absolute;width:5px;height:5px;border-radius:50%;background:rgba(69,180,143,0.5);box-shadow:0 0 8px 2px rgba(69,180,143,0.4);'
        +(isH?'right:-2px;top:-2px;':'bottom:-2px;left:-2px;');
      el.appendChild(dot);
      bg.appendChild(el);
      lines.push(el);
      if(lines.length>30){ bg.removeChild(lines.shift()); }
    }

    for(var i=0;i<12;i++) spawnLine();
    setInterval(spawnLine, 800);
  }

  /* ── GLOW NODES — values section ── */
  function initGlowNodes(){
    var wrap = document.getElementById('glowNodes');
    if(!wrap) return;
    var parent = wrap.parentElement;
    var W2=parent.offsetWidth, H=parent.offsetHeight;
    for(var i=0;i<12;i++){
      var n=document.createElement('div');
      n.className='glow-node';
      var dur=2+Math.random()*4, delay=Math.random()*4;
      n.style.cssText='left:'+Math.random()*100+'%;top:'+Math.random()*100+'%;animation-duration:'+dur+'s;animation-delay:'+delay+'s;';
      wrap.appendChild(n);
    }
  }

  /* ── DATA STREAMS — proceso section ── */
  function initDataStreams(){
    var wrap=document.getElementById('dataStreams');
    if(!wrap) return;
    var parent=wrap.parentElement;
    var W2=parent.offsetWidth;
    var COLS2=['rgba(69,180,143,0.3)','rgba(2,99,77,0.25)','rgba(69,180,143,0.15)'];
    var count=Math.max(6, Math.floor(W2/80));
    for(var i=0;i<count;i++){
      var s=document.createElement('div');
      s.className='data-stream';
      var dur=3+Math.random()*4, delay=Math.random()*5;
      s.style.cssText='left:'+((i/(count-1))*100)+'%;animation-duration:'+dur+'s;';
      s.style.setProperty('--stream-color', COLS2[i%COLS2.length]);
      // gradient color per stream
      s.style.cssText+='';
      // override the ::before color via inline child
      var inner=document.createElement('span');
      inner.style.cssText='display:block;position:absolute;top:-40%;left:0;width:100%;height:40%;background:linear-gradient(to bottom,transparent,'+COLS2[i%COLS2.length]+',transparent);animation:stream-fall '+(3+Math.random()*4)+'s '+(Math.random()*5)+'s linear infinite;';
      s.appendChild(inner);
      wrap.appendChild(s);
    }
  }

  /* ── INIT on page load ── */
  window.addEventListener('load', function(){
    initHeroCanvas();
    initContCanvas();
    initCircuit();
    initGlowNodes();
    initDataStreams();
  });

  /* ── RE-INIT canvas when switching pages ── */
  var origGoPage = window.goPage;
  // patch goPage to re-init canvases after page switch
  window._postPageInit = function(name){
    setTimeout(function(){
      if(name==='inicio') initHeroCanvas();
      if(name==='contacto') initContCanvas();
      if(name==='nosotros'){
        initGlowNodes();
        initDataStreams();
      }
    }, 100);
  };

})();


/* ── SERVICIOS NAV DROPDOWN ── */
(function(){
  var btn  = document.getElementById('navServBtn');
  var drop = document.getElementById('servDropdown');
  if(!btn || !drop) return;

  window.closeServDropdown = function(){
    drop.classList.remove('open');
    btn.setAttribute('aria-expanded','false');
  };
  function openServDropdown(){
    drop.classList.add('open');
    btn.setAttribute('aria-expanded','true');
  }
  window.toggleServDropdown = function(e){
    e.stopPropagation();
    drop.classList.contains('open') ? closeServDropdown() : openServDropdown();
  };

  // Close when clicking anywhere outside the dropdown
  document.addEventListener('click', function(e){
    if(!btn.closest('.nav-dropdown-wrap').contains(e.target)) closeServDropdown();
  });

  // Close with Escape key
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') closeServDropdown();
  });

  // Mobile — Servicios expand/collapse
  var mobToggle = document.getElementById('mobSrvToggle');
  var mobList   = document.getElementById('mobSrvList');
  if(mobToggle && mobList){
    mobToggle.addEventListener('click', function(e){
      e.stopPropagation();
      var isOpen = mobList.classList.contains('open');
      mobList.classList.toggle('open', !isOpen);
      mobToggle.setAttribute('aria-expanded', (!isOpen).toString());
    });
  }

  // Patch goPage: close dropdown + sync Servicios active state
  var _origGoPageDrop = window.goPage;
  window.goPage = function(name){
    _origGoPageDrop(name);
    closeServDropdown();
  };
})();

/* ── TIMECODE COUNTER ── */
(function(){
  var tc = document.getElementById('hero-tc');
  if(!tc) return;
  var f=0, fps=24;
  setInterval(function(){
    f++;
    var s=Math.floor(f/fps), m=Math.floor(s/60), h=Math.floor(m/60);
    var ff=f%fps, ss=s%60, mm=m%60;
    tc.textContent = 'TC '
      + (h<10?'0':'')+h+':'
      + (mm<10?'0':'')+mm+':'
      + (ss<10?'0':'')+ss+':'
      + (ff<10?'0':'')+ff;
  }, 1000/fps);
})();

/* ── SCROLL PROGRESS BAR ── */
(function(){
  var bar = document.getElementById('scroll-progress');
  if(!bar) return;
  var ticking = false;

  function updateProgress(){
    var scrollTop  = window.scrollY || document.documentElement.scrollTop;
    var docHeight  = document.documentElement.scrollHeight - window.innerHeight;
    var progress   = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
    bar.style.width = progress.toFixed(2) + '%';
    bar.setAttribute('aria-valuenow', Math.round(progress));
    ticking = false;
  }

  window.addEventListener('scroll', function(){
    if(!ticking){
      requestAnimationFrame(updateProgress);
      ticking = true;
    }
  }, { passive: true });

  // Reset on page change — pages are SPA-style, scroll resets to 0
  var _origGoPagePB = window.goPage;
  window.goPage = function(name){
    _origGoPagePB(name);
    bar.style.width = '0%';
    bar.setAttribute('aria-valuenow', 0);
  };

  updateProgress();
})();

/* ── FREQUENCY BARS ── */
(function(){
  var wrap = document.getElementById('hero-freq');
  if(!wrap) return;
  var BARS = 18;
  var bars = [];
  for(var i=0; i<BARS; i++){
    var b = document.createElement('div');
    b.className = 'freq-bar';
    var dur = (0.4 + Math.random()*0.7).toFixed(2);
    var delay = (Math.random()*0.6).toFixed(2);
    b.style.cssText = 'animation-duration:'+dur+'s;animation-delay:'+delay+'s;height:'+Math.floor(Math.random()*28+6)+'px;';
    wrap.appendChild(b);
    bars.push(b);
  }
  /* randomise heights continuously */
  setInterval(function(){
    bars.forEach(function(b){
      b.style.height = Math.floor(Math.random()*28+6)+'px';
    });
  }, 600);
})();
