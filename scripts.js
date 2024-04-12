const output = document.getElementById('card-holder')
document.getElementById('file').onchange = function() {
  var file = this.files[0];

  var reader = new FileReader();
  reader.onload = function() {
    const text = this.result;

    var lines = text.split('\n');
    for (var line = 0; line < lines.length -1; line++) {
        const div = document.createElement("div");
        div.classList.toggle("kartya");
        const img = document.createElement("img");
        img.classList.toggle("kep");
        img.src = `Images/${lines[line]}`;
        div.appendChild(img);
        const p = document.createElement("h3");
        p.textContent = lines[line];
        div.appendChild(p);
        output.appendChild(div);
    }
  };
  reader.readAsText(file);
};