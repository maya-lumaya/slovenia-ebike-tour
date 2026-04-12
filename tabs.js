document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tabs').forEach(function (tabBar) {
    var section = tabBar.parentElement;
    var tabs = tabBar.querySelectorAll('.tab');
    var contents = section.querySelectorAll(':scope > .tab-content');

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var target = tab.getAttribute('data-target');

        tabs.forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');

        contents.forEach(function (c) {
          c.classList.toggle('active', c.getAttribute('data-tab') === target);
        });
      });
    });
  });
});
