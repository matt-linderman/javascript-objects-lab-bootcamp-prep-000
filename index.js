var recipes = new Object ({})

function updateObjectWithKeyAndValue(object, key, value) {
  // non-destructive addition; input object is unchanged
  var newObject = Object.assign({}, object, { [key]: value})
  return newObject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  // destructive addition; changes original object
  object[key] = value
  return object
}

function deleteFromObjectByKey(object,key) {
  // non-destructive solution; input object is unchanged
  var newObject = object
  delete newObject[key]
  return newObject
}