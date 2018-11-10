module.exports = {
  root: true,
  parser: 'babel-eslint',
  plugins: ['graphql'],
  // https://github.com/babel/babel-eslint
  env: {
    browser: 1,
    node: 1,
    es6: 1,
  },
  rules: {
    'graphql/template-strings': [
      'error',
      {
        env: 'literal',
        validators: [
          'ExecutableDefinitions',
          'FieldsOnCorrectType',
          'FragmentsOnCompositeTypes',
          'KnownArgumentNames',
          'KnownTypeNames',
          'LoneAnonymousOperation',
          'NoFragmentCycles',
          'NoUndefinedVariables',
          'OverlappingFieldsCanBeMerged',
          'PossibleFragmentSpreads',
          'ProvidedNonNullArguments',
          'ScalarLeafs',
          'SingleFieldSubscriptions',
          'UniqueArgumentNames',
          'UniqueDirectivesPerLocation',
          'UniqueFragmentNames',
          'UniqueInputFieldNames',
          'UniqueOperationNames',
          'UniqueVariableNames',
          'ValuesOfCorrectType',
          'VariablesAreInputTypes',
          'VariablesDefaultValueAllowed',
          'VariablesInAllowedPosition',
        ],
      },
    ],
    'graphql/named-operations': ['error'],
    'graphql/required-fields': [
      'error',
      {
        env: 'literal',
        requiredFields: ['nodeId'],
      },
    ],
  },
}
