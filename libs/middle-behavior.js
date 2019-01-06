const deepBehavior = require('deep-behavior');
module.exports = Behavior({
  behaviors: [deepBehavior],
  properties: {

  },
  data: {
    $form: {}
  },
  attached() { },
  methods: {
  },
  lifetimes: {
  },
  definitionFilter(defFields, definitionFilterArr) {
    console.log('middle-behavior-definitionFilter:defFields', defFields);
    console.log('middle-behavior-definitionFilter:definitionFilterArr', definitionFilterArr);
  }
})
