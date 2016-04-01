function sync(){
	code.textContent=frame.contentWindow.document.body.innerHTML;
}

function rSync(){
	frame.contentWindow.document.body.innerHTML=code.textContent;
}

function openLink(){
	frame.src=url.value;
        code.textContent=frame.contentWindow.document.body.innerHTML;
}

function ifEdit(){
	frame.contentWindow.document.designMode="on";
}

function ifStop(){
	frame.contentWindow.document.designMode="off";
	sync();
}

function divEdit(){
	code.contentEditable=true;
}

function divStop(){
	code.contentEditable=false;
	rSync();
}

function init(){
	var frame=document.getElementById("frame");
	var url=document.getElementById("url");
	var code=document.getElementById("code");
        code.textContent=frame.contentWindow.document.body.innerHTML;
}