import { createGlobalStyle } from 'styled-components'

import { theme } from 'theme'

export const UIstyles = createGlobalStyle`
* {
  word-break: break-word;
}

:focus {
    outline-width: 0;
}

button {
  background-color: transparent;
  border: none;
}

a {
  text-decoration: none;
  color: unset;
}

.rc-slider-handle {
  outline: none;
}

/*
 * Container style
 */

.ps {
/* stylelint-disable-next-line declaration-no-important */
  overflow: hidden !important;
  overflow-anchor: none;
  -ms-overflow-style: none;
  touch-action: auto;
}

/* .ps > .ps__rail-x,
.ps > .ps__rail-y {
  opacity: 0.6;
} */

/*
 * Scrollbar rail styles
 */

.ps__rail-x {
  display: none;
  opacity: 0;
  transition: background-color 200ms linear, opacity 200ms linear;
  height: 15px;
  /* there must be 'bottom' or 'top' for ps__rail-x */
  bottom: 0px;
  /* please don't change 'position' */
  position: absolute;
}

.ps__rail-y {
  display: none;
  opacity: 0;
  transition: background-color 200ms linear, opacity 200ms linear;
  width: 15px;
  /* there must be 'right' or 'left' for ps__rail-y */
  right: 0;
  /* please don't change 'position' */
  position: absolute;
}

.ps--active-x > .ps__rail-x,
.ps--active-y > .ps__rail-y {
  display: block;
  background-color: transparent;
}

.ps:hover > .ps__rail-x,
.ps:hover > .ps__rail-y,
.ps--focus > .ps__rail-x,
.ps--focus > .ps__rail-y,
.ps--scrolling-x > .ps__rail-x,
.ps--scrolling-y > .ps__rail-y {
  opacity: 0.6;
}

.ps .ps__rail-x:hover,
.ps .ps__rail-y:hover,
.ps .ps__rail-x:focus,
.ps .ps__rail-y:focus,
.ps .ps__rail-x.ps--clicking,
.ps .ps__rail-y.ps--clicking {
  opacity: 0.9;
}

/*
 * Scrollbar thumb styles
 */

.ps__thumb-x {
  background-color: transparent;
  border-radius: 6px;
  transition: background-color 200ms linear, height 200ms ease-in-out;
  height: 6px;
  /* there must be 'bottom' for ps__thumb-x */
  bottom: 4px;
  /* please don't change 'position' */
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ps__thumb-x:after {
  content: ' ';
  position: absolute;
  background-color: ${theme.colors.gray.g400};
  height: 100%;
  width: 90%;
  border-radius: 6px;
}

.ps__thumb-y {
  background-color: transparent;
  border-radius: 6px;
  transition: background-color 200ms linear, width 200ms ease-in-out;
  width: 6px;
  /* there must be 'right' for ps__thumb-y */
  right: 4px;
  /* please don't change 'position' */
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ps__thumb-y:after {
  content: ' ';
  position: absolute;
  background-color: ${theme.colors.gray.g400};
  width: 100%;
  height: 80%;
  border-radius: 6px;
}

.ps__rail-x:hover > .ps__thumb-x,
.ps__rail-x:focus > .ps__thumb-x,
.ps__rail-x.ps--clicking .ps__thumb-x {
  height: 11px;
}

.ps__rail-y:hover > .ps__thumb-y,
.ps__rail-y:focus > .ps__thumb-y,
.ps__rail-y.ps--clicking .ps__thumb-y {
  width: 11px;
}

.ps__rail-x:hover > .ps__thumb-x:after,
.ps__rail-x:focus > .ps__thumb-x:after,
.ps__rail-x.ps--clicking .ps__thumb-x:after {
  background-color: ${theme.colors.gray.g300};
}

.ps__rail-y:hover > .ps__thumb-y:after,
.ps__rail-y:focus > .ps__thumb-y:after,
.ps__rail-y.ps--clicking .ps__thumb-y:after {
  background-color: ${theme.colors.gray.g300};  
}

/* MS supports */
@supports (-ms-overflow-style: none) {
  .ps {
/* stylelint-disable-next-line declaration-no-important */
    overflow: auto !important;
  }
}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .ps {
/* stylelint-disable-next-line declaration-no-important */
    overflow: auto !important;
  }
}

.scrollbar-container {
    position: relative;
    height: 100%;
}

.scrollbar-container.ps--active-x {
    padding: 0 0 0;
}
`
