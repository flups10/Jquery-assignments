images = $('img')

for (let i = 0; i < images.length; i++){
    image = images[i]
    images[i].click(test)
}

function test(){
    console.log('test')
}
// images.each( function(){
    //     images[0].click( () => {
//         console.log('test')
//     })
// })