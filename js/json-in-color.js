String.prototype.jsonColor = function() {
	var jsonLine = /^( *)("[\w.+-]+": )?("[^"]*"|[\w.+-]*)?([,[{])?$/mg,
		replacer = function(match, pIndent, pKey, pVal, pEnd) {
		var key = '<span style="color: #006699;">',
			val = '<span style="color: #ff6600;">',
			str = '<span style="color: #d44950;">';
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