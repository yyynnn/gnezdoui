/* stylelint-disable */
import styled from 'styled-components'

import { theme } from 'theme'

export const Wrapper = styled.div`
  padding-left: 12px;
  padding-right: 7px;

  .rc-slider {
    position: relative;
    height: 14px;
    padding: 5px 0;
    width: 100%;
    border-radius: 6px;
    touch-action: none;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .rc-slider * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .rc-slider-rail {
    position: absolute;
    width: calc(100% + 18px);
    background-color: ${({ disabled }) => (disabled ? theme.colors.gray.g600 : theme.colors.gray.g400)};
    height: 2px;
    border-radius: 6px;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    left: -11px;
  }

  .rc-slider-track {
    position: absolute;
    left: 0;
    height: 2px;
    border-radius: 6px;
    background-color: #ea212e;
    margin-left: -12px;
  }

  .rc-slider-handle {
    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
    outline: none;
    box-sizing: border-box;
    position: absolute;
    margin-left: -13px;
    margin-top: -9px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    border-radius: 4px;
    border: 2px solid; 
    border-color: ${({ disabled }) => (disabled ? theme.colors.gray.g600 : theme.colors.gray.g400)};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ disabled }) => (disabled ? theme.colors.gray.g600 : theme.colors.white)};
    touch-action: pan-x;
  }
  .rc-slider-handle::before,.rc-slider-handle-1::before,.rc-slider-handle-2::before {
    content: '${({ tooltip, isRange }) => (!isRange && tooltip ? tooltip : null)}';
    position:absolute;
    top:-25px;
    font-family: GNEZDO Sans;
    font-size: 14px;
    line-height: 20px;
    word-break: keep-all;
    color: ${theme.colors.gray.g300};
  }
  .rc-slider-handle-1::before{
    content: '${({ tooltip }) => tooltip && tooltip[0]}';
  }
  .rc-slider-handle-2::before{
    content: '${({ tooltip }) => tooltip && tooltip[1]}';
  }
  .rc-slider-handle::after {
    content: '';
    width: 2px;
    height: 6px;
    background-color:  ${theme.colors.gray.g400};
    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
  }

  .rc-slider-handle:hover::after {
    background-color: white;
  }

  .rc-slider-handle:active::after {
    background-color: white;
  }

  .rc-slider-handle-click-focused:focus {
    border-color: #ced4da;
    box-shadow: unset;
  }

  .rc-slider-handle:hover {
    background-color: ${theme.colors.red.activehover};
    border-color: ${theme.colors.red.activehover}; 
  }

  .rc-slider-handle:active {
    background-color: ${theme.colors.red.active};
   border-color: ${theme.colors.red.active}; 
  }

  .rc-slider-mark {
    position: absolute;
    top: 18px;
    left: 0;
    width: 100%;
    font-size: 12px;
  }

  .rc-slider-mark-text {
    position: absolute;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    color: ${theme.colors.gray.g300};
    margin-left: -3px;
    word-break: keep-all;
    font-family: GNEZDO Sans;
    font-size: 14px;
    line-height: 20px;
    top: -1px;
  }


  .rc-slider-step {
    position: absolute;
    width: 100%;
    height: 4px;
    background: transparent;
  }
  
  .rc-slider-dot {
    border-color: transparent;
  }

  .rc-slider-dot-active {
    border-color: transparent;
  }

  .rc-slider-disabled .rc-slider-handle:hover::after {
    background-color: #ced4da;
  }

  .rc-slider-disabled .rc-slider-handle:focus::after {
    background-color: #ced4da;
    height: 6px;
  }

  .rc-slider-disabled .rc-slider-handle:active::after {
    background-color: #ced4da;
    height: 6px;
  }

  .rc-slider-disabled .rc-slider-track {
    background-color: #ccc;
  }


  .rc-slider-disabled .rc-slider-mark-text,
  .rc-slider-disabled .rc-slider-dot {
    cursor: not-allowed !important;
  }

  .rc-slider-vertical {
    width: 14px;
    height: 100%;
    padding: 0 5px;
  }

  .rc-slider-vertical .rc-slider-rail {
    height: 100%;
    width: 4px;
  }

  .rc-slider-vertical .rc-slider-track {
    left: 5px;
    bottom: 0;
    width: 4px;
  }

  .rc-slider-vertical .rc-slider-handle {
    margin-left: -4px;
    margin-bottom: -7px;
    touch-action: pan-y;
  }

  .rc-slider-vertical .rc-slider-mark {
    top: 0;
    left: 18px;
    height: 100%;
  }

  .rc-slider-vertical .rc-slider-step {
    height: 100%;
    width: 4px;
  }

  .rc-slider-vertical .rc-slider-dot {
    left: 2px;
    margin-bottom: -4px;
  }

  .rc-slider-vertical .rc-slider-dot:first-child {
    margin-bottom: -4px;
  }

  .rc-slider-vertical .rc-slider-dot:last-child {
    margin-bottom: -4px;
  }
`
