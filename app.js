(function () {
    let screen =document.querySelector('.screen');
    let buttons =document.querySelector('.btn');
    let clear =document.querySelector('.btn-clear');
    let equal =document.querySelector('.btn-equal');
   
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
        let value   = e.targer.dataset.num;
        screen.value +=value;

    })
    });
})();