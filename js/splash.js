document.addEventListener('DOMContentLoaded', function () {
  var splash = document.getElementById('splash-overlay');
  if (!splash) return;

  // Only show the splash once per visit — don't replay it on every
  // trip back to the home page in the same session.
  if (sessionStorage.getItem('mrCheesecakeSplashSeen')) {
    splash.remove();
    return;
  }

  document.body.classList.add('splash-active');

  var dismissed = false;
  var autoTimer = setTimeout(enter, 20000);

  function enter() {
    if (dismissed) return;
    dismissed = true;
    clearTimeout(autoTimer);
    sessionStorage.setItem('mrCheesecakeSplashSeen', '1');
    splash.classList.add('splash-hidden');
    document.body.classList.remove('splash-active');
    splash.addEventListener('transitionend', function () {
      splash.remove();
    }, { once: true });
    // Fallback in case transitionend doesn't fire (e.g. reduced motion)
    setTimeout(function () {
      if (splash.parentNode) splash.remove();
    }, 700);
  }

  splash.addEventListener('click', enter);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') enter();
  });
});
