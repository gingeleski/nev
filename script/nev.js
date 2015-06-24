var nev = new NevBot();
var nevLines = new Array();

var displayCols = 60;
var displayRows = 20;

function nevReset() {
	nev.reset();
	nevLines.length = 0;
	nevStep();
}

function nevStep() {
	var f = document.forms.e_form;
	var userinput = f.e_input.value;
	if (nev.quit) {
		f.e_input.value = '';
		if (confirm("This session is over.\nStart over?")) nevReset();
		f.e_input.focus();
		return;
	}
	else if (userinput != '') {
		var usr = 'YOU:   ' + userinput;
		var rpl ='NEV: ' + nev.transform(userinput);
		nevLines.push(usr);
		nevLines.push(rpl);
		// display nicely
		// (fit to textarea with last line free - reserved for extra line caused by word wrap)
		var temp  = new Array();
		var l = 0;
		for (var i=nevLines.length-1; i>=0; i--) {
			l += 1 + Math.floor(nevLines[i].length/displayCols);
			if (l >= displayRows) break
			else temp.push(nevLines[i]);
		}
		nevLines = temp.reverse();
		f.e_display.value = nevLines.join('\n');
	}
	f.e_input.value = '';
	f.e_input.focus();
}
