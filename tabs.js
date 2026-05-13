document.addEventListener('DOMContentLoaded', function () {
  var tabs = document.querySelectorAll('.gtab[data-version]');

  function switchVersion(vId) {
    tabs.forEach(function (t) {
      t.classList.toggle('active', t.getAttribute('data-version') === vId);
    });
    window.ACTIVE_ROUTE = vId;
    if (window.renderVersion) { window.renderVersion(vId); }
    if (window.updateMapVariant) { window.updateMapVariant(vId); }
  }

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      switchVersion(tab.getAttribute('data-version'));
    });
  });
});
