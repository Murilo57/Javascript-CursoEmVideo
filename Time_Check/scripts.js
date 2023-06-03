function load() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var data = new Date()
    var hour = data.getHours()
    msg.innerHTML = `Now are ${hour} hours`
    if (hour >= 0 && hour < 12) {
        //Good morning
        img.src='morning.jpg'
        document.body.style.background = '#f5b889'
    } else if (hour >= 12 && hour < 18) {
        //Good afternoon
        img.src='afternoon.jpg'
        document.body.style.background = '#532611'
    } else {
        //Good evening
        img.src='night.jpg'
        document.body.style.background = '#3a4654'
    }
}