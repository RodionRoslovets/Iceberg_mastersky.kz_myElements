window.addEventListener('DOMContentLoaded', ()=>{
    let failImgs = document.querySelectorAll('.failure-img__item'),
        failBtn = document.querySelectorAll('.failure-item');

    for(let i = 1;i<failImgs.length;i++){
        failImgs[i].classList.add('failure-img__item__hidden');
    }

    failBtn[0].classList.add('failure-item__active');
    
    failBtn.forEach((el,index)=>{
        el.addEventListener('click', ()=>{
            failBtn.forEach(element =>{
                if(element.classList.contains('failure-item__active')){
                    element.classList.remove('failure-item__active');
                }
            });

            failImgs.forEach(element =>{
                if(!element.classList.contains('failure-img__item__hidden')){
                    element.classList.add('failure-img__item__hidden');
                }
            });

            el.classList.add('failure-item__active');
            failImgs[index].classList.remove('failure-img__item__hidden');
        });
    });

    // setTimeout(()=>{
    //     let ev = new Event('click');
    //     failBtn[3].dispatchEvent(ev);
    // },3000);

});