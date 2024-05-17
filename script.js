document.addEventListener('DOMContentLoaded', function() {
  const vibrateBtn1 = document.getElementById('vibrateBtn1');
  const shortVibrateBtn = document.getElementById('shortVibrateBtn');
  const longVibrateBtn = document.getElementById('longVibrateBtn');
  const vibrateBtn = document.getElementById('vibrateBtn');
  const durationInput = document.getElementById('duration');
  const patternInput = document.getElementById('pattern');

  vibrateBtn1.addEventListener('click', function() {
    if ('vibrate' in navigator) {
      navigator.vibrate(200);
    } else {
      console.log('Vibration API not supported');
    }
  });

  shortVibrateBtn.addEventListener('click', function() {
    if ('vibrate' in navigator) {
      navigator.vibrate(100);
    } else {
      console.log('Vibration API not supported');
    }
  });

  longVibrateBtn.addEventListener('click', function() {
    if ('vibrate' in navigator) {
      navigator.vibrate(500);
    } else {
      console.log('Vibration API not supported');
    }
  });

  vibrateBtn.addEventListener('click', function() {
    const duration = parseInt(durationInput.value);
    const pattern = patternInput.value.split(',').map(Number);

    if ('vibrate' in navigator) {
      if (!isNaN(duration) && duration > 0) {
        navigator.vibrate(duration);
      } else if (pattern.length > 0 && !pattern.includes(NaN)) {
        navigator.vibrate(pattern);
      } else {
        console.log('Invalid vibration parameters');
      }
    } else {
      console.log('Vibration API not supported');
    }
  });
});