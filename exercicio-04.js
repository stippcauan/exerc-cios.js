let convidadados = ["Cauan", "Luiz", "Bruno", "Pietro", "Henrique"];

if (convidados.includes(nome)) {
    console.log(`Acesso liberado! ${nome} Pode entrar, você é convidado VIP.`);
} else {
    console.log(`Acesso negado. ${nome} Desculpe, seu nome não está na lista.`);
}