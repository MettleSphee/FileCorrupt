function process(event) {
	var x = Math.random()*100;
	var ch;
	var string='';
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
		if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(blob, "result.txt");
		else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(blob);
        a.href = url;
        a.download = "result.txt";
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
    }
	document.write("</body></html>");
	
  reader.readAsText(files[0])
}
var input = document.querySelector('.file')
input.addEventListener('change', process, false)