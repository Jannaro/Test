"use strict";

function showContent(templateName) {
  var template = document.getElementById(templateName);
  var clone = document.importNode(template.content, true);
  document.body.appendChild(clone);
}

showContent("template2");