/* Ecrire une fonction count qui prend comme paramètre un nombre min, un nombre max et un nombre step.
 L'exécution de cette fonction devra afficher sur le terminal tous les nombres de min jusqu'a max avec un intervale de step*/
const count = (min, max, step) => {
  while (min <= max) {
    console.log(min)
    min += step
  }
}

count(1, 100, 3)


// correction
const count1 = (min, max, step) => {
  for (let i = min; i <= max; i += step) {
    console.log(i)
  }
}

count1(1, 100, 3)
