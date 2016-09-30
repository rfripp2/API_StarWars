//LOCAL STORAGE
function localstorage(usuario){
if(localStorage){
	localStorage.setItem(Date.now(), JSON.stringify(usuario));
}
}