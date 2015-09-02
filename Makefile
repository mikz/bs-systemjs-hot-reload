
watch:
	babel --watch src/ --out-file dist/index.js

watch-browser:
  webpack --watch --module-bind 'js=babel' src/browser.js dist/browser.js
