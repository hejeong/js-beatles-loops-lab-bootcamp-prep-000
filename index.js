function theBeatlesPlay(musicians, instruments){
  var array = []

  for(var i = 0; i < musicians.length; i++){
    array[i] = musicians[i] + " plays " + instruments[i]
  }

  return array
}

function johnLennonFacts(facts){
  var count = facts.length - 1
  while(count >= 0){
    facts[count] += "!!!"
    count--
  }
  return facts
}
