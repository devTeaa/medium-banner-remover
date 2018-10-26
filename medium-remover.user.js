// ==UserScript==
// @name         Medium header remover
// @version      0.2
// @author       none
// @match        *medium.com/*
// @match        *medium.freecodecamp.org/*
// @match        *hackernoon.com/*
// @match        *towardsdatascience.com/*
// @match        *heartbeat.fritz.ai/*
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
