var list;
var elements = [];
	
function getElements() {
	var el = [];
	for(var i in localStorage) {
		el.push(JSON.parse(localStorage[i]));
	}
	return el;
}

function date(d) {
	var ndate = new Date(d);
	var dt = ndate.toLocaleString();
	return dt;
}

function addRow(data,parity) {
	var row = "";
		if(parity%2==0)
			row += "<tr>";
		else
			row += "<tr class='even'>";
		row += "<td class='u-id'>"+data.id+"</td>";
		row += "<td class='u-name'>"+data.name+"</td>";
		row += "<td class='u-date'>"+date(data.date)+"</td>";
		row += "<td class='u-priority'>"+data.priority+"</td>";
		row += "<td>&times;</td>";
		row += "</tr>";

	return row;
}

addEventListener("load", function() {
	list = document.getElementById('list');
	elements = getElements();

	for(var i=0;i<elements.length;i++) {
		list.innerHTML += addRow(elements[i],i);
	}
});