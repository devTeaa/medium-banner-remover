// ==UserScript==
// @name         Medium header remover
// @version      0.1
// @author       none
// @match        *medium.com/*
// @match        *hackernoon.com/*
// @match        *towardsdatascience.com/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
  "use strict";
  var style = `
        .metabar,
        .js-stickyFooter {
           display: none;
        }
    `;

  GM_addStyle(style);
})();
