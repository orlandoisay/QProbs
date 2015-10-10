window.addEventListener("load",function() {
	var btnAdd = document.getElementById("btn-add");
	var t;

	function isAProblem(url) {
		var pos = url.search("http://coj.uci.cu/24h/problem.xhtml");
		return pos;
	}

	function getId(url) {
		var s = url.split("=");
		return s[1];
	}

	function getName(title) {
		var s = title.split("Problem ");
		return s[1];
	}

	function addProblem(id, name) {
		var key = id;
		var problem = { 'id' : id, 'name' : name, 'date' : Date.now(), 'priority' : 1 };
		localStorage.setItem(key, JSON.stringify(problem));
	}

	function lockButton() {
		btnAdd.innerText = "Problem added to the queue.";
		btnAdd.className = "btn-add added";
		btnAdd.disabled = true;
	}

	function isAlready(t) {
		var key = getId(t.url);
		if(localStorage.getItem(key) != null)
			return true;
		else
			return false;
	}

	chrome.tabs.getSelected(null, function (tab) {
		t=tab;
		/* Check whether the current page is from a problem or not. */
		if(isAProblem(tab.url)!=-1) {
			/* If so*, then check if the problem is already present on the queue. */	
			if(isAlready(tab)) {
				lockButton();
			}
			else {
				btnAdd.className = "btn-add enabled";
				btnAdd.disabled = false;	
			}			
		}
	});

	btnAdd.addEventListener("click",function () {
		addProblem(getId(t.url), getName(t.title));

		lockButton();
	});	
});

