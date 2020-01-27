// Header

document.addEventListener("DOMContentLoaded", function(event) {
    let searchButton = document.querySelector(".button-search");
    let searchInput = document.querySelector(".header-search__input");
    let searchMobileInput = document.querySelector(".mobile-search__input");
    
    searchButton.addEventListener('click', function(){
        document.querySelector(".header-search").classList.add('active');
    });
    
    function liveSearch(input, classItem) {
        input.addEventListener('keyup', function(){
            document.querySelector(classItem).classList.add('full');
            if(input.value == "") {
                document.querySelector(classItem).classList.remove('full');
            }
        });
    }
    
    liveSearch(searchInput, ".header-search");
    liveSearch(searchMobileInput, ".header-mobile-search");
    
    document.addEventListener("click", function(e){
        let elem = e.target;
        if(!elem.closest('.button-search') && !elem.closest('.header-search__input')) {
            searchInput.value = "";
            document.querySelector(".header-search").classList.remove('active');
            document.querySelector(".header-search").classList.remove('full');
        }
        
        if(elem.closest('.js-close')) {
            let popup = document.querySelectorAll('.js-popup');
            popup.forEach(function(item){
                item.classList.remove('show');
            });
        }
    });
    
    let burgerMenu = document.querySelector('.burger-menu');
    let headerCatalog = document.querySelector('.header-catalog');
    
    burgerMenu.addEventListener('click', function(){
        document.querySelector('.header-menu').classList.add('show');
    });
    
    headerCatalog.addEventListener('click', function(){
        document.querySelector('.header_categories .header-sub__list').classList.add('show');
    });
    
    // //Header
    
    
    // Check input 
    
    let allInput = document.querySelectorAll('.main_input');
    allInput.forEach(function(item){
        
        item.addEventListener('keyup', function(){
            if(item.value != "") {
                item.closest('.js-wrapper').classList.add('active');
            }else {
                item.closest('.js-wrapper').classList.remove('active');
            }
        });
    });
    
    // /Check input
    
    // Popup
        
    let mainButton = document.querySelectorAll('.js-button');
    let overlay = document.querySelector('.overlay');
    let htmlOverflow = document.querySelector('html');
    
    for(var i = 0; mainButton.length > i; i++) {
        if(mainButton[i] !== null) {
            
            mainButton[i].addEventListener('click', function(){
                let getData = this.getAttribute('data-target');
                let popup = document.querySelector(`.popup[data-target ='${getData}']`);
                popup.classList.add('active');
                overlay.classList.add('active');
                htmlOverflow.classList.add('overflow')
            });
        }
    }
    
    document.addEventListener('click', function(e){
        let elem = e.target;
        
        if(elem.closest('.js-close')){
            let popupActive = document.querySelector('.popup.active');
            if(popupActive) {
                popupActive.classList.remove('active');
                overlay.classList.remove('active');
                htmlOverflow.classList.remove('overflow');
            }
            
        }
    });

    overlay.addEventListener('click', function(){
        let popupActive = document.querySelector('.popup.active');
        popupActive.classList.remove('active');
        overlay.classList.remove('active');
        htmlOverflow.classList.remove('overflow');
    });
    
    // /Popup
    
    // Stars
    
    document.addEventListener('click', function(e){
        let elem = e.target;
        
        if(elem.closest(".star__item")) {
            let parent = elem.closest('.review_form__wrapper');
            let starInput = parent.querySelector('.stars__input');
            let starValuse = elem.closest(".star__item").getAttribute('data-target');
            let allStarts = document.querySelectorAll('.star__item');
            starInput.setAttribute('value', starValuse);
            starList = parent.querySelector('.star__list');
            
            starList.classList.add('checked');
            
            allStarts.forEach(function(item){
                item.classList.remove("active");
            });
            
            elem.closest(".star__item").classList.add('active');
        }
    });
    
     // /Stars
    
    //Drop list 
    
    var dropList = document.querySelectorAll('.sort_type');

    document.addEventListener('click', function(e){
    let element = e.target;
    
    if(element.closest('.show_more_sort')){
        let isActive = element.closest('.sort_type').classList.contains('active')? true: false;
        
        dropList.forEach(item => {item.classList.remove('active')});
        
        if(isActive)
            element.closest('.sort_type').classList.remove('active');
        else
            element.closest('.sort_type').classList.add('active');
    }
    
    if(element.closest('.drop_item')){
        let value = element.closest('.drop_item').innerHTML;
        let droplist = element.closest('.sort_type');
        let dropItems = droplist.querySelectorAll('.drop_item');
        
        dropItems.forEach(item => {item.classList.remove('active')});
        element.closest('.drop_item').classList.add('active');
        
        // past value
        droplist.querySelector('.show_more_sort div').innerHTML = value;
        
        // close dropdown
        droplist.classList.remove('active');
    }
    
    });
    
    document.querySelector('body').addEventListener('click', function(event){
        if(!event.target.closest('.sort_type')) {
            document.querySelectorAll('.sort_type').forEach(function(item){
                item.classList.remove('active');
            }); 
        }
    });
    
    // General Slider 
    
    let arrows = document.querySelectorAll(".js-arrows");
    
    
    let arrowsInfinity = document.querySelectorAll('.js-arrows-infinity');

    function setCurrentSlideIndex(item) {
        let slider = item.closest('.slider-infinity');
        let currentSlideIndex = slider.querySelector('.js-slider-item-infinity.show').getAttribute('data-index');
        item.innerHTML = currentSlideIndex;
    }

    document.querySelectorAll('.js-arrows-infinity .current').forEach(function(item){
        setCurrentSlideIndex(item);
    });

    function initialSliderInfinity() {
        for(var i = 0;arrowsInfinity.length > i; i++) {
            let slider = arrowsInfinity[i].closest(".slider-infinity");
            let sliderItems = slider.querySelectorAll('.js-slider-item-infinity');
            let arrowNext = arrowsInfinity[i].querySelector('.next');
            let arrowPrev = arrowsInfinity[i].querySelector('.prev');
            let sliderList = slider.querySelector('.js-slider-list');
            let allNumber = slider.querySelector('.js-arrows-infinity .all-slider');
            
            allNumber.innerHTML = sliderItems.length;
            
            arrowNext.addEventListener('click', function() {
                let itemShow = slider.querySelector('.js-slider-item-infinity.show');
                
                itemShow.nextElementSibling.classList.add('show');
                itemShow.classList.remove('show');
                
                setTimeout(function(){
                    let newElem = itemShow;
                    itemShow.remove();
                    sliderList.append(newElem);
                },750);
                
                document.querySelectorAll('.js-arrows-infinity .current').forEach(function(item){
                    setCurrentSlideIndex(item);
                });
            });
            
            arrowPrev.addEventListener('click', function() {
                let itemShow = slider.querySelector('.js-slider-item-infinity.show');
                let lastElem = sliderList.lastElementChild;
                
                sliderList.prepend(lastElem);
                
                setTimeout(function(){
                    itemShow.previousElementSibling.classList.add('show');
                    itemShow.classList.remove('show');
                    document.querySelectorAll('.js-arrows-infinity .current').forEach(function(item){
                        setCurrentSlideIndex(item);
                    });
                },20)
            });
            
            var startPointX;
            var startPointY;
            slider.addEventListener("touchstart", function(event) {
                startPointX = event.changedTouches[0].screenX;
                startPointY = event.changedTouches[0].screenY;
            }, false);
            slider.addEventListener("touchend", function(event){
                var endPointX = event.changedTouches[0].screenX;
                var endPointY = event.changedTouches[0].screenY;
                
                if(startPointX - endPointX > 40) {
                    arrowNext.click();
                } else if(endPointX - startPointX > 40) {
                    arrowPrev.click();
                }
            }, false);
        }
    }
    initialSliderInfinity();
        
    function initialSlider() {
        for(var i = 0;arrows.length > i; i++) {
            let slider = arrows[i].closest(".slider");
            let arrowNext = arrows[i].querySelector('.next');
            let arrowPrev = arrows[i].querySelector('.prev');
            let allPage = slider.querySelector('.js-arrows .all-slider');
            let allItems = slider.querySelectorAll('.js-slider-item').length;
            
            if(allPage) {
                allPage.innerHTML = allItems;
            }
            
            
            arrowNext.addEventListener('click', function() {
                let itemShow = slider.querySelector('.js-slider-item.show');
                let dotActive = slider.querySelector('.product__dots_button.active');
                
                
                if(slider.querySelector('.js-slider-item.show').nextElementSibling == null) {
                    return;
                }
                
                if(dotActive != null) {
                    dotActive.nextElementSibling.classList.add('active');
                    dotActive.classList.remove('active');
                }
                
                arrowPrev.classList.remove('disable');
                
                itemShow.nextElementSibling.classList.add('show');
                itemShow.classList.remove('show');
                
                if(slider.querySelector('.js-slider-item.show').nextElementSibling == null) {
                    arrowNext.classList.add('disable');
                }
            });
            
            arrowPrev.addEventListener('click', function() {
                let itemShow = slider.querySelector('.js-slider-item.show');
                let dotActive = slider.querySelector('.product__dots_button.active');
                
                if(slider.querySelector('.js-slider-item.show').previousElementSibling == null) {
                    return;
                }
                
                if(dotActive != null) {
                    dotActive.previousElementSibling.classList.add('active');
                    dotActive.classList.remove('active');
                }
                
                 
                arrowNext.classList.remove('disable');
                
                itemShow.previousElementSibling.classList.add('show');
                itemShow.classList.remove('show');
                
                if(slider.querySelector('.js-slider-item.show').previousElementSibling == null) {
                    arrowPrev.classList.add('disable');
                }
            });

            var startPointX;
            var startPointY;
            slider.addEventListener("touchstart", function(event) {
                startPointX = event.changedTouches[0].screenX;
                startPointY = event.changedTouches[0].screenY;
            }, false);
            slider.addEventListener("touchend", function(event){
                var endPointX = event.changedTouches[0].screenX;
                var endPointY = event.changedTouches[0].screenY;
                
                if(startPointX - endPointX > 40) {
                    arrowNext.click();
                } else if(endPointX - startPointX > 40) {
                    arrowPrev.click();
                }
            }, false);
        }
    }
    initialSlider();
    
    document.addEventListener('click', function(e){
        let elem = e.target;
        
        if(elem.closest('.js-dot')) {
            document.querySelectorAll('.js-dot').forEach(function(item){
                item.classList.remove('active');
            });
            
            let productItem = document.querySelectorAll('.product__slider_item')
            productItem.forEach(function(item){
                item.classList.remove('show');
            });
            
            let buttonPrev = document.querySelector('.product__slider_buttons .prev');
            let buttonNext = document.querySelector('.product__slider_buttons .next');
            
            buttonPrev.classList.remove('disable');
            let index = elem.getAttribute('data-index');
            
            if(index == 1) {
                buttonPrev.classList.add('disable');
                buttonNext.classList.remove('disable');
            }
            
            if(index == productItem.length) {
                buttonNext.classList.add('disable');
                buttonPrev.classList.remove('disable');
            }
            
            document.querySelector('.product__slider_item[data-index= "'+ index + '"]').classList.add('show');
            elem.classList.add('active');
        }
    });
    
     // /General Slider
     
     // More info
     
      function showMoreInfo() {
            
        let info = document.querySelectorAll('.js-item .content p');
        let content = document.querySelectorAll('.js-item .content');
        let moreButton = document.querySelectorAll('.js-item .more_info');
        
        if(info) {
            for(var i = 0; info.length > i; i++) {
                if(info[i].offsetHeight > content[i].offsetHeight) {
                    moreButton[i].classList.add('show');
                }else {
                    moreButton[i].classList.remove('show');
                }
            }
        }
    }
        
    showMoreInfo();
    
    document.addEventListener('click', function(e){
        let item = e.target;
        
        if(item.closest('.more_info')) {
            item.closest(".js-item").classList.toggle("active")
        }
    });
     
     // Product calc
     
     let allCalcElem = document.querySelectorAll('.js-calc');
     
     
     allCalcElem.forEach(function(item){
        let calcInput = item.querySelector('.product-calc .input');
        let calcDecorInput = item.querySelector('.product-calc__decor-input');
        let calcMinus = item.querySelector('.product-calc .delete');
        let calcPlus = item.querySelector('.product-calc .add');
        
        calcPlus.addEventListener('click', function(){
            calcInput.value = +calcInput.value + 1;
            calcDecorInput.innerHTML = calcInput.value;
        });
        
        calcMinus.addEventListener('click', function(){
            if(calcInput.value < 2) {
                return
            }
            
            calcInput.value = +calcInput.value - 1;
            calcDecorInput.innerHTML = calcInput.value;
        });
     });
});







