const aliens = [
  {text: 'Klingons', evil: false, _id: 125223},
  {text: 'Borg', evil: true, _id: 127904},
  {text: 'Betazoid', evil: false, _id: 139608},
  {text: 'Romulans', evil: true, _id: 149608},
  {text: 'Cardassians', evil: true, _id: 129608},
  {text: 'Pakleds', evil: false, _id: 179608},
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, aliens)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

export { 
	find
}