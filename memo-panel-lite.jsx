#target illustrator
#targetengine mameo_panel
if (flag === undefined){
	var wBounds = [0, 0, 250, 150];
	var tBounds = [5, 5, 245, 145];
	var tText = "Input or paste text on this area.";
	var flag = false;
}
var w = new Window("palette", "Memo", wBounds, {resizeable: true, closeButton: true});
var t = w.add("edittext", tBounds, tText, {multiline: true, wantReturn: true});
w.margins = 5;
w.onResizing = w.onResize = w.onMove = function(){
	this.layout.resize();
	wBounds = w.bounds;
	tBounds = t.bounds;
};
t.alignment = ["fill", "fill"];
t.minimumSize = [100, 24];
t.active = true;
t.addEventListener("keydown", function(k){
	tText = this.text;
	if (k.keyName === "Escape"){
		wBounds = w.bounds;
		tBounds = t.bounds;
		w.close();
	}
});
if (flag === false){
	w.center();
	flag = true;
}
w.show();