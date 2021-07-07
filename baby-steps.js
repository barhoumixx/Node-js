var Somme = 0;
for (i = 2; i < process.argv.length; i++) {
  Somme += Number(process.argv[i]);
}

console.log(Somme);