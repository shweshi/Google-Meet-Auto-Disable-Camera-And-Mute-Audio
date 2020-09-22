window.onload = () => {
  const disableCameraButton = document.querySelector('div[role="button"][aria-label$=" + e)"][data-is-muted="false"]');
  if (disableCameraButton) {
    disableCameraButton.click();
  }

  const muteMicrophoneButton = document.querySelector('div[role="button"][aria-label$=" + d)"][data-is-muted="false"]')
  if (muteMicrophoneButton) {
    muteMicrophoneButton.click();
  }
};