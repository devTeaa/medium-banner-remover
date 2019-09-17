// ==UserScript==
// @name         Website big header remover
// @version      0.7
// @author       none
// @match        *medium.com/*
// @match        *medium.freecodecamp.org/*
// @match        *hackernoon.com/*
// @match        *towardsdatascience.com/*
// @match        *heartbeat.fritz.ai/*
// @match        *blog.gojekengineering.com/*
// @match        *code.likeagirl.io/*
// @match        *blog.bitsrc.io/*
// @match        *stackify.com/*
// @match        *codeburst.io/*
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

        html {
           overflow-y: scroll !important;
        }

        *:not(img).o.my,
        *:not(img).n.o {
           display: none;
        }
        .x-navbar {
           display: none;
        }
    `;

  GM_addStyle(style);
})();
