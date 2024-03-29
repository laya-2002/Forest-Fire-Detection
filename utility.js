function readImage(element) {
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function() {
    $.ajax({
      url: "https://detectionfire-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/9d1a744e-6349-47e0-b060-0f9137d87471/classify/iterations/Iteration3/image",
      data: reader.result,
      processData: false,
      contentType: "application/octet-stream",
      headers: {
        'Prediction-key': config.FFD_KEY
      },
      type: 'POST',
      success: function(response) {
        var result = response["Predictions"];
        alert(result);
      },
      error: function(error) {
        alert('Please upload an image file.');
      }
    });
  }
  reader.readAsArrayBuffer(file);
}
