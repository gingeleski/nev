var eliza = new ElizaBot();
var elizaLines = new Array();

var displayCols = 60;
var displayRows = 20;

function elizaReset() {
	eliza.reset();
	elizaLines.length = 0;
	elizaStep();
}

function elizaStep() {
	var f = document.forms.e_form;
	var userinput = f.e_input.value;
	if (eliza.quit) {
		f.e_input.value = '';
		if (confirm("This session is over.\nStart over?")) elizaReset();
		f.e_input.focus();
		return;
	}
	else if (userinput != '') {
		var usr = 'YOU:   ' + userinput;
		var rpl ='NEV: ' + eliza.transform(userinput);
		elizaLines.push(usr);
		elizaLines.push(rpl);
		// display nicely
		// (fit to textarea with last line free - reserved for extra line caused by word wrap)
		var temp  = new Array();
		var l = 0;
		for (var i=elizaLines.length-1; i>=0; i--) {
			l += 1 + Math.floor(elizaLines[i].length/displayCols);
			if (l >= displayRows) break
			else temp.push(elizaLines[i]);
		}
		elizaLines = temp.reverse();
		f.e_display.value = elizaLines.join('\n');
	}
	f.e_input.value = '';
	f.e_input.focus();
}
