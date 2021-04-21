const {
  getParser
} = require('codemod-cli').jscodeshift;
const {
  getOptions
} = require('codemod-cli');

function isEmberTestingFrom(callExpression) {
  const isFrom =
    callExpression.callee &&
    callExpression.callee.property &&
    callExpression.callee.property.type === 'Identifier' &&
    callExpression.callee.property.name === 'from' &&
    callExpression.callee.object &&
    callExpression.callee.object.property &&
    callExpression.callee.object.property.name == 'Testing' &&
    callExpression.callee.object.object &&
    callExpression.callee.object.object.name === 'EmberObject'

  return isFrom;
}

module.exports = function transformer(file, api) {
  const j = getParser(api);
  const options = getOptions();

  return j(file.source)
    .find(j.CallExpression, isEmberTestingFrom)
    .filter(expression =>
      expression.value && expression.value.arguments && expression.value.arguments[0]
    )
    .replaceWith(expression =>
      expression.value.arguments[0]
    )
    .toSource();

};

module.exports.type = 'js';