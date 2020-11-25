

let toHide = document.getElementById("invisible-content");

function clickButton(){
	if(toHide.style.display=="none"){
		toHide.style.display="block"
	} else{
		toHide.style.display="none"
	}
}