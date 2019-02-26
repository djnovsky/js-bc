let isAccountLocked = false
let userRole = 'user'

if (isAccountLocked) {
    console.log('Account is locked')
} else if (userRole === 'admin'){
    console.log('Welcome! ' + userRole)
} else {
    console.log('Who the hell are you? Get out!')
}

let temp = 140

if (temp >= 120) {
    console.log('It\'s hot outside.')
} else if (temp <= 32) {
    console.log('It\'s cold outside!')
} else {
    console.log('Go for it. It is pretty nice.')
}