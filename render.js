const height = document.querySelector('#height')
const weight = document.querySelector('#weight')
const btn = document.querySelector('#btn')
const bmi = document.querySelector('#bmi')
const condition = document.querySelector('#condition')


btn.addEventListener('click', () => {
  const [w, h] = [weight.value, height.value]
  const bmi_value = w / (h * h / 10000)
  bmi.innerHTML = bmi_value

  const index = lower(BMIs, bmi_value);
  condition.innerHTML = `u're ${conditions[index]}`
})

function lower(arr, target) {
  let low = 0, high = arr.length;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] < target) low = mid + 1;
    else high = mid;
  }

  return low;
}


const BMIs = [16, 17, 18.5, 25, 30, 35, 40]
const conditions = [
  "Severe Thinness",
  "Moderate Thinness",
  "Mild Thinness",
  "Normal",
  "Overweight",
  "Obese Class I",
  "Obese Class II",
  "Obese Class III"
]


