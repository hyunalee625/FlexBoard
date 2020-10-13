const currentDate = document.querySelector('.date')
const date = new Date();
const month = date.toLocaleString('default', { month: 'long' });
const day = date.toLocaleString("en", { day: "numeric" });
const year = date.getFullYear();
const weekday = date.toLocaleString('en-US', { weekday: 'long' })

// document.write(new Date().toLocaleString('en-us',{month:'long', day:'numeric', year:'numeric'}))
currentDate.innerHTML = '<span>' + month + " " + day + ', ' + year + ' (' + weekday + ')' + '</span>'
