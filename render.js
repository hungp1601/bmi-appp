
const height = document.querySelector('#height')
const weight = document.querySelector('#weight')
const btn = document.querySelector('#btn')
const bmi = document.querySelector('#bmi')
const condition = document.querySelector('#condition')

let bmi_value = 0

ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"];


var myConfig = {
  type: "gauge",
  globals: {
    fontSize: 25
  },
  plotarea: {
    marginTop: 120
  },
  plot: {
    size: '80%',
    valueBox: {
      placement: 'center',
      text: '%v', //default
      fontSize: 35,
      rules: [
        {
          rule: '%v >= 35',
          text: '%v<br>Obese class II'
        },
        {
          rule: '%v < 35 && %v >= 30',
          text: '%v<br>Obese class I'
        },
        {
          rule: '%v < 30 && %v >= 25',
          text: '%v<br>Overweight'
        },
        {
          rule: '%v < 25 && %v >= 18.5',
          text: '%v<br>Normal'
        },
        {
          rule: '%v <  18.5 ',
          text: '%v<br>Underweight'
        },


      ]
    }
  },
  tooltip: {
    borderRadius: 5
  },
  scaleR: {
    aperture: 180,
    minValue: 15,
    maxValue: 40,
    step: 1,
    center: {
      visible: false
    },
    tick: {
      visible: false
    },

    item: {
      offsetR: -10,
      // rules: [{
      //   rule: '%i == 1',
      //   offsetX: 15
      // }]
    },
    // labels: ['15', '18.5', '25', '30', '35', '40'],
    // labels: ['15', '', '18', '', '', '', '25', '', '', '30', '', '', '35', '', '', '40'],
    ring: {
      size: 50,
      rules: [
        {
          rule: '%v >= 35',
          backgroundColor: '#FF5353'
        },
        {
          rule: '%v < 35 && %v >= 30',
          backgroundColor: '#FF9B4D'
        },
        {
          rule: '%v < 30 && %v >= 25',
          backgroundColor: '#FEDC64'
        },
        {
          rule: '%v < 25 && %v >= 18.5',
          backgroundColor: '#0EAD6A'
        },
        {
          rule: '%v <  18.5',
          backgroundColor: '#4DB5FE'
        },
      ]
    }
  },
  series: [{
    values: [15], // starting value
    backgroundColor: 'black',
    indicator: [4, 4, 4, 4, 0.6],

  }]
};


zingchart.render({
  id: 'myChart',
  data: myConfig,
  height: 500,
  width: '452px'
});





btn.addEventListener('click', function () {
  const [w, h] = [weight.value, height.value]

  // validate height and weight
  if (w === "" || h === "" || w <= 0 || h <= 0) {
    alert('Please input valid height and weight');
    return
  }

  //bmi formula
  const bmi_values = (w / (h * h / 10000)).toFixed(1);


  // zingchart.exec('myChart', 'setseriesvalues', {
  //   'plotindex': 0,
  //   'values': [bmi_values], // starting value
  // });

  zingchart.exec('myChart', 'setseriesdata', {
    'plotindex': 0,
    'data': {
      'values': [bmi_values],
      backgroundColor: 'black',
      indicator: [4, 4, 4, 4, 0.6],
    }
  });

})



