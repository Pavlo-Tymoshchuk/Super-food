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
    
    // Main-screen Slider
    
    let buttonPrev = document.querySelector(".main-screen__button .button-prev");
    let buttonNext = document.querySelector(".main-screen__button .button-next");
    let showItem = document.querySelector('.slider_item.show');
    let lengthSlider = document.querySelectorAll('.slider_item').length;
    document.querySelector('.number-slider .all-slider').innerHTML = lengthSlider;
    
    function setCurrentSlideIndex(item) {
        let currentSlideIndex = item.getAttribute('data-index');
        let numberSlider = document.querySelector('.number-slider .current');
        
        numberSlider.innerHTML = currentSlideIndex;
    }
    
    setCurrentSlideIndex(showItem);
    
    buttonPrev.addEventListener('click',function(){
        let activeItem = document.querySelector('.slider_item.show');
        
         if(document.querySelector('.slider_item.show').previousElementSibling == null) {
            return;
        }
        
        buttonNext.classList.remove('no-active');
        
        activeItem.previousElementSibling.classList.add('show');
        activeItem.classList.remove('show');
        
        setCurrentSlideIndex(document.querySelector('.slider_item.show'));
        
        if(document.querySelector('.slider_item.show').previousElementSibling == null) {
            buttonPrev.classList.add('no-active');
        }

    });
    
    buttonNext.addEventListener('click',function(){
        let activeItem = document.querySelector('.slider_item.show');
        
         if(document.querySelector('.slider_item.show').nextElementSibling == null) {
            return;
        }
        
        buttonPrev.classList.remove('no-active');
        
        activeItem.nextElementSibling.classList.add('show');
        activeItem.classList.remove('show');
        
        setCurrentSlideIndex(document.querySelector('.slider_item.show'));
        
        if(document.querySelector('.slider_item.show').nextElementSibling == null) {
            buttonNext.classList.add('no-active');
        }
        
    });
    
    
    // /Main-screen Slider
    
    // Main reviews
    
    function showMoreInfo() {
        
        let info = document.querySelectorAll('.main_reviews__text-item .content p');
        let content = document.querySelectorAll('.main_reviews__text-item .content');
        let moreButton = document.querySelectorAll('.main_reviews__text-item .more_info');
        
        for(var i = 0; info.length > i; i++) {
            if(info[i].offsetHeight > content[i].offsetHeight) {
                moreButton[i].classList.add('show');
            }else {
                moreButton[i].classList.remove('show');
            }
        }
    }
    
    showMoreInfo();
    
    document.addEventListener('click', function(e){
        let item = e.target;
        
        if(item.closest('.more_info')) {
            item.closest(".main_reviews__text-item").classList.toggle("active")
        }
    });
    
    let buttonPrevReviews = document.querySelector(".main_reviews__button .button-prev");
    let buttonNextReviews = document.querySelector(".main_reviews__button .button-next");
    
    
    buttonPrevReviews.addEventListener('click',function(){
        let showItemImg = document.querySelector('.main_reviews__img-item.show');
        let showItemText = document.querySelector('.main_reviews__text-item.show');
        
         if(document.querySelector('.main_reviews__img-item.show').previousElementSibling == null) {
            return;
        }
        
        buttonNextReviews.classList.remove('no-active');
        
        showItemImg.previousElementSibling.classList.add('show');
        showItemImg.classList.remove('show');
        showItemText.previousElementSibling.classList.add('show');
        showItemText.classList.remove('show');
        
        if(document.querySelector('.main_reviews__img-item.show').previousElementSibling == null) {
            buttonPrevReviews.classList.add('no-active');
        }
        
        let nextElem = showItemImg.previousElementSibling.previousElementSibling;
        if(nextElem) {
            showItemImg.previousElementSibling.previousElementSibling.classList.remove('prev');
        }

    });
    
    buttonNextReviews.addEventListener('click',function(){
        let showItemImg = document.querySelector('.main_reviews__img-item.show');
        let showItemText = document.querySelector('.main_reviews__text-item.show');
        
        if(document.querySelector('.main_reviews__img-item.show').nextElementSibling == null) {
            return;
        }
        
        buttonPrevReviews.classList.remove('no-active');
        
        showItemImg.nextElementSibling.classList.add('show');
        showItemImg.classList.remove('show');
        showItemText.nextElementSibling.classList.add('show');
        showItemText.classList.remove('show');
        
        if(document.querySelector('.main_reviews__img-item.show').nextElementSibling == null) {
            buttonNextReviews.classList.add('no-active');
        }
        
        if(document.querySelector('.main_reviews__img-item.show').previousElementSibling.previousElementSibling != null){
            showItemImg.previousElementSibling.classList.add('prev');
        }
    });
    
    
});







