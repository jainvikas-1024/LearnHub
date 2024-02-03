document.addEventListener('DOMContentLoaded', function () {
    let likebtn = document.querySelector('.fa-heart');
    let bookmarkbtn = document.querySelector('.fa-bookmark');

    likebtn.addEventListener('click', changeLike);
    bookmarkbtn.addEventListener('click', changeBookmark);

    function changeLike() {
        console.log("Like button clicked");
        likebtn.classList.toggle('far');
        likebtn.classList.toggle('fas');
        likebtn.classList.toggle('active');
    }

    function changeBookmark() {
        console.log("Bookmark button clicked");
        bookmarkbtn.classList.toggle('far');
        bookmarkbtn.classList.toggle('fas');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    let showMoreBtn = document.querySelector('.show-more-btn');

    showMoreBtn.addEventListener('click', changeShowMore);

    function changeShowMore() {
        console.log("Show More button clicked");
        window.location.href = 'new-page.html';
    }
});
function toggleMenu() {
    const menu = document.getElementById('hiddenMenu');
    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
}

let viewsCount = parseInt(localStorage.getItem('viewsCount')) || 999;

function increaseViews() {
    viewsCount += 1;
    localStorage.setItem('viewsCount', viewsCount);
    document.querySelector('.views').textContent = `${viewsCount} views`;
}

document.querySelector('.views').textContent = `${viewsCount} views`;




