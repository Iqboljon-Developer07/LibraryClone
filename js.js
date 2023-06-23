const headerForm = document.querySelector('.header-form-container');
const searchIcon = document.querySelector('.search-icon');

searchIcon.onclick = () =>{
    headerForm.classList.toggle("show-form")
}

const booksCarousel = document.querySelector('.books-carousel');

let isDragStart = false,prevPageX,prevScrollLeft;

const dragStart = (e) =>{
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = booksCarousel.scrollLeft;
}

const dragging = (e)=>{
    if(!isDragStart) return;
    let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    booksCarousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = ()=>{
    isDragStart = false;
}

booksCarousel.addEventListener('mousemove', dragging);
booksCarousel.addEventListener('touchmove', dragging);

booksCarousel.addEventListener('mouseup', dragStop);
booksCarousel.addEventListener('touchend', dragStop);

booksCarousel.addEventListener('mouseleave', dragStop);
booksCarousel.addEventListener('mousedown', dragStart);
booksCarousel.addEventListener('touchstart', dragStart);



const booksCarousel2 = document.querySelector('.books-container');
const books2Icons = document.querySelectorAll('.books i');

let firstImage = document.querySelector('.book');
let firstImageWidth = firstImage.clientWidth + 14;

books2Icons.forEach(icon => {
    icon.addEventListener('click', ()=>{
        booksCarousel2.scrollLeft += icon.id == 'left' ? -firstImageWidth : firstImageWidth;
        console.log(1);
    })
});

const dragStart2 = (e) =>{
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = booksCarousel2.scrollLeft;
}

const dragging2 = (e)=>{
    if(!isDragStart) return;
    let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    booksCarousel2.scrollLeft = prevScrollLeft - positionDiff;
    booksCarousel2.classList.add('dragging');
}

const dragStop2 = ()=>{
    isDragStart = false;
    booksCarousel2.classList.remove('dragging');
}

booksCarousel2.addEventListener('mousemove', dragging2);
booksCarousel2.addEventListener('touchmove', dragging2);

booksCarousel2.addEventListener('mouseup', dragStop2);
booksCarousel2.addEventListener('touchend', dragStop2);

booksCarousel2.addEventListener('mouseleave', dragStop2);
booksCarousel2.addEventListener('mousedown', dragStart2);
booksCarousel2.addEventListener('touchstart', dragStart2);



const newBooksCarousel = document.querySelectorAll('.new-books-contents');

var isDragStartNewBook = false,prevPageXNewBook,prevScrollLeftNewBook

newBooksCarousel.forEach(
    newCarousel =>{    
        function dragStartNewBook (e){
            isDragStartNewBook = true
            prevPageXNewBook = e.pageX || e.touches[0].pageX;
            prevScrollLeftNewBook = newCarousel.scrollLeft;
        }
        function draggingNewBook(e){
            if(!isDragStartNewBook) return;
            let positionDiffNewBook = (e.pageX || e.touches[0].pageX) - prevPageXNewBook;
            newCarousel.scrollLeft = prevScrollLeftNewBook - positionDiffNewBook;
        }
        function dragStopNewBook (){
            isDragStartNewBook = false
        }
        newCarousel.addEventListener('mousemove', draggingNewBook)
        newCarousel.addEventListener('touchmove', draggingNewBook)
        newCarousel.addEventListener('mouseup', dragStopNewBook)
        newCarousel.addEventListener('touchend', dragStopNewBook)
        newCarousel.addEventListener('mouseleave', dragStopNewBook)
        newCarousel.addEventListener('mousedown', dragStartNewBook)
        newCarousel.addEventListener('touchstart', dragStartNewBook)
    }
)


const booksCarousel3 = document.querySelector('.customers');
const booksCarousel4 = document.querySelector('.blog-contents');


const dragStart4 = (e) =>{
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = booksCarousel4.scrollLeft;
}

const dragging4 = (e)=>{
    if(!isDragStart) return;
    let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    booksCarousel4.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop4 = ()=>{
    isDragStart = false;
}

booksCarousel4.addEventListener('mousemove', dragging4);
booksCarousel4.addEventListener('touchmove', dragging4);

booksCarousel4.addEventListener('mouseup', dragStop4);
booksCarousel4.addEventListener('touchend', dragStop4);

booksCarousel4.addEventListener('mouseleave', dragStop4);
booksCarousel4.addEventListener('mousedown', dragStart4);
booksCarousel4.addEventListener('touchstart', dragStart4);


const footerPlusIcons = document.querySelectorAll('.fa-plus');
const footerContents = document.querySelectorAll('.footer-content');

for (let i = 0;i < footerPlusIcons.length;i++){
    footerPlusIcons[i].onclick = () =>{
        for (let j = 0;j < footerPlusIcons.length;j++){
            if (j == i){
                footerContents[j].classList.toggle('footer-content-show');
                footerPlusIcons[j].classList.toggle('icon-rotate');
            }
            else{
                footerContents[j].classList.remove('footer-content-show');
                footerPlusIcons[j].classList.remove('icon-rotate');
            }
        }
    }
}

const formIcon = document.querySelector('.fa-user');
const formExitIcon = document.querySelector('.fa-xmark');
const sign = document.querySelector(".sign");

formIcon.onclick = () =>{
    sign.classList.toggle('sign2');
    formExitIcon.classList.toggle('fa-xmark2');
}


formExitIcon.onclick = ()=>{
    sign.classList.toggle('sign2');
    formExitIcon.classList.toggle('fa-xmark2');
}