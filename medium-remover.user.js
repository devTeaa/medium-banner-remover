// ==UserScript==
// @name         Website big header remover
// @version      0.4
// @author       none
// @match        *medium.com/*
// @match        *medium.freecodecamp.org/*
// @match        *hackernoon.com/*
// @match        *towardsdatascience.com/*
// @match        *heartbeat.fritz.ai/*
// @match        *blog.gojekengineering.com/*
// @match        *code.likeagirl.io/*
// @match        *stackify.com/*
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

        .x-navbar {
           display: none;
        }
    `;

  GM_addStyle(style);
})();
