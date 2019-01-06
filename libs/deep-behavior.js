module.exports = Behavior({
  behaviors: [],
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
    console.log('deep-behavior-definitionFilter:defFields', defFields);
    console.log('deep-behavior-definitionFilter:definitionFilterArr', definitionFilterArr);
  }
})
