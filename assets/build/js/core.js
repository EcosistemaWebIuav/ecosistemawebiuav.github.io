/* About sidebar */
var width = document.body.clientWidth;
function openSidebar() {
	document.getElementById("about-sidebar").style.right = "0";
	if(width >= 992) {
		document.getElementById("body-overlay").style.opacity = "1";
		document.getElementById("body-overlay").style.pointerEvents = "all";
	}
	document.getElementById("sidebar-close").style.opacity = "1";
	document.getElementById("sidebar-close").style.pointerEvents = "all";
	document.getElementById("sidebar-body").style.opacity = "1";
}
function closeSidebar() {
	if(width < 992) {
		document.getElementById("about-sidebar").style.right = "-100%";
	} else {
		document.getElementById("about-sidebar").style.right = "-50%";
	}
	if(width >= 992) {
		document.getElementById("body-overlay").style.opacity = "0";
		document.getElementById("body-overlay").style.pointerEvents = "none";
	}
	document.getElementById("sidebar-close").style.opacity = "0";
	document.getElementById("sidebar-close").style.pointerEvents = "none";
	document.getElementById("sidebar-body").style.opacity = "0";
}
function openMenu() {
	document.getElementById("menu-sidebar").style.left = "0";
	document.getElementById("menu-close").style.opacity = "1";
	document.getElementById("menu-close").style.pointerEvents = "all";
	document.getElementById("menu-body").style.opacity = "1";
}
function closeMenu() {
	document.getElementById("menu-sidebar").style.left = "-100%";
	document.getElementById("menu-close").style.opacity = "0";
	document.getElementById("menu-close").style.pointerEvents = "none";
	document.getElementById("menu-body").style.opacity = "0";
}
window.addEventListener('resize', function(event) {
    if (document.getElementById("about-sidebar").style.removeProperty) {
		document.getElementById("about-sidebar").style.removeProperty('right');
		document.getElementById("body-overlay").style.removeProperty('opacity');
		document.getElementById("body-overlay").style.removeProperty('pointer-events');
		document.getElementById("sidebar-close").style.removeProperty('opacity');
		document.getElementById("sidebar-close").style.removeProperty('pointer-events');
		document.getElementById("sidebar-body").style.removeProperty('opacity');
		document.getElementById("menu-sidebar").style.removeProperty('left');
		document.getElementById("body-overlay").style.removeProperty('opacity');
		document.getElementById("body-overlay").style.removeProperty('pointer-events');
		document.getElementById("menu-close").style.removeProperty('opacity');
		document.getElementById("menu-close").style.removeProperty('pointer-events');
		document.getElementById("menu-body").style.removeProperty('opacity');
	} else {
		document.getElementById("about-sidebar").style.removeAttribute('right');
		document.getElementById("body-overlay").style.removeAttribute('opacity');
		document.getElementById("body-overlay").style.removeAttribute('pointer-events');
		document.getElementById("sidebar-close").style.removeAttribute('opacity');
		document.getElementById("sidebar-close").style.removeAttribute('pointer-events');
		document.getElementById("sidebar-body").style.removeAttribute('opacity');
		document.getElementById("menu-sidebar").style.removeAttribute('left');
		document.getElementById("body-overlay").style.removeAttribute('opacity');
		document.getElementById("body-overlay").style.removeAttribute('pointer-events');
		document.getElementById("menu-close").style.removeAttribute('opacity');
		document.getElementById("menu-close").style.removeAttribute('pointer-events');
		document.getElementById("menu-body").style.removeAttribute('opacity');
	}
}, true);