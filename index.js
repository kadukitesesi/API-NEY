const express = require('express');
const app = express();
const salarios = require('./servico')

app.get('/',(req,res) => {
    const salarioAno = salarios.salarioAnual;
    const unidade = req.query.unidade; // Padrão é 'ano'

    let salarioCalculado;

    switch (unidade.toLowerCase()) {
        case 'mes':
            salarioCalculado = salarios.retornaSalarioMes(salarioAno);
            break;
        case 'semana':
            salarioCalculado = salarios.retornaSalarioSemana(salarioAno);
            break;
        case 'dia':
            salarioCalculado = salarios.retornaSalarioDia(salarioAno);
            break;
        case 'hora':
            salarioCalculado = salarios.retornaSalarioHora(salarioAno);
            break;
        default:
            salarioCalculado = null;
    }

    if (unidade !== null) {
        res.json({
            salario: salarioCalculado,
            unidade: unidade
        });
    } else {
        res.status(400).json({
            error: 'Unidade de tempo inválida. Escolha entre mes, semana, dia, ou hora.'
        });
    }
})

app.listen(8080, () =>{
    console.log("Servidor iniciado na porta 8080")
})