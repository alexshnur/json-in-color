String.prototype.jsonColor = function() {
	var jsonLine = /^( *)("[\w.+-]+": )?("[^"]*"|[\w.+-]*)?([,[{])?$/mg,
		replacer = function(match, pIndent, pKey, pVal, pEnd) {
		var key = '<span class="json-key">',
			val = '<span class="json-value">',
			str = '<span class="json-string">';
		var r = pIndent || '';
		if (pKey) {
			r = r + key + pKey.replace(/[": ]/g, '') + '</span>: ';
		}
		if (pVal) {
			r = r + (pVal[0] == '"' ? str : val) + pVal + '</span>';
		}
		return r + (pEnd || '');
	};
	return this
		.replace(/&/g, '&amp;').replace(/\\"/g, '&quot;')
		.replace(/</g, '&lt;').replace(/>/g, '&gt;')
		.replace(jsonLine, replacer);
};