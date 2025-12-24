// Tiny helper to log timing so testers can note improvements.
window.addEventListener('load', () => {
  const paint = Math.round(performance.now());
  console.info(`[perf-demo] Page loaded in ~${paint}ms (client-side).`);
});
