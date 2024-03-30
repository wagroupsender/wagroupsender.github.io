
function pkclickevent(e) {
    var t = document.createEvent("MouseEvents");
    t.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), e.dispatchEvent(t)
}

function simulateClick(element) {
  const event = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
  });
  element.dispatchEvent(event);
}

function clickWithDelay() {
  const aTags = document.querySelectorAll('td.t_socks_info a');
  let index = 0;

  function clickNext() {
    if (index < aTags.length) {
      simulateClick(aTags[index]);
      index++;
      setTimeout(clickNext, document.getElementById("run_delay").value);
    }
  }

  clickNext();
}





var lp=document.querySelector('button[type="submit"].uk-button-small');

if(lp){


if(document.querySelector('#search_country')){
document.getElementById("search_country").value = "United States";
}
if(document.querySelector('#search_YN')){
document.getElementById("search_YN").value = "No";
}
/* setTimeout(function () {
var script = document.createElement("script");script.innerHTML = `search1(1);`;document.body.appendChild(script);


        }, 5000) */
		
var e = document.createElement("style");
    e.innerText = "*:not(input):not(textarea)::selection{background-color:#000!important;color:#fff!important}*:not(input):not(textarea)::-moz-selection{background-color:#000!important;color:#fff!important}*:not(input):not(textarea):not(button){-webkit-user-select:auto!important;-moz-user-select:auto!important;-ms-user-select:auto!important;user-select:auto!important;-webkit-tap-highlight-color:#666!important;-webkit-touch-callout:none!important}.select{ -webkit-user-select: all!important;-moz-user-select: all!important;-ms-user-select: all!important;user-select: all!important;display: inline-block;}button {margin: 2px;}", document.body.appendChild(e);
	 var e = document.createElement("div");
    e.innerHTML = '<div style="position: fixed;top: 0;z-index: 99999;right: 0;background: #fff;"><textarea id="savelink" style="width:100%;height:200px;"></textarea>IP Count: <span id="tcreate">0</span><input type="number" id="run_delay" value="2000" placeholder="Delay" style="width: 50px;"/><button id="runlink">View IP</button><button id="runcopy">copy</button></div>', document.body.appendChild(e);


document.getElementById("runlink").addEventListener("click", function(){
	

clickWithDelay();


});


document.getElementById("runcopy").addEventListener("click", function(){
	
document.getElementById("savelink").select(),document.execCommand("copy")

});

function extractIPs() {
var inputText = document.querySelector('body').innerText;
            var regex = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:\d+\b/g;
            var matches = inputText.match(regex);
            if (matches) {
                document.getElementById('savelink').value += "\n"+matches.join('\n');
            }
			
			
        }

function updatedatabase() {
    var inputText = document.getElementById('savelink').value;
	document.getElementById('tcreate').textContent=inputText.split('\n').length;
 extractIPs();doit()
}
setInterval(updatedatabase, 100);


}


function doit() {
var txt = document.getElementById('savelink').value
txt = txt.replace(new RegExp( ">", "g" ), "&gt;");
txt = txt.replace(new RegExp( "<", "g" ), "&lt;");
var masterarray = txt.split('\n');
var itemsInArray = masterarray.length;
var dedupe = new Array();
i = 0;
var editedArray = new Array();
while (i < itemsInArray) {
masterarray[i]=masterarray[i].replace(/\s+$/, '');
masterarray[i]=masterarray[i].replace(new RegExp( "\t", "g" ), '    ') 

masterarray[i]=masterarray[i].replace(/^\s+/, '');

var ulc = masterarray[i];

editedArray[ulc] = ulc;
dedupe[ulc]="0";
i++;
}
i = 0;
var uniques = new Array();
for (key in dedupe) {
if (editedArray[key] != '') {
uniques.push(editedArray[key]);
}
dedupe[key]="dontprint";
i++;
}

var ulen = uniques.length;
var thelist = uniques.join("\n");
var rmvd = itemsInArray - ulen;

document.getElementById('savelink').value=thelist;
}


//showregion("false", "");
