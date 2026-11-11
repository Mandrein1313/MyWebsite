document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('btnHello');
  if (btn) {
    btn.addEventListener('click', function () {
      alert('สวัสดีจาก Nexus Studio!');
    });
  }
});
