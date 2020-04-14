import inquirer from "inquirer";
import {execFile} from "child_process";

type IRespuesta = {
    Respuesta: Array<string>
}

/*
    Se declara el Map que contendra las opciones de la interfaz junto con el valor de esta,
    Las opciones sirve para mostrarse al usuario y el valor para ejecutar la app
 */
const mapApps = new Map([
    ['Microsoft Edge', String.raw`C:\Users\SweetSorrow\AppData\Local\Microsoft\Edge SxS\Application\msedge.exe`],
    ['Windows Terminal', 'wt']
])

async function start() {
    // Se limpia la consola
    console.clear();
    // Se pregunta al usuario mediante una lista de checkBox las apps que desea abrir
    const Respuestas: IRespuesta = await inquirer.prompt({
        message: 'Aplicaciones',
        name: 'Respuesta',
        type: 'checkbox',
        // Se obtiene todas las propiedades del Map y se hace un Array
        choices: [...mapApps.keys()]
    });

    // Se recorre el arreglo de respuestas del usuario y obteniendo el valor del Map con el valor
    // de la opcion se ejecuta el programa
    for (const respuesta of Respuestas.Respuesta) {
        execFile(mapApps.get(respuesta) as string);
    }
}

(async () => {
    await start();
})();
