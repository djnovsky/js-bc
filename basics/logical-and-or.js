let temp = 160

if (temp >= 60 && temp <=90) {
    console.log('It is pretty nice outhere')
 } else if (temp >=120 || temp <= 0 ) {
    console.log(
        'Do not go outside!'
    )
} else {
    console.log('Do what you want.')
}

let isGuestOneVegan = false
let isGuestTwoVegan = true

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only vegan food.')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Offer some vegan food')
} else {
    console.log('Offer any food')
}
