function toggleDayNight() {
  document.body.classList.add('animation-ready');
  document.body.classList.toggle('dark');
  
  // Update text content based on day/night
  const isDark = document.body.classList.contains('dark');
  const title = document.querySelector('h1');
  const description = document.querySelector('p');
  const subtext = document.querySelector('pre');
  
  if (isDark) {
    title.textContent = 'locii';
    description.textContent = 'your effort to remain what you are is what limits you.';
    subtext.textContent = 'coming soon.';
  } else {
    title.textContent = 'locii';
    description.textContent = 'the body is a machine for the mind.';
    subtext.textContent = 'coming soon.';
  }
}

// Start the animation cycle when page loads
document.addEventListener('DOMContentLoaded', () => {
  setInterval(toggleDayNight, 5000); // Run every 5 seconds
});
