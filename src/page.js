function showError(error) {
    alert('Error \u2014 ' + error.message);
}

function showAccout () {
    $('#screen-account').show();
    $('#screen-loading').hide();
    $('#screen-wallet').hide();
}

 function showLoading(title) {
    $('#screen-account').hide();
    $('#screen-loading').show();
    $('#screen-wallet').hide();

    $('#loading-header').text(title) ;

    $("#loading-cancel").click(function() {
          App.cancelScrypt = true;
        }
    );
}

function showWallet() {
  $('#screen-account').hide();
  $('#screen-loading').hide();
  $('#screen-wallet').show();
}

function setupDropFile(parseJsonFun) {
  var inputFile = document.getElementById('select-wallet-file');
  var targetDrop = document.getElementById('select-wallet-drop');
  var inputPassword = document.getElementById('select-wallet-password');
  var submit = document.getElementById('select-submit-wallet');

  function check() {
      if (inputFile.files && inputFile.files.length === 1) {
          submit.classList.remove('disable');
          targetDrop.textContent = inputFile.files[0].name;
      } else {
          submit.classList.add('disable');
      }
  }

  inputFile.onchange = check;
  inputPassword.oninput = check;

  inputFile.addEventListener('dragover', function(event) {
      event.preventDefault();
      event.stopPropagation();
      targetDrop.classList.add('highlight');
  }, true);

  inputFile.addEventListener('drop', function(event) {
      targetDrop.classList.remove('highlight');
  }, true);

  submit.onclick = function() {
      if (submit.classList.contains('disable')) { return; }

      var fileReader = new FileReader();
      fileReader.onload = function(e) {
        parseJsonFun(e.target.result, inputPassword.value);
      };
      fileReader.readAsText(inputFile.files[0]);
  };
}
