function outerFunction(){
    let msg = `outer`
    function innerFunction(){
        let msg1='inner'
        function innerMostFunction(){
            let msg2='inner most'
            console.log(msg)
            console.log(msg1)
            console.log(msg2)
        }
        innerMostFunction()
    }
    innerFunction()
}
outerFunction()