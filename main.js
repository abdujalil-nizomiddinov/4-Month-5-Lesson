// Func1. Tomoni a va b ga teng bo’lgan to’g’ri to’rtburchakning yuzasi va perimetrini hisoblovchi rectangle(a, b) nomli funksiya hosil qiling. QYM
// Input: rectangle (6, 9)
// Output: 54, 30
function rectangle(a, b) {
  console.log(a * b + ", " + 2 * (a + b));
}

rectangle(6, 9); // 54, 30
//   Func2. Tomoni a ga teng bo’lgan teng tomonli uchburchakning yuzasi va perimetrini hisoblovchi triangle(a) nomli funksiya hosil qiling. QYM
// triangle (6)
function triangle(a) {
  console.log(((Math.sqrt(3) / 4) * a * a).toFixed(2) + ", " + 3 * a);
}

triangle(6); // 15.59, 18
// Func3.  1 dan n ga sonlar yig’indisini qaytaruvchi sum(n) nomli funksiya hosil qiling. QY
function sum(n) {
  return (n * (n + 1)) / 2;
}

console.log(sum(10)); // 55
// Func4. isSquare (k) mantiqiy funksiyasini hosil qiling. (k > 0). Agar k biror butun sonning kvadrati bo'lsa - true, aks holda false qiymat qaytarilsin. QY
// isSquare(10) => false
// isSquare(25) => true
function isSquare(k) {
  return Math.sqrt(k) % 1 === 0;
}

console.log(isSquare(10)); // false
console.log(isSquare(25)); // true

// Func5. Butun qiymat qaytaruvchi digitCount(k) funksiyasini hosil qiling. (k > 0). Funksiya k ning raqamlari sonini qaytarsin. QY
// digitCount(8791) => 4

function digitCount(k) {
  return k.toString().length;
}

console.log(digitCount(8791)); // 4
// Func6. n natural sonning raqamlari yig'indisini hisoblovchi getDigitSum(n) nomli funksiya hosil qiling. QY
// getDigitSum (456) => 15
function getDigitSum(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

console.log(getDigitSum(456)); // 15
// Func7. timeToHMS(T) funksiyasini hosil qiling. Funksiya berilgan T sekundni, H - soat, M - minut, S - sekundlarga ajratsin. QY
// timeToHMS(400) => 00:06:40
function timeToHMS(T) {
  const H = Math.floor(T / 3600)
    .toString()
    .padStart(2, "0");
  const M = Math.floor((T % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const S = (T % 60).toString().padStart(2, "0");
  return `${H}:${M}:${S}`;
}

console.log(timeToHMS(400)); // "00:06:40"
// Func8. incTime(H, M, S) funksiyasini hosil qiling. H - soat, M - minut, S - sekund. Funksiya berilgan vaqtdan 1 sekund keyingi vaqtni ko’rsatsin. QY
// incTime(0, 6, 40) => 00:06:41
// incTime(0, 6, 59) => 00:07:00
// incTime(1, 59, 59) => 02:00:00
// incTime(23, 59, 59) => 00:00:00
function incTime(H, M, S) {
  let total = H * 3600 + M * 60 + S + 1;
  total %= 86400;
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s
    .toString()
    .padStart(2, "0")}`;
}

console.log(incTime(0, 6, 40)); // 00:06:41
console.log(incTime(0, 6, 59)); // 00:07:00
console.log(incTime(1, 59, 59)); // 02:00:00
console.log(incTime(23, 59, 59)); // 00:00:00
// Func9. Kiritilgan 3 ta a, b, c sonlarning eng kichigini, o’rtachasini va eng kattasini chiqaruvchi sortABC(a, b, c) nomli dastur tuzing. QYM
// sortABC(10, 5, 8) => 5, 8, 10
function sortABC(a, b, c) {
  let min = Math.min(a, b, c);
  let max = Math.max(a, b, c);
  let mid = a + b + c - min - max;
  console.log(`${min}, ${mid}, ${max}`);
}

sortABC(10, 5, 8); // 5, 8, 10
// Func10. isPowerN(K, N) mantiqiy funksiyasini hosil qiling. (K > 0). Agar K soni N soninig biror darajasi bo'lsa - true, aks xolda false qiymat qaytarilsin. QY
function isPowerN(K, N) {
  if (K === 1) return true;
  let power = 1;
  while (power < K) {
    power *= N;
    if (power === K) return true;
  }
  return false;
}

console.log(isPowerN(8, 2)); // true (2 3=8)
console.log(isPowerN(16, 2)); // true (2 4=16)
console.log(isPowerN(27, 3)); // true (3 4=27)
console.log(isPowerN(10, 2)); // false
// Func11. isPrime(N) mantiqiy funksiyasini hosil qiling. (N > 0). Agar N soni tub bo'lsa - true, aks holda false qiymat qaytarilsin. QY
// isPrime(7)  => true
function isPrime(N) {
  if (N <= 1) return false;
  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (N % i === 0) return false;
  }
  return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
console.log(isPrime(23)); // true
console.log(isPrime(1)); // false
// Func12. isPrime funksiyasi orqali N gacha bo’lgan sonlar ichidan nechtasi tub ekanini aniqlovchi numberOfPrime(N) nomli dastur tuzilsin. QY
// numberOfPrime(10) => 4
function isPrime(N) {
  if (N <= 1) return false;
  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (N % i === 0) return false;
  }
  return true;
}

function numberOfPrime(N) {
  let count = 0;
  for (let i = 2; i <= N; i++) {
    if (isPrime(i)) count++;
  }
  return count;
}

console.log(numberOfPrime(10)); // 4
// Func13. Butun qiymat qaytaruvchi digitNth(K, N) funksiyasini hosil qiling. (K > 0). Funksiya K sonining N-raqamini qaytarsin. Agar K soni raqamlari N dan kichik bo'lsa, -1 qaytarilsin. digitCount funksiyasidan foydalaning.QY
// digitNth(105782, 5) => 8
// digitNth(1057, 5) => -1
function digitCount(K) {
  return K.toString().length;
}

function digitNth(K, N) {
  if (digitCount(K) < N) return -1;
  return parseInt(K.toString()[N - 1]);
}

console.log(digitNth(105782, 5)); // 8
console.log(digitNth(1057, 5)); // -1
// Func14. N sonining raqamlaridan teskari tartibda hosil bo’ladigan sonni qaytaruvchi inverseNumber(N) nomli funksiya hosil qiling. QY
// inverseNumber(56814) => 41865
function inverseNumber(N) {
  return parseInt(N.toString().split("").reverse().join(""));
}

console.log(inverseNumber(56814)); // 41865
// Func15. isPalindrom(N) mantiqiy funksiyasini hosil qiling. (N > 0). Agar N soni palindrom bo'lsa - true, aks holda false qiymat qaytarilsin. inverseNumber funksiyasidan foydalaning. Palindromik son - chapda ham, o’ngdan ham o’qilganda bir xil bo’ladigan son. Masalan, 123321, 78987. QY
// isPalindrom(1678761) => true
function inverseNumber(N) {
  return parseInt(N.toString().split("").reverse().join(""));
}

function isPalindrom(N) {
  return N === inverseNumber(N);
}

console.log(isPalindrom(1678761)); // true
console.log(isPalindrom(12345)); // false

// Func16. 1 dan N ga sonlar ko’paytmasini qaytaruvchi factorial(N) nomli funksiya hosil qiling. Agar N manfiy bo’lib qolsa, 1 qaytarilsin. QY
function factorial(N) {
  if (N < 0) return 1;
  let result = 1;
  for (let i = 2; i <= N; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(-3)); // 1
// Func17. 1 dan N bo’lgan sonlar ichida 3 bo’linadigan sonlar yig’indisini hisoblovchi getSum3(N) nomli dastur yozing.
// getSum3(15) => 45
function getSum3(N) {
  let sum = 0;
  for (let i = 3; i <= N; i += 3) {
    sum += i;
  }
  return sum;
}

console.log(getSum3(15)); // 45
// Func18. 1 dan N ga sonlar bo’lgan juft va toqlar sonlar yig’indisini qaytaruvchi sumOddEven(N) nomli funksiya hosil qiling. QYM
// sumOddEven(10) => 30, 25
function sumOddEven(N) {
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 1; i <= N; i++) {
    if (i % 2 === 0) {
      evenSum += i;
    } else {
      oddSum += i;
    }
  }
  console.log(evenSum + ", " + oddSum);
}

sumOddEven(10); // 30, 25
// Func19. invertTime(H, M, S) funksiyasini hosil qiling. H - soat, M - minut, S - sekund. Funksiya orqali berilgan soat, minut va sekundni T sekundga almashtiruvchi programma tuzilsin.
// invertTime(0, 6, 40) => 400
function invertTime(H, M, S) {
  return H * 3600 + M * 60 + S;
}

console.log(invertTime(0, 6, 40)); // 400
// Func21. Mantiqiy qiymat qaytaruvchi isLeapYear(Y) funksiyasini hosil qiling. Funksiya berilgan Y - yil kabisa yili bo'lsa true, aks holda false qiymat qaytarsin.
function isLeapYear(Y) {
  return Y % 400 === 0 || (Y % 100 !== 0 && Y % 4 === 0);
}

console.log(isLeapYear(2000)); // true
console.log(isLeapYear(2020)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2023)); // false
// Func22. isLeapYear(Y) funksiyasidan foydalangan xolda, butun qiymat qaytaruvchi monthDays(M, Y) funksiyasini hosil qiling. Funksiya berilgan Y - yilning M - oyi kunlar sonini qaytarsin.
// monthDays(2, 2020) => 28
// monthDays(3, 2021) => 31
function isLeapYear(Y) {
  return Y % 400 === 0 || (Y % 100 !== 0 && Y % 4 === 0);
}

function monthDays(M, Y) {
  if (M === 2) return isLeapYear(Y) ? 29 : 28;
  if ([4, 6, 9, 11].includes(M)) return 30;
  return 31;
}

console.log(monthDays(2, 2020)); // 29
console.log(monthDays(3, 2021)); // 31
// Func25. N sonining bo’luvchilari soni va bo’luvchilari yi’gindisini chiqaruvchi getDividersNumberAndSum(N) nomli funksiya yozing. QYM
// getDividersNumberAndSum(12) => 6, 24
function getDividersNumberAndSum(N) {
  let count = 0;
  let sum = 0;
  for (let i = 1; i <= N; i++) {
    if (N % i === 0) {
      count++;
      sum += i;
    }
  }
  console.log(count + ", " + sum);
}

getDividersNumberAndSum(12); // 6, 24
