var title = document.getElementById('inputTitle').value;
var content = document.getElementById('inputContent').value;

function escrever(){
    
    var fso  = new ActiveXObject("Scripting.FileSystemObject");

    var fh = fso.CreateTextFile("/dados.txt", true); 

    fh.WriteLine(title);
    fh.WriteLine(content);

    fh.Close(); 

}