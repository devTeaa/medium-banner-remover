// ==UserScript==
// @name         Medium header remover
// @version      0.2
// @author       none
// @match        *medium.com/*
// @match        *medium.freecodecamp.org/*
// @match        *hackernoon.com/*
// @match        *codeburst.io/*
// @match        *montemagno.com/*
// @match        *towardsdatascience.com/*
// @match        *heartbeat.fritz.ai/*
// @match        *blog.gojekengineering.com/*
// @match        *code.likeagirl.io/*
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

        .bloginfo.headroom,
        .postinfo{
           display: none !important
        }
    `;

  GM_addStyle(style);
})();
