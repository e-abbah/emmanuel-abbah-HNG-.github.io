{/* <script>
  const timeEl = document.querySelector('[data-testid="test-user-time"]');
  function updateTime() {
    timeEl.textContent = Date.now();
  }

  // Show time immediately
  updateTime();

  // Optionally update every second
  setInterval(updateTime, 1000);
</script> */}

// Calculate milliseconds in a year
// const minute = 1000 * 60;
// const hour = minute * 60;
// const day = hour * 24;
// const year = day * 365;

// // Divide Time with a year
// const d = new Date();
// let years = Math.round(d.getTime() / year);
// document.querySelector('[data-testid="test-user-time"]').textContent = years;

document.querySelector('[data-testid="test-user-time"]').textContent = Date.now();
