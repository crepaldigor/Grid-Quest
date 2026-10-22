const LEVELS=[
{t:"Começando pela coluna",d:"Use <code>grid-column-start</code> para mover o bloco até a <b>3ª coluna</b>.",sel:"#a",n:1,sol:"grid-column-start: 3;"},
{t:"Início e fim",d:"<code>grid-column-end</code> diz em qual linha o item termina. Faça o bloco ocupar da coluna 2 até a 4 (termina na linha 5).",sel:"#a",n:1,sol:"grid-column-start: 2;\ngrid-column-end: 5;"},
{t:"Contando de trás",d:"Valores negativos contam a partir do fim. Faça o bloco começar na coluna 1 e terminar na linha <code>-2</code>.",sel:"#a",n:1,sol:"grid-column-start: 1;\ngrid-column-end: -2;"},
{t:"Atalho grid-column",d:"<code>grid-column: início / fim</code> une as duas propriedades. Cubra das colunas 2 a 3.",sel:"#a",n:1,sol:"grid-column: 2 / 4;"},
{t:"Usando span",d:"<code>span N</code> faz o item se estender por N trilhas. Comece na coluna 1 e ocupe 3 colunas.",sel:"#a",n:1,sol:"grid-column: 1 / span 3;"},
{t:"Agora as linhas",d:"<code>grid-row-start</code> funciona igual, mas na vertical. Coloque o bloco na <b>4ª linha</b>.",sel:"#a",n:1,sol:"grid-row-start: 4;"},
{t:"Linha e coluna",d:"Combine <code>grid-row</code> e <code>grid-column</code>: o bloco está na coluna 3, das linhas 2 a 3.",sel:"#a",n:1,sol:"grid-row: 2 / 4;\ngrid-column: 3;"},
{t:"grid-area",d:"<code>grid-area: linha-início / coluna-início / linha-fim / coluna-fim</code>. Cubra a área retangular indicada.",sel:"#a",n:1,sol:"grid-area: 2 / 2 / 5 / 4;"},
{t:"Definindo colunas",d:"Agora você edita o <b>container</b>. Use <code>grid-template-columns</code> para criar 2 colunas de 50%.",sel:".board",n:4,sol:"grid-template-columns: 50% 50%;"},
{t:"A unidade fr",d:"<code>fr</code> divide o espaço livre. Crie duas colunas, a segunda 3x maior que a primeira.",sel:".board",n:4,sol:"grid-template-columns: 1fr 3fr;"},
{t:"Definindo linhas",d:"Use <code>grid-template-rows</code> e <code>grid-template-columns</code>: 2 linhas (1fr 4fr) e 2 colunas iguais.",sel:".board",n:4,sol:"grid-template-rows: 1fr 4fr;\ngrid-template-columns: 1fr 1fr;"},
{t:"Atalho grid-template",d:"<code>grid-template: linhas / colunas</code>. Faça linhas 3fr 1fr e colunas 1fr 2fr. E use <code>gap: 10px</code>!",sel:".board",n:4,sol:"grid-template: 3fr 1fr / 1fr 2fr;\ngap: 10px;"}
,{t:"Fim da linha",d:"<code>grid-row-end</code> define onde o item termina na vertical. Ocupe das linhas 2 a 4.",sel:"#a",n:1,sol:"grid-row-start: 2;\ngrid-row-end: 5;"}
,{t:"De ponta a ponta",d:"<code>1 / -1</code> cobre todas as trilhas. Faça o bloco ocupar a altura toda.",sel:"#a",n:1,sol:"grid-row: 1 / -1;"}
,{t:"Span vertical",d:"Coluna 4, começando na linha 2 e ocupando 3 linhas com <code>span</code>.",sel:"#a",n:1,sol:"grid-row: 2 / span 3;\ngrid-column: 4;"}
,{t:"Span no início",d:"O span também pode vir antes: <code>span 2 / 6</code> termina na linha 6 ocupando 2 colunas.",sel:"#a",n:1,sol:"grid-column: span 2 / 6;"}
,{t:"Faixa no topo",d:"Com <code>grid-area</code>, cubra as duas primeiras linhas inteiras.",sel:"#a",n:1,sol:"grid-area: 1 / 1 / 3 / 6;"}
,{t:"Área com span",d:"<code>grid-area</code> aceita span: comece na linha 3, coluna 2, ocupando 2 linhas e 3 colunas.",sel:"#a",n:1,sol:"grid-area: 3 / 2 / span 2 / span 3;"}
,{t:"Rodapé",d:"Faça o bloco ocupar toda a última linha.",sel:"#a",n:1,sol:"grid-column: 1 / -1;\ngrid-row: 5;"}
,{t:"Cantinho",d:"<code>grid-area</code> com só dois valores define linha e coluna. Vá para o canto inferior direito.",sel:"#a",n:1,sol:"grid-area: 5 / 5;"}
,{t:"repeat()",d:"<code>repeat(3, 1fr)</code> cria 3 colunas iguais. Use no container.",sel:".board",n:4,sol:"grid-template-columns: repeat(3, 1fr);"}
,{t:"Padrões com repeat",d:"repeat também repete padrões: <code>repeat(2, 1fr 2fr)</code>.",sel:".board",n:4,sol:"grid-template-columns: repeat(2, 1fr 2fr);"}
,{t:"Misturando unidades",d:"Primeira coluna fixa de <code>100px</code>, a segunda ocupa o resto com <code>1fr</code>.",sel:".board",n:4,sol:"grid-template-columns: 100px 1fr;"}
,{t:"Tudo numa linha",d:"Crie 4 colunas iguais e uma única linha de <code>1fr</code>.",sel:".board",n:4,sol:"grid-template-columns: repeat(4, 1fr);\ngrid-template-rows: 1fr;"}
,{t:"Empilhando",d:"Uma coluna só e 4 linhas iguais.",sel:".board",n:4,sol:"grid-template-columns: 1fr;\ngrid-template-rows: repeat(4, 1fr);"}
,{t:"minmax()",d:"<code>minmax(min, max)</code> limita o tamanho. Use <code>minmax(50px, 1fr) 3fr</code> nas colunas.",sel:".board",n:4,sol:"grid-template-columns: minmax(50px, 1fr) 3fr;"}
,{t:"Espaçamento",d:"<code>gap</code> cria espaço entre as trilhas. Use 20px.",sel:".board",n:4,sol:"gap: 20px;"}
,{t:"Gaps diferentes",d:"Duas colunas iguais, <code>row-gap: 15px</code> e <code>column-gap: 30px</code>.",sel:".board",n:4,sol:"grid-template-columns: 1fr 1fr;\nrow-gap: 15px;\ncolumn-gap: 30px;"}
,{t:"Fluxo em colunas",d:"<code>grid-auto-flow: column</code> preenche os itens de cima para baixo.",sel:".board",n:4,sol:"grid-auto-flow: column;"}
,{t:"Linhas automáticas",d:"Duas colunas iguais e linhas implícitas de 100px com <code>grid-auto-rows</code>.",sel:".board",n:4,sol:"grid-template-columns: 1fr 1fr;\ngrid-template-rows: none;\ngrid-auto-rows: 100px;"}
,{t:"Centralizando colunas",d:"Duas colunas de 80px centralizadas com <code>justify-content: center</code>.",sel:".board",n:4,sol:"grid-template-columns: repeat(2, 80px);\njustify-content: center;"}
,{t:"Para baixo",d:"Duas linhas de 80px alinhadas ao fundo com <code>align-content: end</code>.",sel:".board",n:4,sol:"grid-template-rows: repeat(2, 80px);\nalign-content: end;"}
,{t:"Espalhando",d:"Três colunas de 60px com <code>justify-content: space-between</code>.",sel:".board",n:4,sol:"grid-template-columns: repeat(3, 60px);\njustify-content: space-between;"}
,{t:"Bem no meio",d:"Grade 2x2 de 90px centralizada com <code>place-content: center</code>.",sel:".board",n:4,sol:"grid-template: repeat(2, 90px) / repeat(2, 90px);\nplace-content: center;"}
,{t:"Mudando a ordem",d:"<code>order</code> muda a posição de um item no fluxo. Leve o vermelho para o início.",sel:".c",n:4,sol:"order: -1;"}
,{t:"Item largo",d:"Faça o item azul ocupar a linha inteira.",sel:".d",n:4,sol:"grid-column: 1 / -1;"}
,{t:"Posicionando um só",d:"Mova o item amarelo para a linha 3, começando na coluna 3 e ocupando 2 colunas.",sel:".b",n:4,sol:"grid-row: 3;\ngrid-column: 3 / span 2;"}
,{t:"auto-fill",d:"<code>repeat(auto-fill, 100px)</code> cria quantas colunas de 100px couberem.",sel:".board",n:4,sol:"grid-template-columns: repeat(auto-fill, 100px);"}
,{t:"Layout misto",d:"Colunas <code>2fr repeat(2, 1fr)</code> e linhas <code>1fr 3fr</code>.",sel:".board",n:4,sol:"grid-template-columns: 2fr repeat(2, 1fr);\ngrid-template-rows: 1fr 3fr;"}
,{t:"Desafio final",d:"Use <code>grid-template</code> com linhas 1fr 2fr, colunas 2fr 1fr 1fr e <code>gap: 8px</code>.",sel:".board",n:4,sol:"grid-template: 1fr 2fr / 2fr 1fr 1fr;\ngap: 8px;"}

];
const KEY="gridquest-save";
let save=JSON.parse(localStorage.getItem(KEY)||'{"level":0,"done":[],"code":{}}');
let cur=save.level||0;
const $=id=>document.getElementById(id);
const persist=()=>localStorage.setItem(KEY,JSON.stringify(save));
const clean=s=>s.replace(/[{}<>]/g,"");
function items(el,n){el.innerHTML="";for(let i=0;i<n;i++){const d=document.createElement("div");d.className="item "+"abcd"[i];if(i===0)d.id="a";el.appendChild(d)}}
function load(i){
  cur=i;save.level=i;persist();
  const L=LEVELS[i];
  $("levelLabel").textContent=`Nível ${i+1} de ${LEVELS.length}`+(save.done.includes(i)?" ✓":"");
  $("title").textContent=L.t;$("desc").innerHTML=L.d;
  $("before").textContent=L.sel===".board"?"#jardim {\n  display: grid;":L.sel==="#a"?"#bloco {":".item"+L.sel+" {";
  items($("target"),L.n);items($("user"),L.n);
  $("input").value=save.code[i]||"";$("feedback").textContent="";$("feedback").className="feedback";
  apply();renderMenu();
}
function apply(){
  const L=LEVELS[cur],code=clean($("input").value);
  save.code[cur]=$("input").value;persist();
  $("levelStyle").textContent=`#target${L.sel===".board"?"":" "+L.sel}{${L.sol}} #user${L.sel===".board"?"":" "+L.sel}{${code}}`;
}
function check(){
  const t=[...$("target").children],u=[...$("user").children];
  setTimeout(()=>{
    const ok=t.every((el,k)=>{const a=el.getBoundingClientRect(),b=u[k].getBoundingClientRect();
      return Math.abs(a.left-b.left)<2&&Math.abs(a.top-b.top)<2&&Math.abs(a.width-b.width)<2&&Math.abs(a.height-b.height)<2});
    const f=$("feedback");
    if(ok){if(!save.done.includes(cur))save.done.push(cur);persist();
      f.textContent=cur<LEVELS.length-1?"Perfeito! Indo para o próximo nível...":"🎉 Você completou todos os níveis!";f.className="feedback ok";
      document.body.classList.add("win");setTimeout(()=>document.body.classList.remove("win"),600);
      renderMenu();if(cur<LEVELS.length-1)setTimeout(()=>load(cur+1),1200);
    }else{f.textContent="Ainda não... os blocos não cobrem as áreas tracejadas.";f.className="feedback bad"}
  },400);
}
function renderMenu(){
  const m=$("levelMenu");m.innerHTML="";
  LEVELS.forEach((_,i)=>{const b=document.createElement("button");b.textContent=i+1;
    if(save.done.includes(i))b.classList.add("done");if(i===cur)b.classList.add("current");
    b.onclick=()=>{m.classList.add("hidden");load(i)};m.appendChild(b)});
}
$("input").addEventListener("input",apply);
$("input").addEventListener("keydown",e=>{if(e.key==="Enter"&&(e.ctrlKey||e.metaKey)){e.preventDefault();check()}});
$("check").onclick=check;
$("prev").onclick=()=>cur>0&&load(cur-1);
$("next").onclick=()=>cur<LEVELS.length-1&&load(cur+1);
$("levelBtn").onclick=()=>$("levelMenu").classList.toggle("hidden");
$("reset").onclick=()=>{if(confirm("Apagar todo o progresso?")){save={level:0,done:[],code:{}};persist();load(0)}};
load(cur);
