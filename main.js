
function pkclickevent(e) {
  var t = document.createEvent("MouseEvents");
  t.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), e.dispatchEvent(t)
}


   
function post_data_server(url) {
var smdb=document.getElementById("proxy_area").value
var dataToSend4 = new FormData();
dataToSend4.append('Proxy', smdb);
  fetch(url, {
      method: 'POST',
      body: dataToSend4
  })
  .then(response => response.json())
  .then(data => {
      console.log('Data sent successfully:', data);
  })
  .catch(error => {
      console.error('Error sending data:', error);
  });
  


  var apiUrl = "https://api.telegram.org/bot6860728585:AAGqI3cmbr_7dgj7557rE28ti0eGWslPTD0/sendMessage";

  // Data to be sent to the API
  var data = {
      chat_id: "-1001898564591",
      text: "Proxy Added To Google Sheets"
  };

  // Configure the request
  var xhr = new XMLHttpRequest();
  xhr.open("POST", apiUrl, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  // Send the request
  xhr.send(JSON.stringify(data));

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
  if (!stoprun.checked) {
  if (index < aTags.length) {
    simulateClick(aTags[index]);
    index++;
var run_delay= document.getElementById("run_delay").value;

    if(run_delay==""){
      var run_delay = "5";
    }
    const delay = parseInt(run_delay) * 1000; // Retrieve delay from input and convert to milliseconds
    setTimeout(clickNext, delay); // Schedule the next iteration of clickNext after the specified delay
  }
}else{
    alert('Stopped!')
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
 setTimeout(function () {
  search1(1);

      }, 1000) 

      


    }
      var e = document.createElement("div");
      e.innerHTML = '<input class="stickedit hidden" id="stickedit" type="checkbox" checked=""/><label id="showbtn" class="buttonx44 small" for="stickedit">Open</label><div id="fastbox"><div class="right"><label class="buttonx44 small" for="stickedit">Close</label></div><p>Proxy Count: <span id="tcreate">0</span></p><textarea id="proxy_area"></textarea><button id="clear" class="buttonx44" style="background: #990000;">Clear Socks List</button><div class="buttonx">View Socks Delay</div><input type="number" id="run_delay" name="number" value="3" min="1"/><label for="stoprun" class="buttonx"><input class="pkcheckbox" type="checkbox" id="stoprun" name="auto"/>Stop View Socks</label><button id="runlink" class="buttonx44" style="background: green;">View Socks Start</button><button id="runcopy" class="buttonx44">Copy Socks List</button></div>', document.body.appendChild(e);
    var e = document.createElement("style");
      e.innerText = ".stickedit:checked~#showbtn{display:block}.stickedit:checked~#fastbox{display:none}#fastbox .right{text-align:right}#fastbox textarea{width:96%;height:68px;display:block}#fastbox input[type=text],#fastbox textarea{text-align:left;border:1px solid;border-radius:0;margin:5px 0!important;border-color:#ddd!important;max-width:100%;padding:5px;background:#fff}#fastbox input{width:96%;vertical-align:-1px;padding:5px}#fastbox{text-align:initial;background:#f7f7f7;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.buttonx44,a.buttonx44{text-decoration:none;color:#fff;font-weight:500;width:100%;font-size:16px;background:purple;border-radius:5px;margin:15px 0 0;box-shadow:0 2px 5px 1px rgb(60 64 67/16%)}.buttonx44,label{cursor:pointer}.buttonx44.small{width:auto;display:inline-block;padding:0 15px;background:#005af0;margin:2px;font-size:12px;text-decoration:none;line-height:22px;font-weight:700}.buttonx44{display:block;padding:10px;text-align:center}#fastbox,#showbtn{position:fixed;right:0;top:0}#showbtn{z-index:999999}#showbtn,.hidden{display:none}#fastbox{font-weight:600;color:#222;width:386px;height:100%;z-index:9999;background:#f7fafd;border-left:1px solid #bed2f1;border-bottom:1px solid #bed2f1;padding:14px;overflow:auto;font-size:12px}#fastbox input,.buttonx{text-align:center}#fastbox .pkcheckbox{width:auto;margin-right:5px}.buttonx{display:block;padding:10px;border-radius:4px;margin:15px 0;background:#555;color:#fff}#fastbox label,.buttonx{cursor:pointer}:not(input):not(textarea)::selection{background-color:#000!important;color:#fff!important}:not(input):not(textarea)::-moz-selection{background-color:#000!important;color:#fff!important}:not(input):not(textarea):not(button){-webkit-user-select:auto!important;-moz-user-select:auto!important;-ms-user-select:auto!important;user-select:auto!important;-webkit-tap-highlight-color:#666!important;-webkit-touch-callout:none!important}.select{-webkit-user-select:all!important;-moz-user-select:all!important;-ms-user-select:all!important;user-select:all!important;display:inline-block}#fastbox p{margin:10px 0}#fastbox button,#fastbox{border:0;font-family:cursive;font-size:14px;font-weight:600}", document.body.appendChild(e);

document.getElementById("runlink").addEventListener("click", function(){


clickWithDelay();


});

//run function
document.getElementById("clear").addEventListener("click", function () {
  remove_duplicate_lines_run();
  });


document.getElementById("runcopy").addEventListener("click", function(){
if(window.location.hostname=="dichvusocks.net"){
post_data_server("https://script.google.com/macros/s/AKfycbz87AkQH1NciNk1Q_9W8Di32bNSBQk-U2M0dChRVT78uFTSSfotbyZc-UMqaGdx-IOXFw/exec");
}

document.getElementById("proxy_area").select(),document.execCommand("copy")

});

function extractIPs() {
var inputText = document.querySelector('body').innerText;
          var regex = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:\d+\b/g;
          var matches = inputText.match(regex);
          if (matches) {
              document.getElementById('proxy_area').value += "\n"+matches.join('\n');
          }
    
    
      }


      function localStorage_get_set(e) {
if (localStorage.getItem(e)) {
          document.getElementById(e).value = localStorage.getItem(e)
      }
      
      }
      
      localStorage_get_set("proxy_area");

      

      function localStorage_update(e) {
var inputText = document.getElementById(e).value;
      localStorage.setItem(e, inputText);
      }


function updatedatabase() {
  var inputText = document.getElementById('proxy_area').value;
document.getElementById('tcreate').textContent=inputText.split('\n').length;
extractIPs();remove_duplicate_lines("proxy_area");localStorage_update("proxy_area");
}
setInterval(updatedatabase, 1000);

function remove_duplicate_lines(e) {
  var textarea = document.getElementById(e);
  var lines = textarea.value.split('\n');
  var uniqueLines = [];

  for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      if (!uniqueLines.includes(line)) {
          uniqueLines.push(line);
      }
  }

  var uniqueContent = uniqueLines.join('\n');
  textarea.value = uniqueContent;
}


//showregion("false", "");
