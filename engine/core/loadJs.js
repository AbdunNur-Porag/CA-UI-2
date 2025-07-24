function LoadJs(path, type = "") {
  // Skip if script with same src already exists
  if (document.querySelector(`script[src="${path}"]`)) return;

  const script = document.createElement("script");
  script.src = path;

  // Handle type: defer, module, or custom
  if (type === "defer") {
    script.defer = true;
  } else if (type) {
    script.type = type; // "module", "text/javascript", etc.
  }

  document.head.appendChild(script);
}
/*

LoadJs("main.js");

// Defer script
LoadJs("init.js", "defer");

// ES Module script
LoadJs("app.module.js", "module");

// Custom type
LoadJs("legacy.js", "text/javascript");



*/