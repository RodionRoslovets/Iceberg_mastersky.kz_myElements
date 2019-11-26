import './scss/new.scss';
import './js/menu';
window.addEventListener('DOMContentLoaded', function(){
    //Отправка формы
let form = document.querySelectorAll('.popupForm__form')[0],
    formFields = document.querySelectorAll('.form__field'),
    statusField = document.querySelector('.statusField');

form.addEventListener('submit', function(event){
    event.preventDefault();

    let formObj = new FormData(form);    

    let obj = {};
    formObj.forEach(function (value, key) { 
            obj[key] = value;
        });
	let json = JSON.stringify(obj);
    
    function catchPromise(){
        return new Promise(function(resolve, reject){
            let xhr = new XMLHttpRequest();

            xhr.open('POST', 'post.php');
            xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

            xhr.send(json);

            xhr.onload = function(){
                if (xhr.readyState === 4) {
                    if (xhr.status == 200) {
                        statusField.innerText = 'Ваша заявка отправлена, скоро наши менеджеры свяжутся с Вами!';
                        setTimeout(
                            function(){
                                resolve(xhr.status);
                            }, 2000
                        );
                    } else {
                        statusField.innerText = 'Что-то пошло не так, пожалуйста свяжитесь с нами по телефону';
                        setTimeout(
                            function(){
                                reject();
                            }, 2000
                        );
                    }
                }
            };
        });
    }

    catchPromise()
            .then(response => {                
                hidePopup();
                formFields.forEach(el => {
                    el.value = '';
                });
                statusField.innerText = '';
            })
            .catch(() => {
                
            });
});

//показ и скрытие формы
let showPopupBtn = document.querySelectorAll('.popupButton')[0],
    popupBlock = document.querySelectorAll('.popupForm__block')[0],
    closePopupButton = document.querySelectorAll('.closePopup')[0];

function showPopup(){
    function show(){
        return new Promise(function(resolve, reject){            
                popupBlock.classList.remove('popupForm__block__hidden');
                resolve();            
        });
    }

    show().then(function(){
        setTimeout(function(){
            popupBlock.classList.remove('popupForm__block__zeroOpacity');
        }, 100);
               
    });
}

function hidePopup(){
    function hide(){
        return new Promise(function(resolve, reject){
            popupBlock.classList.add('popupForm__block__zeroOpacity');
            resolve(); 
        });
    }
    hide().then(function(){
        setTimeout(function(){
            popupBlock.classList.add('popupForm__block__hidden');
        }, 100);
    });
}
showPopupBtn.addEventListener('click', showPopup);

closePopupButton.addEventListener('click', hidePopup);

//popup картинки
let sliderImage = document.querySelectorAll('.feedback-letters img'),
			popupImgBlock = document.querySelector('#popupImg'),
			popupImg = document.querySelector('#popupImg img');
			
		sliderImage.forEach(el => {
			el.addEventListener('click', function(){
				popupImgBlock.classList.remove('popupImg__hidden');
				popupImg.src = el.src;
			});
		});
		popupImgBlock.addEventListener('click', function(){
			popupImgBlock.classList.add('popupImg__hidden');
			popupImg.src = '#';
		});
});

