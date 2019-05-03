  //count the number of students who arrived late
  var earlyComers=0
  var lateComers=0

  a.forEach((value) => {
      value<=0?earlyComers++:lateComers++
  })

 //set a condition ,if studen who arrived late are below threshold class start
  if (earlyComers >= k) {
      return 'NO'
  } else {
      return "YES"
  }
 //else no class
