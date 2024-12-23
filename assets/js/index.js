const boton = document.getElementById("button")
const lista = document.getElementById("tareas")
const inputTareas = document.getElementById("escribirTareas");
const total = document.getElementById("total")
const terminadas = document.getElementById("terminadas")

const tareas = [
    { id: 845, name: "Cita con el dentista", hecha: false },
    { id: 846, name: "Último desafío del año", hecha: false },
    { id: 847, name: "Compras navideñas", hecha: false },
];

function pintarHtml() {
    let html = "";
    for (let tarea of tareas) {
        html += `
            <li>
                <input type="checkbox" onchange="Hecha(${tarea.id})" ${tarea.hecha ? "checked" : ""}>
                <span>${tarea.id} - ${tarea.name}</span>
                <button id="button" onclick="borrar(${tarea.id})">Eliminar</button>
            </li>
        `;
    }
    lista.innerHTML = html


    const realizadas = tareas.filter((tarea) => tarea.hecha).length;
    terminadas.innerText = `Tareas terminadas: ${realizadas}`
    total.innerText = `Total de tareas: ${tareas.length}`
}

function borrar(id) {
    const index = tareas.findIndex((tarea) => tarea.id === id)
    if (index !== -1) {
        tareas.splice(index, 1)
        pintarHtml()
    }
}

function Hecha(id) {
    const tarea = tareas.find((tarea) => tarea.id === id)
    if (tarea) {
        tarea.hecha = !tarea.hecha
        pintarHtml()
    }
}

boton.addEventListener("click", () => {
    const nuevaTarea = inputTareas.value.trim();
    if (nuevaTarea) {
        const id = Date.now() /* como seguir la secuencia de id??? */
        tareas.push({ id, name: nuevaTarea, hecha: false })
        inputTareas.value = ""
        pintarHtml()
    }
});

pintarHtml();

