// Objeto para representar un crédito
function Credito(monto, plazo, tasaInteres) {
    this.monto = monto;
    this.plazo = plazo;
    this.tasaInteres = tasaInteres;
}

// Método para calcular la cuota mensual del crédito
Credito.prototype.calcularCuota = function() {
    let tasaMensual = this.tasaInteres / 12;
    return this.monto * tasaMensual / (1 - Math.pow(1/(1 + tasaMensual), this.plazo));
}

// Array para almacenar una serie de créditos simulados (en este caso vacío, pero podrías expandirlo)
let creditos = [];

// Función para simular un crédito
function simularCredito() {
    let monto = parseFloat(document.getElementById("monto").value);
    let plazo = parseInt(document.getElementById("plazo").value);

    // Suponemos diferentes tasas de interés basadas en el monto solicitado
    let tasaInteres = monto < 5000 ? 0.07 : monto < 10000 ? 0.06 : 0.05;

    let credito = new Credito(monto, plazo, tasaInteres);
    creditos.push(credito);

    let cuota = credito.calcularCuota();
    document.getElementById("resultado").innerText = "La cuota mensual sería: $" + cuota.toFixed(2);
}

// Función para filtrar créditos basados en un monto máximo
function filtrarCreditosPorMonto(montoMaximo) {
    return creditos.filter(credito => credito.monto <= montoMaximo);
}
