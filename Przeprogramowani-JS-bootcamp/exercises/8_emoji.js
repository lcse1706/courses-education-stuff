/*
 * Opanuj JavaScript - Przeprogramowani.pl
 * I. Fundamenty języka JavaScript
 *
 * Ćwiczenie 7 - "Emoji"
 */

/*
 * Cel zadania
 *------------
 * Zaimplementuj funkcję "useEmoji", która zastąpi wszystkie słowa danego parametru zgodnie
 * z mapowaniem z obiektu "emojiMappings";
 *
 * Przykład:
 * useEmoji('Takiemu zachowaniu mówię stop i to mocny stop!') // => 'Takiemu zachowaniu mówię 🚫 i to mocny 🚫!'
 * useEmoji('Jadę po nowy samochód :D') // => 'Jadę po nowy 🏎 :D'
 */

const emojiMappings = {
  stop: '🚫',
  gwiazda: '⭐️',
  samochód: '🏎',
  buduję: '🧱',
  budzik: '⏰',
};

function useEmoji(input) {
  const array = input.split(' ');

  array.forEach((element, index) => {
    for (const property in emojiMappings) {
      if (property === element.toLowerCase()) {
        array[index] = emojiMappings[property];
      }
    }
  });

  return array.join(' ');
}

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(
  useEmoji('Takiemu zachowaniu mówię stop i to mocny estop!'),
  'Takiemu zachowaniu mówię 🚫 i to mocny estop!'
);
verify(useEmoji('Jadę po nowy samochód :D'), 'Jadę po nowy 🏎 :D');
verify(useEmoji('Jadę po nowy samochódy :D'), 'Jadę po nowy samochódy :D');
verify(
  useEmoji('Właśnie buduję swoje skille w JS'),
  'Właśnie 🧱 swoje skille w JS'
);
verify(
  useEmoji('Właśnie nadbuduję swoje skille w JS'),
  'Właśnie nadbuduję swoje skille w JS'
);
verify(useEmoji('BuDuję SaMocHód'), '🧱 🏎');
