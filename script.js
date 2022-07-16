function process(event) {
	var x = Math.random()*100;
	var ch;
	var string;
	var files = event.target.files
	var reader = new FileReader()
	reader.onload = function() {
		var contents = this.result;
		document.write("<html><body>");
		for (let j = 0; j < contents.length; j++) {
			ch=contents.substr(j, 1);
			ch=String.fromCharCode(ch.charCodeAt(0)+(Math.random() * x));
			string+=ch;
			document.write(ch);
		}
		
		var blob = new Blob([string], {
			type: "text/plain;charset=utf-8"
		});
		saveAs(blob);
    }
	document.write("</body></html>");
	
  reader.readAsText(files[0])
}
var input = document.querySelector('.file')
input.addEventListener('change', process, false)