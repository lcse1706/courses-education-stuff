/*
 * Opanuj JavaScript - Przeprogramowani.pl
 * I. Fundamenty języka JavaScript
 *
 * Ćwiczenie 2 - "Walidacja"
 */

/*
 * Cel zadania
 *------------
 * Zaimplementuj funkcję, która sprawdzi, czy przekazane hasło spełnia określone warunki:
 *
 * a) Ma długość od 3 do 10 znaków
 * b) Zawiera jeden ze znaków specjalnych - !, @ lub #
 * c) Zawiera cyfrę
 *
 * Przykład:
 * validatePassword('test') // => false
 * validatePassword('test11!') // => true
 */

/*
 * Punkty dodatkowe
 *-----------------
 * Funkcja powinna weryfikować, czy przekazany parametr jest typu string. Jeśli parametr nie
 * spełnia tego warunku, funkcja powinna rzucić wyjątek.
 */

function validatePassword(password) {
  checkIfPassword(password);
  if (password.length >= 3 && password.length <= 10) {
    if (
      //   password.indexOf('#') !== -1 ||
      //   password.indexOf('!') !== -1 ||
      //   password.indexOf('@') !== -1
      password.match(/[!,@,#]/)
    ) {
      if (password.match(/[0-9]/)) {
        return true;
      } else return false;
    } else return false;
  } else return false;
}

function checkIfPassword(password) {
  if (!(typeof password === 'string' || password instanceof String)) {
    throw new Error(`${password} is not a string`);
  }
}
/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(validatePassword('a'), false);
verify(validatePassword('lol'), false);
verify(validatePassword('ToDziala1#'), true);
verify(validatePassword('grejt2@'), true);
verify(validatePassword('!dont3'), true);
verify(validatePassword('!dont3asdas@d'), false);
verify(validatePassword('Und@rst4nd'), true);
