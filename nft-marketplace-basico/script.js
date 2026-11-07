
const NFTS = [
  { id: 1, nome: "Emerald Ape #042",  preco: 1.19, colecao: "Arte digital", img: "img/nft-1.png" },
  { id: 2, nome: "Sage Nomad #089",   preco: 1.69, colecao: "Fotografia",   img: "img/nft-2.png" },
  { id: 3, nome: "Neon Vessel #052",  preco: 1.99, colecao: "Música",       img: "img/nft-3.png" },
  { id: 4, nome: "Cosmic Bloom #118", preco: 1.29, colecao: "Arte 3D",      img: "img/nft-4.png" },
  { id: 5, nome: "Violet Nomad #014", preco: 1.39, colecao: "Arte digital", img: "img/nft-5.png" },
  { id: 6, nome: "Ivory Baron #088",  preco: 1.99, colecao: "Fotografia",   img: "img/nft-6.png" },
  { id: 7, nome: "Golden Beat #087",  preco: 0.99, colecao: "Música",       img: "img/nft-7.png" },
  { id: 8, nome: "Golden Pulse #091", preco: 0.99, colecao: "Arte 3D",      img: "img/nft-8.png" },
  { id: 9, nome: "Golden Signal #168",preco: 0.99, colecao: "Arte digital", img: "img/nft-9.png" },
];
const POR_PAGINA = 6;

const estado = { busca: "", colecao: "", precoMax: 2.5, ordem: "recente", pagina: 1 };

const grade = document.getElementById("grade");
const vazio = document.getElementById("vazio");
const paginacao = document.getElementById("paginacao");

function filtrar() {
  let lista = NFTS.filter(n =>
    n.nome.toLowerCase().includes(estado.busca.toLowerCase()) &&
    (!estado.colecao || n.colecao === estado.colecao) &&
    n.preco <= estado.precoMax
  );
  if (estado.ordem === "menor") lista.sort((a, b) => a.preco - b.preco);
  if (estado.ordem === "maior") lista.sort((a, b) => b.preco - a.preco);
  return lista;
}

function render() {
  const lista = filtrar();
  const total = Math.max(1, Math.ceil(lista.length / POR_PAGINA));
  if (estado.pagina > total) estado.pagina = total;
  const pagina = lista.slice((estado.pagina - 1) * POR_PAGINA, estado.pagina * POR_PAGINA);

  grade.innerHTML = pagina.map(n => `
    <li class="card">
      <img src="${n.img}" alt="${n.nome}" loading="lazy">
      <h3>${n.nome}</h3>
      <p class="preco">${n.preco.toFixed(2)} ETH</p>
    </li>`).join("");
  vazio.hidden = lista.length > 0;

  paginacao.innerHTML = Array.from({ length: total }, (_, i) =>
    `<button class="${i + 1 === estado.pagina ? "ativo" : ""}" data-p="${i + 1}">${i + 1}</button>`
  ).join("");
}

const colecoes = [...new Set(NFTS.map(n => n.colecao))];
const ul = document.getElementById("colecoes");
ul.innerHTML = `<li><button data-c="" class="ativo">Todas</button></li>` +
  colecoes.map(c => `<li><button data-c="${c}">${c}</button></li>`).join("");
ul.addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  estado.colecao = b.dataset.c; estado.pagina = 1;
  ul.querySelectorAll("button").forEach(x => x.classList.toggle("ativo", x === b));
  render();
});

document.getElementById("busca").addEventListener("input", e => { estado.busca = e.target.value; estado.pagina = 1; render(); });
document.getElementById("ordem").addEventListener("change", e => { estado.ordem = e.target.value; estado.pagina = 1; render(); });
document.getElementById("preco").addEventListener("input", e => {
  estado.precoMax = Number(e.target.value); estado.pagina = 1;
  document.getElementById("precoSaida").textContent = estado.precoMax.toFixed(2);
  render();
});
paginacao.addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  estado.pagina = Number(b.dataset.p); render();
});

render();
