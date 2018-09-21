var clozeText

function ClozeCard(text, cloze) {
	this.text = text
	this.cloze = cloze
	this.fullText = text
}

ClozeCard.prototype.full = function() {
	clozeDeleted = this.cloze
	clozeText = this.text
	clozeText = clozeText.replace("...", clozeDeleted);
	console.log(clozeText);
}