// 2. String-arrays (3p)
// Skriv klart funktionen filterWordsWithLetterA som tar en array med strängar som
// input och returnerar en array med bara de strängar som innehåller "a" (bara liten bokstav).
// tips: använd indexOf eller includes



function filterWordsWithLetterA(words) {
  const stringsOnlyA = [];

  words.forEach((a) => {
    if(!stringsOnlyA.includes(a)) {
    stringsOnlyA.push(a);
    }
  });
  return stringsOnlyA;
}

console.log(filterWordsWithLetterA(["Programming", "is", "great!"])); // ska logga ["Programming", "great!"]

