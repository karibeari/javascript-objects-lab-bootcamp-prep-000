var recipes = new Object();

function updateObjectWithKeyAndValue(recipes, key, value){
  Object.assign({}, recipes, {[key]:value})
  return recipes;
}
