export default function serviceWorker() {
  try {
    if ("serviceWorker" in navigator) {
      navigator?.serviceWorker
        .register("/service-worker.js")
        .then((response) => {
          console.warn("service worker response--->>", response);
        });
    }
  } catch (error) {
    console.warn("service worker error--->>", error);
  }
}
