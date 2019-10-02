Medium article header and footer remover for smaller screen pc


## Screenshots

|**Before the script was implemenented**|**After the script was implemenented**|
|---------------------------------------|--------------------------------------|
|<img src="https://github.com/globefire/medium-banner-remover/blob/master/example-before.png" />|<img src="https://github.com/globefire/medium-banner-remover/blob/master/example-after.png" />|

## Tampermonkey

Download tampermonkey:

- **Chrome:** https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
- **Firefox:** https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/
- **Opera:** https://addons.opera.com/en/extensions/details/tampermonkey-beta/
- **Other:** https://tampermonkey.net/ (follow instructions there)

Then install the user-script here:
https://github.com/devTeaa/medium-banner-remover/raw/master/medium-remover.user.js

You can add your own medium-like site by adding this starting from line 5

```
// @match *medium.com/*
```
