// Sticky Header On scroll
let header = document.querySelector("header")
window.addEventListener("scroll" , ()=>{
    window.scrollY > 80 ? header.classList.add("sticky") : header.classList.remove("sticky")
})



// Stop video 
const stopVideo = element => {
	const iframe = element.querySelector('iframe');
	const video = element.querySelector('video');
	if ( iframe ) {
		let iframeSrc = iframe.src;
		iframe.src = iframeSrc;
	}
	if ( video ) {
		video.pause();
	}
}
// Open video Sec
let VideOpen = document.querySelector("#vid-icon")
let VideoSec = document.querySelector(".videoFrame")
let VideoClose = document.querySelector("#closeFrame")
VideOpen.addEventListener("click" , ()=> VideoSec.classList.add("active"))
VideoClose.addEventListener("click" , ()=>{
    VideoSec.classList.remove("active")
    stopVideo(VideoSec)
})


// On Scroll Section Animation
let sections = document.querySelectorAll("section")
window.addEventListener("scroll" , ()=>{
	// 
	sections.forEach(sec =>{
		let scroll_Y = window.scrollY
		let OffsetTop = sec.offsetTop
		let SecHeight = sec.offsetHeight
		if(scroll_Y >= OffsetTop && scroll_Y < OffsetTop + SecHeight ) {
			sec.classList.add("active") 
			document.getElementById(sec.dataset.link).classList.add("active")
		}
		else {
			sec.classList.remove("active")
			document.getElementById(sec.dataset.link).classList.remove("active")
		}

	})
})

// Get Courses Data using JSON
let JsonApi = './courses.json'
let CoursesGrid = document.querySelector(".courses-grid")
fetch(JsonApi).then(response => response.json()).then(courses =>{
	courses.forEach(course =>{
		console.log(course)
		let courseItem = `
		<div class="course">
                <img class="course-img" src="${course.image}" alt="${course.title}">
                <div class="course-info">
                    <div class="author">
                        <div class="author-img">
                            <img src="${course.authorProfile}" alt="${course.author}">
                        </div>
                        <span class="author-name">By <a href="" class="author-name">${course.author}</a></span>
                    </div>
                    <a class="course-title" href="">
                        <h3>${course.title}</h3>
                    </a>
                    <div class="course-std">
                        <span>
                            <ion-icon name="book-outline"></ion-icon>
                            ${course.lessonsNum} Lessons
                        </span>
                        <span>
                            <ion-icon name="person-outline"></ion-icon>
                            ${course.studentsNum} students
                        </span>
                    </div>
                    <div class="buy-course">
                        <span class="price">${course.price}</span>
                        <button id="addTocart">Add To Cart<ion-icon name="cart-outline"></ion-icon></button>
                    </div>
                </div>
            </div>`
			CoursesGrid.innerHTML += courseItem
	})
})