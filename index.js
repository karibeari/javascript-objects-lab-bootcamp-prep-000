var recipes = new Object();

function updateObjectWithKeyAndValue(recipes, key, value){
  Object.assign(newRecipes, recipes, {[key]:value})
  return newRecipes;
}
