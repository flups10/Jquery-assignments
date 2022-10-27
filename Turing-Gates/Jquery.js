images = $('img')


images.each( function(x){
    images[x].click( () => {
        console.log('test')
    })
})