document.addEventListener('DOMContentLoaded', function() {
  const vibrateBtn1 = document.getElementById('vibrateBtn1');
  const shortVibrateBtn = document.getElementById('shortVibrateBtn');
  const longVibrateBtn = document.getElementById('longVibrateBtn');
  const durationBtn = document.getElementById('durationBtn');
  const patternBtn = document.getElementById('patternBtn');
  const samplePatternBtn = document.getElementById('samplePatternBtn');
  const durationInput = document.getElementById('duration');
  const patternInput = document.getElementById('pattern');
  const durationError = document.getElementById('durationError');
  const patternError = document.getElementById('patternError');

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

  durationBtn.addEventListener('click', function() {
    durationError.style.display = 'none';
    const duration = parseInt(durationInput.value);
    if ('vibrate' in navigator) {
      if (!isNaN(duration) && duration > 0) {
        navigator.vibrate(duration);
      } else {
        durationError.textContent = 'Invalid duration. Please enter a positive number.';
        durationError.style.display = 'block';
      }
    } else {
      durationError.textContent = 'Vibration API not supported';
      durationError.style.display = 'block';
    }
  });

  patternBtn.addEventListener('click', function() {
    patternError.style.display = 'none';
    const pattern = patternInput.value.trim();
    if ('vibrate' in navigator) {
      if (pattern.length > 0) {
        const patternArray = pattern.split(',').map(val => parseInt(val.trim())).filter(val => !isNaN(val));
        if (patternArray.every(num => num >= 0)) {
          navigator.vibrate(patternArray);
        } else {
          patternError.textContent = 'Invalid vibration pattern. Please enter positive integers separated by commas.';
          patternError.style.display = 'block';
        }
      } else {
        patternError.textContent = 'Please enter a vibration pattern.';
        patternError.style.display = 'block';
      }
    } else {
      patternError.textContent = 'Vibration API not supported';
      patternError.style.display = 'block';
    }
  });

  samplePatternBtn.addEventListener('click', function() {
    if ('vibrate' in navigator) {
      navigator.vibrate([200, 100, 200, 100, 200]);
    } else {
      console.log('Vibration API not supported');
    }
  });
});
