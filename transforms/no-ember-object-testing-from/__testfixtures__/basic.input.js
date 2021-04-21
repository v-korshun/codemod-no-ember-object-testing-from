var a = EmberObject.Testing.from({});
var b = {
  test: EmberObject.Testing.from(a)
};
clearInterval(EmberObject.Testing.from({}));
var c = {
  test: b,
  test1: EmberObject.Testing.from(a),
};