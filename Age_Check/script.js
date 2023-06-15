function verificador() {
    var data = new Date()
    var year = data.getFullYear()
    var fyear = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fyear.value.lenght == 0 || Number(fyear.value) > year) {
    window.alert('[Error] check of dates and try again')
   } else {
       var fsex =   document.getElementsByName('radsex')
       var age  = year - Number(fyear.value)
       var gender = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'photo')
       if (fsex[0].checked) {
          gender = 'Masculine'
          if(age >=0 && age <= 13){
            //kid  
            img.setAttribute('src', 'menino.jpg')          
        } else if (age < 21){
            //Young
            img.setAttribute('src', 'rapaz.jpg')
        } else if (age < 50) {
            //Adult
            img.setAttribute('src', 'adulto.jpg')
        } else {
            //Elderly
            img.setAttribute('src', 'idoso.jpg')
        }
       } else if (fsex[1].checked) {
          gender = 'Feminine'
          if (age >=0 && age < 10){
            //
            img.setAttribute('src', 'menina.jpg')
          } else if (age < 21){
            //
            img.setAttributes('src', 'moca.jpg')
          } else if (age < 50) {
            //
            img.setAttribute('src', 'adulta.jpg')            
          } else {
            img.setAttribute('src', 'idosa.jpg')
          }
        }
       res.style.textAlign = 'center'
       res.innerHTML = `Detected ${gender} with ${age} years`
       res.appendChild(img)   
  }
}
