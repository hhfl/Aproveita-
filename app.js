// Lógica do site: seleção de ingredientes, filtros e exibição das receitas.
// Depende das constantes definidas em dados.js.

const sel = new Set();
const el = {
  chips: document.getElementById("chips"),
  lista: document.getElementById("lista"),
  resumo: document.getElementById("resumo"),
  busca: document.getElementById("busca"),
  refeicao: document.getElementById("refeicao"),
  limpar: document.getElementById("limpar")
};

function montarChips() {
  INGREDIENTES.forEach(function (ing) {
    const li = document.createElement("li");
    const b = document.createElement("button");
    b.type = "button";
    b.className = "chip";
    b.textContent = ing.nome;
    b.setAttribute("aria-pressed", "false");
    b.addEventListener("click", function () {
      if (sel.has(ing.id)) sel.delete(ing.id); else sel.add(ing.id);
      b.setAttribute("aria-pressed", sel.has(ing.id));
      render();
    });
    li.appendChild(b);
    el.chips.appendChild(li);
  });
}

function filtrar() {
  const termo = el.busca.value.trim().toLowerCase();
  const tipo = el.refeicao.value;
  return RECEITAS
    .map(function (r) { return { r: r, pontos: r.usa.filter(function (u) { return sel.has(u); }).length }; })
    .filter(function (x) {
      if (tipo !== "todas" && x.r.refeicao !== tipo) return false;
      if (sel.size > 0 && x.pontos === 0) return false;
      if (termo) {
        const texto = (x.r.nome + " " + x.r.ingredientes.join(" ")).toLowerCase();
        if (texto.indexOf(termo) === -1) return false;
      }
      return true;
    })
    .sort(function (a, b) { return b.pontos - a.pontos || a.r.tempo - b.r.tempo; });
}

function itens(tag, arr) {
  return "<" + tag + ">" + arr.map(function (t) { return "<li>" + t + "</li>"; }).join("") + "</" + tag + ">";
}

function render() {
  const res = filtrar();
  el.resumo.textContent = sel.size === 0
    ? "Nenhum ingrediente marcado. Mostrando todas as receitas."
    : sel.size + " ingrediente(s) marcado(s) · " + res.length + " receita(s) encontrada(s)";

  if (res.length === 0) {
    el.lista.innerHTML = '<p class="vazio">Nenhuma receita usa essa combinação. Desmarque um ingrediente, mude o tipo de refeição ou limpe a busca.</p>';
    return;
  }
  el.lista.innerHTML = res.map(function (x) {
    const r = x.r;
    const badge = sel.size > 0 ? '<span class="match">usa ' + x.pontos + " dos seus ingredientes</span>" : "";
    return '<details class="receita"><summary>' +
      '<span class="nome">' + r.nome + "</span>" +
      '<span class="meta">' + r.tempo + " min · rende " + r.porcoes + " porções</span>" + badge +
      '</summary><div class="corpo">' +
      "<div><h3>Ingredientes</h3>" + itens("ul", r.ingredientes) + "</div>" +
      "<div><h3>Modo de preparo</h3>" + itens("ol", r.passos) + "</div>" +
      '<p class="dica"><strong>Dica de saúde:</strong> ' + r.dica + "</p>" +
      "</div></details>";
  }).join("");
}

el.busca.addEventListener("input", render);
el.refeicao.addEventListener("change", render);
el.limpar.addEventListener("click", function () {
  sel.clear();
  el.busca.value = "";
  el.refeicao.value = "todas";
  el.chips.querySelectorAll(".chip").forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
  render();
});

document.getElementById("rodape-nutri").textContent = NUTRICIONISTA
  ? "Conteúdo orientado pela nutricionista " + NUTRICIONISTA + "."
  : "Converse com a sua nutricionista para adaptar as receitas ao seu plano alimentar.";

montarChips();
render();
