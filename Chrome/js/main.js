function isAProblem(url) {
	var pos = url.search("http://coj.uci.cu/24h/problem.xhtml");
	return pos;
}

window.addEventListener("load",function() {
	var btnAdd = document.getElementById("btn-add");

	chrome.tabs.getSelected(null, function (tab) {
		/* Check whether the current page is from a problem or not. */
		if(isAProblem(tab.url)!=-1) {
			/* If so*, then check if the problem is already present on the queue. */			
			btnAdd.className = "btn-add enabled";
			btnAdd.disabled = false;
		}
	});

	btnAdd.addEventListener("click",function () {
		btnAdd.innerText = "Problem added to the queue.";
		btnAdd.className = "btn-add added";
		btnAdd.disabled = true;
	});	
});

