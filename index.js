$("#generateButton").click(function () {
  genQrCode()
})

function genQrCode() {
  var accName = $("#accName").val();
  var accNumber = $("#accNumber").val();
  var accIFSC = $("#accIFSC").val();
  console.log(accName, accNumber, accIFSC);
  var str = "upi://pay?pa=" + accNumber + "@" + accIFSC +".ifsc.npci&pn=" + accName + "&cu=INR";

  var qrcode = new QRCode("box1", {
    text: str,
    width: 256,
    height: 256,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});
}
