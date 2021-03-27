module.exports = {
  extends: [
    'stylelint-config-sass-guidelines', // https://github.com/bjankord/stylelint-config-sass-guidelines
    'stylelint-config-idiomatic-order' // we want idiomatic ordering (not alphabetical ordering) https://github.com/ream88/stylelint-config-idiomatic-order
  ],
  rules: {
    'indentation': 2,
    'max-nesting-depth': 5,
    'order/properties-alphabetical-order': null, // we do not want alphabetical ordering
    'selector-class-pattern': null, // we do not want to enforce lowercase with hyphens, as this can lead to problems with CRA
    'selector-max-compound-selectors': 5,
    'selector-no-qualifying-type': null,
    'shorthand-property-no-redundant-values': null
  }
}