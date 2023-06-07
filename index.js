/* Funcion para actuializar la hora */
function actualizarTiempo() {
    var fecha = new Date();
    var horas = agregarCero(fecha.getHours());
    var minutos = agregarCero(fecha.getMinutes());
    var segundos = agregarCero(fecha.getSeconds());

    var tiempo = horas + ":" + minutos + ":" + segundos;
    document.getElementById("tiempo").textContent = tiempo;
}

/* Funcion para agregar un cero inicial a los numeros menores de 10 */
function agregarCero(numero) {
    if (numero < 10) {
        return "0" + numero;
    }
    return numero;
}

// Ejecuta la funcion actualizarTiempo cada segundo
setInterval(actualizarTiempo, 1000)