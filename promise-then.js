import readline from "readline";
import { optionsAvailable, showMenu } from "./options.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const playHug = () => {
  console.log("\n¿Quieres un abrazo?");
  showMenu();
  const promise = new Promise((resolve, reject) => {
    rl.question("\n\t", (option) => {
      rl.pause();
      if (option > 0 && option < optionsAvailable.length) {
        setTimeout(
          () => resolve(optionsAvailable[option].function()),
          0
        ); /*este último cero es el tiempo que tardará en resolverse la promesa*/
      } else {
        setTimeout(
          () => reject(optionsAvailable[0].function() + process.exit(0)),
          0
        ); /*el cero es lo mismo que antes pero ahora rechazando la promesa*/
      }
    });
  });

  promise.then(
    (value) => {
      playHug(), value;
    }
  );
};

playHug();
