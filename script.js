function convertToRoman() {
  const arabicInput = document.getElementById('arabic');
  const romanInput = document.getElementById('roman');

  const arabic = arabicInput.value;
  const roman = toRoman(arabic);

  romanInput.value = roman;
}

function convertToArabic() {
  const arabicInput = document.getElementById('arabic');
  const romanInput = document.getElementById('roman');

  const roman = romanInput.value;
  const arabic = toArabic(roman);

  arabicInput.value = arabic;
}

function toRoman(arabic) {
  const romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
  ];

  let result = '';

  for (let i = 0; i < romanNumerals.length; i++) {
    while (arabic >= romanNumerals[i].value) {
      result += romanNumerals[i].numeral;
      arabic -= romanNumerals[i].value;
    }
  }

  return result;
}

function toArabic(roman) {
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  let result = 0;
  let i = 0;

  while (i < roman.length) {
    const currentSymbol = roman[i];
    const currentValue = romanNumerals[currentSymbol];
    const nextSymbol = roman[i + 1];
    const nextValue = romanNumerals[nextSymbol];

    if (nextValue && currentValue < nextValue) {
      result += nextValue - currentValue;
      i += 2;
    } else {
      result += currentValue;
      i += 1;
    }
  }

  return result;
}
