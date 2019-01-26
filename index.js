var recipes = new Object();

function updateObjectWithKeyAndValue(recipes, key, value){
  newRecipes = Object.assign({}, recipes, {[key]:value});
}
