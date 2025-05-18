const pagamentos = [
    { id: 1, nome: "Antonio", valor: "R$ 150,00" },
    { id: 2, nome: "Maria", valor: "R$ 200,00" },
    { id: 3, nome: "José", valor: "R$ 100,00" }
];

const listaPagamentos = document.getElementById("listaPagamentos");

pagamentos.forEach(pagamento => {
    const row = document.createElement("tr");

    const idCell = document.createElement("td");
    idCell.textContent = pagamento.id;

    const nomeCell = document.createElement("td");
    nomeCell.textContent = pagamento.nome;

    const valorCell = document.createElement("td");
    valorCell.textContent = pagamento.valor;

    row.appendChild(idCell);
    row.appendChild(nomeCell);
    row.appendChild(valorCell);

    listaPagamentos.appendChild(row);
});