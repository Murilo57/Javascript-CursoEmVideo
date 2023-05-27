const betterDeveloper = 'Vanessa'

function whoIsBetterCallback(calback,errorCallback) {

    return new Promise((resolve,reject) => {
      if (betterDevoloper != 'Vanessa' && betterDevoloper != 'Gabriel') {
      errorCallback({
        name: 'This is wrong',
        message: betterDeveloper + '? Really'
      })
      } else {
        cancelIdleCallback({
            name: betterDeveloper,
            message: 'CDFs are the best!'
        })
      }  
    }) 
}

whoIsBetterCallback()
   .then((result) => {
    console.log(result.name + '? Yeah!' + result.message)
}).catch((error) => {
    console.log(error.name + ' '+error.message)
})