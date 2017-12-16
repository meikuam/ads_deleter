function injected_main() {

    var geekEl = document.getElementsByClassName("wall_marked_as_ads");
    if(geekEl != null) {
        for (i = 0; i < geekEl.length; i++) {
            var parentOfgeekEl = geekEl[i].parentNode.parentNode.parentNode.parentNode.parentNode;
            parentOfgeekEl.remove();
        }
    }
    var promEl = document.getElementsByClassName("wall_text_name_explain_promoted_post");
    if(promEl != null) {
        for (i = 0; i < promEl.length; i++) {
            var parentOfpromEl = promEl[i].parentNode.parentNode.parentNode.parentNode.parentNode;
            parentOfpromEl.remove();
        }
    }

    var fuckingAD = document.getElementsByClassName("ads_ads_box");
    if(fuckingAD != null) {
        for (i = 0; i < fuckingAD.length; i++) {
            var parentOffuckingAD = fuckingAD[i].parentNode;
            parentOffuckingAD.remove();
        }
    }

    var fuckingAD = document.getElementById("ads_left");
    if(fuckingAD != null) {
        fuckingAD.remove();
    }
    // set timeout
    var tid = setTimeout(injected_main, 1000);
    // console.log("keke");


//var dl = function(filename) 
//{
//	var a = document.createElement('a');
//	a.href = filename; // Set the file name.
//	a.download = 'good track';
//	a.style.display = 'none';
//	document.body.appendChild(a);
//	a.click();
//	delete a;
//};
//	var pl = getAudioPlayer()
//	var current = pl.getCurrentAudio()[2];
//	dl(current);

}
