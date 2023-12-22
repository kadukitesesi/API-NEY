function formatarMoeda(valor) {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    return formatter.format(valor);
}

const salarioAnual = 170000000;

function retornaSalarioMes() {
    const salarioMes = salarioAnual / 12;
    return formatarMoeda(salarioMes);
}

function retornaSalarioSemana() {
    const salarioSemana = salarioAnual / 52;
    return formatarMoeda(salarioSemana);
}

function retornaSalarioDia() {
    const salarioDia = salarioAnual / 365;
    return formatarMoeda(salarioDia);
}

function retornaSalarioHora() {
    const salarioHora = salarioAnual / (24 * 365);
    return formatarMoeda(salarioHora);
}

module.exports = {
    retornaSalarioMes,
    retornaSalarioSemana,
    retornaSalarioDia,
    retornaSalarioHora,
    salarioAnual
};
