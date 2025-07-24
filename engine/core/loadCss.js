function LoadCss(path) {
  if (document.querySelector(`link[href="${path}"]`)) return;

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = path;

  document.head.appendChild(link);
}
