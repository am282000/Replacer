//Play with me # Replacer

replaceText(document.body);

function replaceText(element) {
	if (element.hasChildNodes()) {
		element.childNodes.forEach(replaceText);
	} else if (element.nodeType === Text.TEXT_NODE) {
		element.textContent = element.textContent.replace(/html/gi, '🥈 ');
	}
}
