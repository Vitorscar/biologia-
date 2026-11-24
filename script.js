/* ===== DADOS: edite aqui para adicionar conteúdos, cards e questões ===== */
const MODS = {
  cito:  {n:'Citologia', i:'🔬'},
  gen:   {n:'Genética', i:'🧬'},
  micro: {n:'Microbiologia', i:'🦠'}
};
const TOPICS = [
 {id:'c1',m:'cito',t:'Teoria celular e tipos de células',
  h:`<p>Todos os seres vivos são formados por <mark>células</mark>, a unidade estrutural e funcional da vida, e toda célula vem de outra célula.</p>
  <table><tr><th></th><th>Procarionte</th><th>Eucarionte</th></tr><tr><td>Núcleo</td><td>Sem núcleo delimitado (nucleoide)</td><td>Núcleo com membrana</td></tr><tr><td>Organelas membranosas</td><td>Ausentes</td><td>Presentes</td></tr><tr><td>Exemplos</td><td>Bactérias e arqueias</td><td>Animais, plantas, fungos, protistas</td></tr></table>`,
  trap:'Bactérias não têm mitocôndrias nem núcleo, mas têm ribossomos.'},
 {id:'c2',m:'cito',t:'Organelas e membrana plasmática',
  h:`<table><tr><th>Organela</th><th>Função</th></tr><tr><td>Mitocôndria</td><td>Respiração celular e ATP</td></tr><tr><td>Ribossomo</td><td>Síntese de proteínas</td></tr><tr><td>Lisossomo</td><td>Digestão intracelular</td></tr><tr><td>Complexo de Golgi</td><td>Modifica e empacota substâncias</td></tr><tr><td>Retículo rugoso / liso</td><td>Proteínas / lipídios e detoxificação</td></tr><tr><td>Cloroplasto</td><td>Fotossíntese</td></tr></table>
  <p>A <mark>membrana plasmática</mark> é uma bicamada de fosfolipídios com proteínas e tem <mark>permeabilidade seletiva</mark>.</p>`,
  trap:'Ribossomos não possuem membrana.'},
 {id:'c3',m:'cito',t:'Osmose e transporte celular',
  h:`<ul><li><mark>Difusão simples</mark>: a favor do gradiente, sem ATP.</li><li><mark>Difusão facilitada</mark>: com proteínas, sem gasto direto de ATP.</li><li><mark>Transporte ativo</mark>: contra o gradiente, com ATP.</li><li>Endocitose (entra) e exocitose (sai).</li></ul>
  <div class="diagram"><span>Meio hipotônico</span>→ água entra <span>Meio hipertônico</span>→ água sai <span>Isotônico</span>→ sem fluxo líquido</div>`,
  trap:'Osmose é o movimento da água, não do soluto.'},
 {id:'c4',m:'cito',t:'Respiração, fotossíntese e divisão celular',
  h:`<div class="diagram"><span>Glicose + O₂</span>→<span>CO₂ + H₂O + ATP</span></div>
  <p>Glicólise: citoplasma. Ciclo de Krebs: matriz mitocondrial. Cadeia respiratória: membrana interna da mitocôndria.</p>
  <div class="diagram"><span>CO₂ + H₂O + luz</span>→<span>glicose + O₂</span></div>
  <p>Fase clara: tilacoides. Ciclo de Calvin: estroma.</p>
  <table><tr><th>Mitose</th><th>Meiose</th></tr><tr><td>2 células semelhantes; crescimento e regeneração</td><td>Células haploides; gametas e variabilidade (<mark>crossing-over</mark> na prófase I)</td></tr></table>`,
  trap:'Plantas fazem respiração dia e noite; fotossíntese só com luz.'},
 {id:'g1',m:'gen',t:'DNA, RNA e expressão gênica',
  h:`<table><tr><th></th><th>DNA</th><th>RNA</th></tr><tr><td>Fita</td><td>Dupla</td><td>Simples</td></tr><tr><td>Açúcar</td><td>Desoxirribose</td><td>Ribose</td></tr><tr><td>Bases</td><td>A, T, C, G</td><td>A, U, C, G</td></tr></table>
  <div class="diagram"><span>DNA</span>→ transcrição <span>RNA</span>→ tradução <span>Proteína</span></div>`,
  trap:'Replicação copia o DNA; transcrição faz RNA; tradução faz proteína.'},
 {id:'g2',m:'gen',t:'Termos básicos e Leis de Mendel',
  h:`<p><mark>Genótipo</mark> é a constituição genética; <mark>fenótipo</mark> é a característica observável. Homozigoto: AA ou aa. Heterozigoto: Aa.</p>
  <p><b>1ª Lei:</b> os dois alelos se separam na formação dos gametas. Aa × Aa → 25% AA, 50% Aa, 25% aa (75% dominante).</p>
  <p><b>2ª Lei:</b> genes não ligados segregam independentemente. AaBb × AaBb → <mark>9:3:3:1</mark>.</p>`,
  trap:'Dominante não significa mais comum nem mais forte.'},
 {id:'g3',m:'gen',t:'Sistema ABO, Rh e herança ligada ao sexo',
  h:`<table><tr><th>Genótipo</th><th>Tipo</th></tr><tr><td>IᴬIᴬ ou Iᴬi</td><td>A</td></tr><tr><td>IᴮIᴮ ou Iᴮi</td><td>B</td></tr><tr><td>IᴬIᴮ</td><td>AB (codominância)</td></tr><tr><td>ii</td><td>O</td></tr></table>
  <p>O sistema Rh é independente do ABO. Herança <mark>ligada ao sexo</mark>: genes nos cromossomos sexuais.</p>`,
  trap:'Fenótipo depende do genótipo e do ambiente.'},
 {id:'g4',m:'gen',t:'Mutações e biotecnologia',
  h:`<ul><li><mark>Mutação</mark>: pode ser neutra, prejudicial ou benéfica.</li><li><mark>Transgênicos</mark>: receberam material genético por engenharia genética.</li><li><mark>PCR</mark>: amplifica segmentos de DNA.</li><li>Clonagem gera cópias geneticamente semelhantes; <mark>CRISPR</mark> edita genes.</li></ul>`,
  trap:'Irmãos diferem geneticamente por causa da meiose e da fecundação.'},
 {id:'m1',m:'micro',t:'Vírus e bactérias',
  h:`<p>Vírus são <mark>acelulares</mark>: material genético (DNA ou RNA) e capsídeo proteico, e são parasitas intracelulares obrigatórios.</p>
  <p>Bactérias são <mark>procariontes</mark> unicelulares, se reproduzem por divisão binária e podem ter parede com peptidoglicano.</p>
  <p>Vírus: dengue, gripe, AIDS, sarampo. Bactérias: tuberculose, cólera, tétano, leptospirose.</p>`,
  trap:'Antibióticos não combatem vírus.'},
 {id:'m2',m:'micro',t:'Fungos e protozoários',
  h:`<p>Fungos são eucariontes heterotróficos por absorção, com parede de <mark>quitina</mark>.</p>
  <table><tr><th>Doença</th><th>Agente</th><th>Transmissão</th></tr><tr><td>Malária</td><td>Plasmodium</td><td>Mosquito Anopheles</td></tr><tr><td>Chagas</td><td>Trypanosoma cruzi</td><td>Fezes do barbeiro</td></tr><tr><td>Leishmaniose</td><td>Leishmania</td><td>Mosquito-palha</td></tr><tr><td>Amebíase/Giardíase</td><td>Entamoeba/Giardia</td><td>Água e alimentos</td></tr></table>`,
  trap:'Fungos e protozoários são eucariontes; bactérias não.'},
 {id:'m3',m:'micro',t:'Vacinas, antibióticos e resistência',
  h:`<p><mark>Vacinas</mark> estimulam o sistema imune e criam memória imunológica.</p>
  <div class="diagram"><span>Variabilidade</span>→<span>Antibiótico mata sensíveis</span>→<span>Resistentes sobrevivem</span>→<span>Aumentam na população</span></div>
  <p>Isso é <mark>seleção natural</mark>. O uso inadequado de antibióticos favorece a resistência.</p>`,
  trap:'O antibiótico não cria a mutação: ele seleciona bactérias já resistentes.'},
 {id:'m4',m:'micro',t:'Saneamento básico e saúde pública',
  h:`<ul><li>Água tratada reduz doenças de transmissão hídrica.</li><li>Esgoto tratado reduz a contaminação ambiental.</li><li>Controle de vetores reduz dengue, malária e leishmaniose.</li><li>Higiene e vacinação previnem doenças.</li></ul>`,
  trap:'Questões do ENEM ligam o conteúdo a políticas públicas e gráficos.'}
];
const CARDS = [
 ['Cél. procarionte: onde fica o DNA?','No nucleoide (sem núcleo delimitado).','cito'],
 ['Função da mitocôndria','Respiração celular e produção de ATP.','cito'],
 ['Função do ribossomo','Síntese de proteínas (não tem membrana).','cito'],
 ['Meio hipotônico','A água tende a entrar na célula.','cito'],
 ['Onde ocorre o ciclo de Krebs?','Na matriz mitocondrial.','cito'],
 ['Crossing-over','Troca de segmentos entre homólogos na prófase I da meiose.','cito'],
 ['Diferença DNA × RNA (bases)','DNA: A, T, C, G. RNA: A, U, C, G.','gen'],
 ['Fluxo da informação genética','DNA → RNA → proteína.','gen'],
 ['Aa × Aa: proporção genotípica','25% AA, 50% Aa, 25% aa.','gen'],
 ['Genótipo de sangue tipo O','ii.','gen'],
 ['Qual a função da PCR?','Amplificar segmentos de DNA.','gen'],
 ['Proporção clássica da 2ª Lei','9:3:3:1 (AaBb × AaBb).','gen'],
 ['Vírus: por que são acelulares?','Não têm células; só material genético e capsídeo.','micro'],
 ['Antibiótico age em vírus?','Não. Age em bactérias.','micro'],
 ['Parede dos fungos','Formada principalmente por quitina.','micro'],
 ['Transmissor da malária','Mosquito Anopheles (Plasmodium).','micro'],
 ['Como surge a resistência bacteriana?','Seleção natural: resistentes sobrevivem e se multiplicam.','micro'],
 ['Efeito da vacina','Gera memória imunológica.','micro']
].map((c,i)=>({id:'f'+i,f:c[0],b:c[1],m:c[2]}));
const QUIZ = [
 {id:'q1',m:'cito',q:'Uma bactéria e uma célula animal foram comparadas. Qual característica é exclusiva da célula animal?',o:['Presença de ribossomos','Material genético DNA','Membrana plasmática','Núcleo delimitado por membrana','Citoplasma'],a:3,e:'Só eucariontes têm núcleo delimitado. Os demais itens existem nos dois tipos.'},
 {id:'q2',m:'cito',q:'Uma folha de alface é colocada em água com muito sal. As células murcham porque:',o:['A água entra por osmose','A água sai por osmose','O sal sai ativamente','O ATP é produzido','O DNA se replica'],a:1,e:'O meio é hipertônico, então a água sai da célula.'},
 {id:'q3',m:'cito',q:'Uma célula muscular de atleta tem muitas mitocôndrias porque precisa de:',o:['Mais síntese de lipídios','Mais ATP','Mais digestão intracelular','Mais fotossíntese','Mais parede celular'],a:1,e:'Mitocôndrias fazem respiração celular e produzem ATP.'},
 {id:'q4',m:'cito',q:'A variabilidade genética dos gametas está relacionada principalmente a:',o:['Mitose','Meiose com crossing-over','Osmose','Fotossíntese','Glicólise'],a:1,e:'O crossing-over na meiose recombina segmentos de cromossomos homólogos.'},
 {id:'q5',m:'cito',q:'Durante a noite, uma planta:',o:['Só faz fotossíntese','Só faz respiração','Faz respiração celular','Para de consumir energia','Perde as mitocôndrias'],a:2,e:'A respiração ocorre sempre; a fotossíntese depende de luz.'},
 {id:'q6',m:'gen',q:'Um casal Aa × Aa tem filhos. A probabilidade de uma criança aa é:',o:['0%','25%','50%','75%','100%'],a:1,e:'Aa × Aa gera 25% AA, 50% Aa e 25% aa.'},
 {id:'q7',m:'gen',q:'Um homem de sangue tipo A (Iᴬi) e uma mulher tipo B (Iᴮi) podem ter filho de qual tipo?',o:['Apenas A','Apenas B','Apenas AB','Somente O','A, B, AB ou O'],a:4,e:'Os gametas Iᴬ ou i e Iᴮ ou i geram IᴬIᴮ, Iᴬi, Iᴮi e ii.'},
 {id:'q8',m:'gen',q:'A técnica que produz milhões de cópias de um trecho de DNA é:',o:['Osmose','PCR','Mitose','Vacinação','Fotossíntese'],a:1,e:'A PCR amplifica segmentos de DNA.'},
 {id:'q9',m:'gen',q:'Gêmeos idênticos, criados em ambientes diferentes, mostram alturas distintas. Isso ocorre porque:',o:['O genótipo muda por dominância','O fenótipo depende também do ambiente','Eles têm genes diferentes','A meiose falhou','O DNA vira RNA'],a:1,e:'Fenótipo resulta do genótipo e do ambiente.'},
 {id:'q10',m:'gen',q:'Na síntese de proteínas, o RNA mensageiro é lido pelos:',o:['Lisossomos','Ribossomos','Cloroplastos','Centríolos','Vacúolos'],a:1,e:'A tradução ocorre nos ribossomos.'},
 {id:'q11',m:'micro',q:'Uma pessoa com gripe toma antibiótico por conta própria. O medicamento é:',o:['Eficaz, pois mata vírus','Ineficaz, pois vírus não são bactérias','Uma vacina','Um fungicida','Um antiprotozoário'],a:1,e:'Antibióticos atuam em bactérias, não em vírus.'},
 {id:'q12',m:'micro',q:'O uso inadequado de antibióticos favorece bactérias resistentes por:',o:['Mutação dirigida pelo remédio','Seleção natural das já resistentes','Perda de DNA','Fotossíntese','Conjugação de vírus'],a:1,e:'Sensíveis morrem; resistentes sobrevivem e se reproduzem.'},
 {id:'q13',m:'micro',q:'A malária é causada por:',o:['Vírus','Bactéria','Fungo','Protozoário do gênero Plasmodium','Verme'],a:3,e:'O agente é o protozoário Plasmodium, transmitido pelo Anopheles.'},
 {id:'q14',m:'micro',q:'A vacina protege porque:',o:['Mata todas as bactérias','Cria memória imunológica','Substitui antibióticos','Remove o vírus do ar','Altera o DNA do paciente'],a:1,e:'Estimula o sistema imune e gera células de memória.'},
 {id:'q15',m:'micro',q:'Qual medida reduz doenças de transmissão hídrica?',o:['Esgoto a céu aberto','Água tratada e esgoto tratado','Mais antibióticos','Evitar vacinas','Descarte de lixo em rios'],a:1,e:'Saneamento reduz a contaminação da água por microrganismos.'}
];

/* ===== ESTADO E ARMAZENAMENTO ===== */
const KEY='biologiaEnemV1';
const blank=()=>({name:'',theme:'light',studied:{},fav:{},rate:{},cardFav:{},answered:0,correct:0,wrong:[],xp:0,streak:0,last:'',daily:{d:'',n:0},badges:{}});
let S=Object.assign(blank(),JSON.parse(localStorage.getItem(KEY)||'{}'));
const save=()=>localStorage.setItem(KEY,JSON.stringify(S));
const $=s=>document.querySelector(s);
const app=$('#app');
const dayStr=(d=new Date())=>d.toISOString().slice(0,10);
const level=()=>Math.floor(S.xp/100)+1;
const pct=(a,b)=>b?Math.round(a/b*100):0;
const modStudied=m=>TOPICS.filter(t=>t.m===m&&S.studied[t.id]).length;
const modTotal=m=>TOPICS.filter(t=>t.m===m).length;
const DAILY_GOAL=5;

function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove('show'),2200)}

/* Registra atividade: sequência, meta diária e XP */
function activity(xp){
  const today=dayStr();
  if(S.last!==today){const y=new Date();y.setDate(y.getDate()-1);S.streak=(S.last===dayStr(y))?S.streak+1:1;S.last=today}
  if(S.daily.d!==today)S.daily={d:today,n:0};
  S.daily.n++;S.xp+=xp;checkBadges();save();
}
const BADGES=[
 ['b1','Primeiro passo','🌱','Estude 1 conteúdo',()=>Object.keys(S.studied).length>=1],
 ['b2','Curioso','❓','Responda 10 questões',()=>S.answered>=10],
 ['b3','Precisão','🎯','80% de acertos (mín. 10 questões)',()=>S.answered>=10&&pct(S.correct,S.answered)>=80],
 ['b4','Constância','🔥','3 dias seguidos',()=>S.streak>=3],
 ['b5','Medalha Citologia','🔬','Conclua Citologia',()=>modStudied('cito')===modTotal('cito')],
 ['b6','Medalha Genética','🧬','Conclua Genética',()=>modStudied('gen')===modTotal('gen')],
 ['b7','Medalha Microbiologia','🦠','Conclua Microbiologia',()=>modStudied('micro')===modTotal('micro')]
];
function checkBadges(){BADGES.forEach(b=>{if(!S.badges[b[0]]&&b[4]()){S.badges[b[0]]=1;toast('Conquista: '+b[1]+' '+b[2])}})}

/* ===== NAVEGAÇÃO ===== */
const views={home,modules,cards,quiz,profile};
function go(v,arg){
  document.querySelectorAll('nav button').forEach(b=>b.classList.toggle('on',b.dataset.view===v));
  app.innerHTML=(views[v]||home)(arg);app.focus();window.scrollTo(0,0);
}
document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>go(b.dataset.view));

/* ===== INÍCIO ===== */
function home(){
  const done=Object.keys(S.studied).length, hr=new Date().getHours();
  const hi=hr<12?'Bom dia':hr<18?'Boa tarde':'Boa noite';
  const total=pct(done,TOPICS.length);
  const next=TOPICS.find(t=>!S.studied[t.id]);
  const hardCards=CARDS.filter(c=>S.rate[c.id]==='Errei'||S.rate[c.id]==='Difícil').length;
  const goal=Math.min(S.daily.d===dayStr()?S.daily.n:0,DAILY_GOAL);
  return `<h1>Biologia ENEM</h1><p>${hi}${S.name?', '+S.name:', estudante'}! Nível ${level()} · ${S.xp} XP</p>
  <div class="card"><div class="row"><b>Progresso geral</b><span class="tag">${total}%</span></div><div class="bar"><i style="width:${total}%"></i></div>
  <p class="stat">Meta de hoje: ${goal}/${DAILY_GOAL} atividades</p><div class="bar"><i style="width:${goal/DAILY_GOAL*100}%"></i></div>
  <p><button class="btn" data-go="${next?'topic':'quiz'}" data-arg="${next?next.id:''}">${next?'Continuar estudando':'Fazer um quiz'}</button></p></div>
  <div class="grid g4"><div class="card stat"><b>${done}/${TOPICS.length}</b>conteúdos</div><div class="card stat"><b>${S.answered}</b>questões</div><div class="card stat"><b>${pct(S.correct,S.answered)}%</b>acertos</div><div class="card stat"><b>🔥 ${S.streak}</b>dias seguidos</div></div>
  <h2>Módulos</h2><div class="grid g3">${Object.keys(MODS).map(m=>`<button class="card mod" data-go="list" data-arg="${m}"><h3>${MODS[m].i} ${MODS[m].n}</h3><div class="bar"><i style="width:${pct(modStudied(m),modTotal(m))}%"></i></div><p class="stat">${modStudied(m)}/${modTotal(m)} estudados</p></button>`).join('')}</div>
  <h2>Revisar hoje</h2><div class="card"><p>🃏 ${hardCards} flashcard(s) marcados como Errei ou Difícil</p><p>✏️ ${S.wrong.length} questão(ões) para revisar</p>
  <div class="row"><button class="btn ghost" data-go="deck" data-arg="wrong" ${hardCards?'':'disabled'}>Revisar cards</button><button class="btn ghost" data-go="startQuiz" data-arg="errors" ${S.wrong.length?'':'disabled'}>Revisar erros</button></div></div>`;
}

/* ===== CONTEÚDOS ===== */
function modules(){return `<h1>Conteúdos</h1>`+Object.keys(MODS).map(m=>`<button class="card mod" data-go="list" data-arg="${m}"><h3>${MODS[m].i} ${MODS[m].n}</h3><p class="stat">${modStudied(m)}/${modTotal(m)} estudados</p></button>`).join('')}
function list(m){return `<p><button class="btn ghost" data-go="modules">← Conteúdos</button></p><h1>${MODS[m].i} ${MODS[m].n}</h1>`+TOPICS.filter(t=>t.m===m).map(t=>`<button class="card mod" data-go="topic" data-arg="${t.id}"><b>${S.studied[t.id]?'✅':'⬜'} ${t.t}</b> ${S.fav[t.id]?'⭐':''}</button>`).join('')}
function topic(id){
  const t=TOPICS.find(x=>x.id===id);
  return `<p><button class="btn ghost" data-go="list" data-arg="${t.m}">← ${MODS[t.m].n}</button></p><h1>${t.t}</h1><div class="card">${t.h}
  <details class="trap" open><summary>⚠️ Pegadinha do ENEM</summary><p>${t.trap}</p></details></div>
  <div class="row"><button class="btn" data-go="study" data-arg="${id}">${S.studied[id]?'✅ Estudado':'Marcar como estudado'}</button>
  <button class="btn ghost" data-go="fav" data-arg="${id}">${S.fav[id]?'⭐ Nos favoritos':'☆ Adicionar aos favoritos'}</button></div>`;
}
function study(id){
  if(!S.studied[id]){S.studied[id]=1;activity(20);toast('+20 XP · conteúdo estudado')}else{delete S.studied[id];save()}
  app.innerHTML=topic(id)
}

/* ===== FLASHCARDS ===== */
let FC={deck:[],i:0,flip:false};
function cards(){
  const n=k=>CARDS.filter(k).length;
  return `<h1>Flashcards</h1><div class="card"><p>Escolha um baralho:</p><div class="row">
  <button class="btn" data-go="deck" data-arg="all">Todos (${CARDS.length})</button>
  ${Object.keys(MODS).map(m=>`<button class="btn ghost" data-go="deck" data-arg="${m}">${MODS[m].n} (${n(c=>c.m===m)})</button>`).join('')}
  <button class="btn ghost" data-go="deck" data-arg="favs" ${n(c=>S.cardFav[c.id])?'':'disabled'}>⭐ Favoritos (${n(c=>S.cardFav[c.id])})</button>
  <button class="btn ghost" data-go="deck" data-arg="wrong" ${n(c=>S.rate[c.id]==='Errei')?'':'disabled'}>Errados (${n(c=>S.rate[c.id]==='Errei')})</button></div></div>`;
}
function startDeck(k){
  FC.deck=CARDS.filter(c=>k==='all'||c.m===k||(k==='favs'&&S.cardFav[c.id])||(k==='wrong'&&(S.rate[c.id]==='Errei'||S.rate[c.id]==='Difícil')));
  FC.i=0;FC.flip=false;renderCard();
}
function renderCard(){
  const c=FC.deck[FC.i];
  if(!c){app.innerHTML=`<div class="card"><h2>Fim do baralho 🎉</h2><button class="btn" data-go="cards">Escolher outro baralho</button></div>`;return}
  app.innerHTML=`<p><button class="btn ghost" data-go="cards">← Baralhos</button> <span class="tag">${FC.i+1} / ${FC.deck.length}</span></p>
  <div class="flip ${FC.flip?'on':''}" data-go="flip" tabindex="0" role="button" aria-label="Virar cartão"><div class="in"><div class="face">${c.f}</div><div class="face back">${c.b}</div></div></div>
  <div class="row"><button class="btn ghost" data-go="cfav">${S.cardFav[c.id]?'⭐ Favorito':'☆ Favoritar'}</button><button class="btn ghost" data-go="cnav" data-arg="-1" ${FC.i?'':'disabled'}>←</button><button class="btn ghost" data-go="cnav" data-arg="1">→</button></div>
  <p>Como foi?</p><div class="row">${['Errei','Difícil','Bom','Fácil'].map(g=>`<button class="btn ${g==='Errei'?'bad':''}" data-go="rate" data-arg="${g}">${g}</button>`).join('')}</div>`;
}
function rate(g){const c=FC.deck[FC.i];S.rate[c.id]=g;activity({Errei:1,Difícil:2,Bom:4,Fácil:5}[g]);FC.i++;FC.flip=false;renderCard()}

/* ===== QUIZ ===== */
let Q={list:[],i:0,score:0,sel:null,done:false,mod:'all'};
function quiz(){
  return `<h1>Quiz estilo ENEM</h1><div class="card"><p>Quantidade de questões:</p><div class="row">${[5,10,15].map(n=>`<button class="btn" data-go="startQuiz" data-arg="${n}">${n} questões</button>`).join('')}</div>
  <p>Por módulo:</p><div class="row">${Object.keys(MODS).map(m=>`<button class="btn ghost" data-go="startQuiz" data-arg="${m}">${MODS[m].n}</button>`).join('')}
  <button class="btn ghost" data-go="startQuiz" data-arg="errors" ${S.wrong.length?'':'disabled'}>Revisão de erros (${S.wrong.length})</button></div></div>`;
}
function startQuiz(k){
  let pool=[...QUIZ];
  if(k==='errors')pool=pool.filter(q=>S.wrong.includes(q.id));
  else if(MODS[k])pool=pool.filter(q=>q.m===k);
  pool.sort(()=>Math.random()-.5);
  Q={list:pool.slice(0,+k||pool.length),i:0,score:0,sel:null,done:false};
  renderQ();
}
function renderQ(){
  if(Q.i>=Q.list.length){
    app.innerHTML=`<div class="card"><h2>Resultado: ${Q.score}/${Q.list.length}</h2><p>${pct(Q.score,Q.list.length)}% de acertos nesta rodada.</p><button class="btn" data-go="quiz">Novo quiz</button></div>`;return}
  const q=Q.list[Q.i];
  app.innerHTML=`<div class="row"><span class="tag">Questão ${Q.i+1}/${Q.list.length}</span><span class="tag">Pontos: ${Q.score}</span></div>
  <div class="bar"><i style="width:${Q.i/Q.list.length*100}%"></i></div>
  <div class="card"><p><b>${q.q}</b></p>${q.o.map((o,k)=>{
    let cls=Q.sel===k?'sel':'';
    if(Q.done)cls=k===q.a?'right':(k===Q.sel?'wrong':'');
    return `<button class="opt ${cls}" data-go="pick" data-arg="${k}" ${Q.done?'disabled':''}>${'ABCDE'[k]}) ${o}</button>`}).join('')}
  ${Q.done?`<p><b>${Q.sel===q.a?'✅ Correto!':'❌ Incorreto.'}</b> ${q.e}</p><button class="btn" data-go="nextQ">${Q.i+1<Q.list.length?'Próxima':'Ver resultado'}</button>`
  :`<button class="btn" data-go="answer" ${Q.sel===null?'disabled':''}>Responder</button>`}</div>`;
}
function answer(){
  const q=Q.list[Q.i],ok=Q.sel===q.a;Q.done=true;S.answered++;
  if(ok){S.correct++;Q.score++;S.wrong=S.wrong.filter(x=>x!==q.id)}else if(!S.wrong.includes(q.id))S.wrong.push(q.id);
  activity(ok?10:2);renderQ();
}

/* ===== CONQUISTAS / PERFIL ===== */
function profile(){
  return `<h1>Conquistas</h1><div class="card"><p>Nível <b>${level()}</b> · ${S.xp} XP</p><div class="bar"><i style="width:${S.xp%100}%"></i></div>
  <p class="stat">${100-S.xp%100} XP para o próximo nível</p></div>
  <div class="grid">${BADGES.map(b=>`<div class="card badge ${S.badges[b[0]]?'got':''}"><div style="font-size:2rem">${b[2]}</div><b>${b[1]}</b><div class="stat">${b[3]}</div></div>`).join('')}</div>
  <div class="card"><p><label>Seu nome: <input id="name" value="${S.name}" maxlength="20" style="padding:8px;border-radius:10px;border:1px solid var(--line);background:var(--bg);color:var(--ink)"></label></p>
  <div class="row"><button class="btn ghost" data-go="theme">${S.theme==='dark'?'☀️ Modo claro':'🌙 Modo escuro'}</button><button class="btn bad" data-go="reset">Limpar progresso</button></div></div>`;
}

/* ===== EVENTOS (delegação: um único listener para os botões) ===== */
app.addEventListener('click',e=>{
  const el=e.target.closest('[data-go]');if(!el||el.disabled)return;
  const a=el.dataset.go,x=el.dataset.arg;
  const A={
    modules:()=>go('modules'),quiz:()=>go('quiz'),cards:()=>go('cards'),
    list:()=>{app.innerHTML=list(x);window.scrollTo(0,0)},
    topic:()=>{app.innerHTML=topic(x);window.scrollTo(0,0)},
    'topic-view':()=>{app.innerHTML=topic(x)},
    study:()=>study(x),
    fav:()=>{S.fav[x]?delete S.fav[x]:S.fav[x]=1;save();app.innerHTML=topic(x)},
    deck:()=>startDeck(x),flip:()=>{FC.flip=!FC.flip;renderCard()},
    cfav:()=>{const c=FC.deck[FC.i];S.cardFav[c.id]?delete S.cardFav[c.id]:S.cardFav[c.id]=1;save();renderCard()},
    cnav:()=>{FC.i=Math.max(0,Math.min(FC.deck.length,FC.i+ +x));FC.flip=false;renderCard()},
    rate:()=>rate(x),startQuiz:()=>startQuiz(x),
    pick:()=>{Q.sel=+x;renderQ()},answer,nextQ:()=>{Q.i++;Q.sel=null;Q.done=false;renderQ()},
    theme:()=>{S.theme=S.theme==='dark'?'light':'dark';applyTheme();save();go('profile')},
    reset:()=>{$('#modal').hidden=false;$('#no').focus()}
  };
  A[a]&&A[a]();
});
app.addEventListener('input',e=>{if(e.target.id==='name'){S.name=e.target.value.trim();save()}});
$('#no').onclick=()=>{$('#modal').hidden=true};
$('#yes').onclick=()=>{S=blank();localStorage.removeItem(KEY);applyTheme();$('#modal').hidden=true;toast('Progresso apagado');go('home')};
document.addEventListener('keydown',e=>{if(e.key==='Escape')$('#modal').hidden=true});
function applyTheme(){document.documentElement.dataset.theme=S.theme}
applyTheme();checkBadges();go('home');
