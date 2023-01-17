/* 
	Theme: Color Generator (HTML5, CSS3, JavaScript)
    Author: Lynxsia IT Solutions
    Website: www.lynxsia.com
*/
// Global variable declaration
var round = Math.round, //Rounding numbers
	random = Math.random, // Generating random numbers
	colors = {}; // colors array

// Hex code for alpha transparency
const hexAlpha = {
	100: "FF",
	99: "FC",
	98: "FA",
	97: "F7",
	96: "F5",
	95: "F2",
	94: "F0",
	93: "ED",
	92: "EB",
	91: "E8",
	90: "E6",
	89: "E3",
	88: "E0",
	87: "DE",
	86: "DB",
	85: "D9",
	84: "D6",
	83: "D4",
	82: "D1",
	81: "CF",
	80: "CC",
	79: "C9",
	78: "C7",
	77: "C4",
	76: "C2",
	75: "BF",
	74: "BD",
	73: "BA",
	72: "B8",
	71: "B5",
	70: "B3",
	69: "B0",
	68: "AD",
	67: "AB",
	66: "A8",
	65: "A6",
	64: "A3",
	63: "A1",
	62: "9E",
	61: "9C",
	60: "99",
	59: "96",
	58: "94",
	57: "91",
	56: "8F",
	55: "8C",
	54: "8A",
	53: "87",
	52: "85",
	51: "82",
	50: "80",
	49: "7D",
	48: "7A",
	47: "78",
	46: "75",
	45: "73",
	44: "70",
	43: "6E",
	42: "6B",
	41: "69",
	40: "66",
	39: "63",
	38: "61",
	37: "5E",
	36: "5C",
	35: "59",
	34: "57",
	33: "54",
	32: "52",
	31: "4F",
	30: "4D",
	29: "4A",
	28: "47",
	27: "45",
	26: "42",
	25: "40",
	24: "3D",
	23: "3B",
	22: "38",
	21: "36",
	20: "33",
	19: "30",
	18: "2E",
	17: "2B",
	16: "29",
	15: "26",
	14: "24",
	13: "21",
	12: "1F",
	11: "1C",
	10: "1A",
	9: "17",
	8: "14",
	7: "12",
	6: "0F",
	5: "0D",
	4: "0A",
	3: "08",
	2: "05",
	1: "03",
	0: "00",
};

//Generate red, green, blue, alpha values
function generateColor(type = null) {
	// Check if HSL/HSLA color or not.
	if (type === "hsl" || type == "hsla") {
		colors = {
			hue: round(random() * 359),
			saturation: round(random() * 100),
			lightness: round(random() * 100),
			alpha: random().toFixed(1),
		};
	} else {
		var alpha =
			type === "hex" ? round(random() * 100) : random().toFixed(1);
		colors = {
			red: round(random() * 255),
			green: round(random() * 255),
			blue: round(random() * 255),
			alpha: alpha,
		};
	}
	return colors;
}

// Generate Contrast value for generated color so that text color can match the contrast of background color
function contrastColor(colors) {
	return (colors.red * 299 + colors.green * 587 + colors.blue * 114) / 1000;
}

/*
====================================
====================================
============ RGB Color ============
====================================
====================================
*/
// Set the values for rgb color variables
function setRGBValues(colors) {
	var color = `rgb(${colors.red}, ${colors.green}, ${colors.blue})`;
	document.querySelector("#rgbColor").textContent = color;
	document.querySelector("#rgbColor").style.backgroundColor = color;
	document.querySelector("#rgbRed").value = colors.red;
	document.querySelector("#rgbGreen").value = colors.green;
	document.querySelector("#rgbBlue").value = colors.blue;
	document.querySelector("#rgbRedValue").textContent = colors.red;
	document.querySelector("#rgbGreenValue").textContent = colors.green;
	document.querySelector("#rgbBlueValue").textContent = colors.blue;
	var textColor = contrastColor(colors) >= 128 ? "#000" : "#fff";
	document.querySelector("#rgbColor").style.color = textColor;
}

// Random RGB Button Click Event
document.querySelector("#randomRGBBtn").addEventListener("click", function () {
	var colors = generateColor("rgb");
	setRGBValues(colors);
});

// Red, Green, Blue Range Slider Change Event
document.querySelectorAll(".rgbInput").forEach(function (element) {
	element.addEventListener("change", function () {
		var colors = {
			red: document.querySelector("#rgbRed").value,
			green: document.querySelector("#rgbGreen").value,
			blue: document.querySelector("#rgbBlue").value,
			alpha: 1,
		};
		setRGBValues(colors);
	});
});

/*
====================================
====================================
============ RGBA Color ============
====================================
====================================
*/
// Set the values for rgb color variables
function setRGBAValues(colors) {
	var color = `rgba(${colors.red}, ${colors.green}, ${colors.blue}, ${colors.alpha})`;
	document.querySelector("#rgbaColor").textContent = color;
	document.querySelector("#rgbaColor").style.backgroundColor = color;
	document.querySelector("#rgbaRed").value = colors.red;
	document.querySelector("#rgbaGreen").value = colors.green;
	document.querySelector("#rgbaBlue").value = colors.blue;
	document.querySelector("#rgbaAlpha").value = colors.alpha * 10;
	document.querySelector("#rgbaRedValue").textContent = colors.red;
	document.querySelector("#rgbaGreenValue").textContent = colors.green;
	document.querySelector("#rgbaBlueValue").textContent = colors.blue;
	document.querySelector("#rgbaAlphaValue").textContent = colors.alpha;
	var textColor = contrastColor(colors) >= 128 ? "#000" : "#fff";
	document.querySelector("#rgbaColor").style.color = textColor;
}

// Random RGBA Button Click Event
document.querySelector("#randomRGBABtn").addEventListener("click", function () {
	var colors = generateColor("rgb");
	setRGBAValues(colors);
});

// RGBA Red, Green, Blue, Alpha Range Slider Change Event
document.querySelectorAll(".rgbaInput").forEach(function (element) {
	element.addEventListener("change", function () {
		var alpha = parseFloat(
			document.querySelector("#rgbaAlpha").value / 10
		).toFixed(1);
		var colors = {
			red: document.querySelector("#rgbaRed").value,
			green: document.querySelector("#rgbaGreen").value,
			blue: document.querySelector("#rgbaBlue").value,
			alpha: alpha,
		};
		setRGBAValues(colors);
	});
});

/*
====================================
====================================
============ HEX Color ============
====================================
====================================
*/

// Set the values for hex color variables
function setHEXValues(colors) {
	var textColor = contrastColor(colors) >= 128 ? "#000" : "#fff";
	document.querySelector("#hexRed").value = colors.red;
	document.querySelector("#hexGreen").value = colors.green;
	document.querySelector("#hexBlue").value = colors.blue;
	colors.red = colors.red.toString(16);
	colors.green = colors.green.toString(16);
	colors.blue = colors.blue.toString(16);
	colors.red = colors.red.length == 1 ? `0${colors.red}` : colors.red;
	colors.green = colors.green.length == 1 ? `0${colors.green}` : colors.green;
	colors.blue = colors.blue.length == 1 ? `0${colors.blue}` : colors.blue;
	var color = `#${colors.red}${colors.green}${colors.blue}`;
	document.querySelector("#hexColor").textContent = color;
	document.querySelector("#hexColor").style.backgroundColor = color;
	document.querySelector("#hexRedValue").textContent = colors.red;
	document.querySelector("#hexGreenValue").textContent = colors.green;
	document.querySelector("#hexBlueValue").textContent = colors.blue;
	document.querySelector("#hexColor").style.color = textColor;
}

// Random HEX Button Click Event
document.querySelector("#randomHEXBtn").addEventListener("click", function () {
	var colors = generateColor("hex");
	setHEXValues(colors);
});

// HEX Red, Green, Blue Range Slider Change Event
document.querySelectorAll(".hexInput").forEach(function (element) {
	element.addEventListener("change", function () {
		var colors = {
			red: parseInt(document.querySelector("#hexRed").value),
			green: parseInt(document.querySelector("#hexGreen").value),
			blue: parseInt(document.querySelector("#hexBlue").value),
			alpha: 1,
		};
		setHEXValues(colors);
	});
});

/*
====================================
====================================
============ HEX Alpha Color ============
====================================
====================================
*/

// Set the values for hex color variables
function setHEXAValues(colors) {
	var textColor = contrastColor(colors) >= 128 ? "#000" : "#fff";
	document.querySelector("#hexaRed").value = colors.red;
	document.querySelector("#hexaGreen").value = colors.green;
	document.querySelector("#hexaBlue").value = colors.blue;
	document.querySelector("#hexaAlpha").value = colors.alpha;
	colors.red = colors.red.toString(16);
	colors.green = colors.green.toString(16);
	colors.blue = colors.blue.toString(16);
	colors.alpha = hexAlpha[colors.alpha];
	colors.red = colors.red.length == 1 ? `0${colors.red}` : colors.red;
	colors.green = colors.green.length == 1 ? `0${colors.green}` : colors.green;
	colors.blue = colors.blue.length == 1 ? `0${colors.blue}` : colors.blue;
	var color = `#${colors.red}${colors.green}${colors.blue}${colors.alpha}`;
	document.querySelector("#hexaColor").textContent = color;
	document.querySelector("#hexaColor").style.backgroundColor = color;
	document.querySelector("#hexaRedValue").textContent = colors.red;
	document.querySelector("#hexaGreenValue").textContent = colors.green;
	document.querySelector("#hexaBlueValue").textContent = colors.blue;
	document.querySelector("#hexaAlphaValue").textContent = colors.alpha;
	document.querySelector("#hexaColor").style.color = textColor;
}

// Random HEX Button Click Event
document.querySelector("#randomHEXABtn").addEventListener("click", function () {
	var colors = generateColor("hex");
	setHEXAValues(colors);
});

// HEX Red, Green, Blue Range Slider Change Event
document.querySelectorAll(".hexaInput").forEach(function (element) {
	element.addEventListener("change", function () {
		var colors = {
			red: parseInt(document.querySelector("#hexaRed").value),
			green: parseInt(document.querySelector("#hexaGreen").value),
			blue: parseInt(document.querySelector("#hexaBlue").value),
			alpha: parseInt(document.querySelector("#hexaAlpha").value),
		};
		setHEXAValues(colors);
	});
});

/*
====================================
====================================
============ HSL Color ============
====================================
====================================
*/
// Set the values for hsl color variables
function setHSLValues(colors) {
	var color = `hsl(${colors.hue}, ${colors.saturation}%, ${colors.lightness}%)`;
	document.querySelector("#hslColor").textContent = color;
	document.querySelector("#hslColor").style.backgroundColor = color;
	document.querySelector("#hslHue").value = colors.hue;
	document.querySelector("#hslSaturation").value = colors.saturation;
	document.querySelector("#hslLightness").value = colors.lightness;
	document.querySelector("#hslHueValue").textContent = colors.hue;
	document.querySelector("#hslSaturationValue").textContent =
		colors.saturation;
	document.querySelector("#hslLightnessValue").textContent = colors.lightness;
	var textColor = contrastColor(colors) >= 128 ? "#000" : "#fff";
	document.querySelector("#hslColor").style.color = textColor;
}

// Random HSL Button Click Event
document.querySelector("#randomHSLBtn").addEventListener("click", function () {
	var colors = generateColor("hsl");
	setHSLValues(colors);
});

// Hue, Saturation, Lightness Range Slider Change Event
document.querySelectorAll(".hslInput").forEach(function (element) {
	element.addEventListener("change", function () {
		var colors = {
			hue: document.querySelector("#hslHue").value,
			saturation: document.querySelector("#hslSaturation").value,
			lightness: document.querySelector("#hslLightness").value,
			alpha: 1,
		};
		setHSLValues(colors);
	});
});

/*
====================================
====================================
============ HSLA Color ============
====================================
====================================
*/
// Set the values for hsl color variables
function hslaSetValues(colors) {
	var color = `hsla(${colors.hue}, ${colors.saturation}%, ${colors.lightness}%, ${colors.alpha})`;
	document.querySelector("#hslaColor").textContent = color;
	document.querySelector("#hslaColor").style.backgroundColor = color;
	document.querySelector("#hslaHue").value = colors.hue;
	document.querySelector("#hslaSaturation").value = colors.saturation;
	document.querySelector("#hslaLightness").value = colors.lightness;
	document.querySelector("#hslaAlpha").value = colors.alpha * 10;
	document.querySelector("#hslaHueValue").textContent = colors.hue;
	document.querySelector("#hslaSaturationValue").textContent =
		colors.saturation;
	document.querySelector("#hslaLightnessValue").textContent =
		colors.lightness;
	document.querySelector("#hslaAlphaValue").textContent = colors.alpha;
	var textColor = contrastColor(colors) >= 128 ? "#000" : "#fff";
	document.querySelector("#hslaColor").style.color = textColor;
}

// Random HSL Button Click Event
document.querySelector("#randomHSLABtn").addEventListener("click", function () {
	var colors = generateColor("hsl");
	hslaSetValues(colors);
});

// Hue, Saturation, Lightness Range Slider Change Event
document.querySelectorAll(".hslaInput").forEach(function (element) {
	element.addEventListener("change", function () {
		var alpha = parseFloat(
			document.querySelector("#hslaAlpha").value / 10
		).toFixed(1);
		var colors = {
			hue: document.querySelector("#hslaHue").value,
			saturation: document.querySelector("#hslaSaturation").value,
			lightness: document.querySelector("#hslaLightness").value,
			alpha: alpha,
		};
		hslaSetValues(colors);
	});
});
