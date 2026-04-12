document.addEventListener('DOMContentLoaded', function () {
  var tabs = document.querySelectorAll('.gtab');
  var allVC = document.querySelectorAll('.vc');

  function switchVariant(variant) {
    tabs.forEach(function (t) {
      t.classList.toggle('active', t.getAttribute('data-variant') === variant);
    });

    allVC.forEach(function (el) {
      el.classList.toggle('hidden', el.getAttribute('data-v') !== variant);
    });

    // Update map markers
    if (window.updateMapVariant) {
      window.updateMapVariant(variant);
    }
  }

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      switchVariant(tab.getAttribute('data-variant'));
    });
  });
});
