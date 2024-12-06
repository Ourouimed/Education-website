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