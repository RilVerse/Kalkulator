const display =
	document.getElementById("display");
let expression = "";

function update(val) {
	display.textContent = val || "0";
}

function append(val) {
	expression += val;
	update(expression);
}

function clearDisplay() {
	expression = "";
	update();
}

function del() {
	expression = expression.slice(0, -1);
	update(expression);
}

function calculate() {
	// Easter egg lucu
	if (
		expression.replace(/\s+/g, "") ===
		"1+1"
	) {
		update("Hello World");
		expression = "";
		return;
	}

	try {
		expression =
			eval(expression).toString();
		update(expression);
	} catch (e) {
		update("Error");
		expression = "";
	}
}

function percent() {
	try {
		expression = (
			eval(expression) / 100
		).toString();
		update(expression);
	} catch (e) {}
}

function toggleSign() {
	try {
		expression = (
			parseFloat(expression) * -1
		).toString();
		update(expression);
	} catch (e) {}
}

function sqrt() {
	try {
		expression = Math.sqrt(
			parseFloat(expression),
		).toString();
		update(expression);
	} catch (e) {}
}

function square() {
	try {
		expression = Math.pow(
			parseFloat(expression),
			2,
		).toString();
		update(expression);
	} catch (e) {}
}

function reciprocal() {
	try {
		expression = (
			1 / parseFloat(expression)
		).toString();
		update(expression);
	} catch (e) {}
}

// Keyboard support
document.addEventListener("keydown", e => {
	if (/[0-9+\-*/.=]/.test(e.key)) {
		if (e.key === "Enter") calculate();
		else if (e.key === "Backspace") del();
		else if (e.key === "Escape")
			clearDisplay();
		else append(e.key);
	}
});
