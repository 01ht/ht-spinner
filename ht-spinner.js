"use strict";
import { LitElement, html, css } from "lit-element";
import "@polymer/paper-spinner/paper-spinner.js";

class HTSpinner extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        position: relative;
        box-sizing: border-box;
      }

      paper-spinner {
        --paper-spinner-stroke-width: 2px;
        width: 64px;
        height: 64px;
      }

      :host([page]) #container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: calc(100vh - 128px);
      }

      :host([button]) paper-spinner {
        width: 36px;
        height: 36px;
        margin-right: 8px;
      }

      :host([icon-button]) paper-spinner {
        width: 32px;
        height: 32px;
      }

      :host([text]) paper-spinner {
        width: 32px;
        height: 32px;
        margin-right: 16px;
      }

      :host([text]) #spinner {
        background: rgba(0, 0, 0, 0.5);
        background: #fff;
        padding: 16px;
        border-radius: 3px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
          0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }

      #spinner {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
      }

      #text {
        font-size: 14px;
        line-height: 24px;
        font-weight: 400;
        color: var(--secondary-text-color);
      }
    `;
  }

  render() {
    const { text } = this;
    return html`
    <div id="container">
      <div id="spinner">
        <paper-spinner active></paper-spinner>
        ${text ? html`<div id="text">${text}</div>` : ""}
      </div>
    </div>`;
  }

  static get properties() {
    return {
      text: { type: String, reflect: true }
    };
  }
}

customElements.define("ht-spinner", HTSpinner);
