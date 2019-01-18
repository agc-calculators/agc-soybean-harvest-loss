/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface AgcSoybeanHarvestLossInputs {
    'socket': string;
  }
  interface AgcSoybeanHarvestLossInputsAttributes extends StencilHTMLAttributes {
    'socket'?: string;
  }

  interface AgcSoybeanHarvestLossProgress {
    'socket': string;
  }
  interface AgcSoybeanHarvestLossProgressAttributes extends StencilHTMLAttributes {
    'socket'?: string;
  }

  interface AgcSoybeanHarvestLossResultsPlaceholder {}
  interface AgcSoybeanHarvestLossResultsPlaceholderAttributes extends StencilHTMLAttributes {}

  interface AgcSoybeanHarvestLossResults {
    'socket': string;
  }
  interface AgcSoybeanHarvestLossResultsAttributes extends StencilHTMLAttributes {
    'socket'?: string;
  }

  interface AgcSoybeanHarvestLoss {
    'mode': 'full' | 'step';
    'socket': string;
    'tract': string;
    'units': any;
  }
  interface AgcSoybeanHarvestLossAttributes extends StencilHTMLAttributes {
    'mode'?: 'full' | 'step';
    'onAgcCalculated'?: (event: CustomEvent) => void;
    'onAgcStepChanged'?: (event: CustomEvent) => void;
    'socket'?: string;
    'tract'?: string;
    'units'?: any;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AgcSoybeanHarvestLossInputs': Components.AgcSoybeanHarvestLossInputs;
    'AgcSoybeanHarvestLossProgress': Components.AgcSoybeanHarvestLossProgress;
    'AgcSoybeanHarvestLossResultsPlaceholder': Components.AgcSoybeanHarvestLossResultsPlaceholder;
    'AgcSoybeanHarvestLossResults': Components.AgcSoybeanHarvestLossResults;
    'AgcSoybeanHarvestLoss': Components.AgcSoybeanHarvestLoss;
  }

  interface StencilIntrinsicElements {
    'agc-soybean-harvest-loss-inputs': Components.AgcSoybeanHarvestLossInputsAttributes;
    'agc-soybean-harvest-loss-progress': Components.AgcSoybeanHarvestLossProgressAttributes;
    'agc-soybean-harvest-loss-results-placeholder': Components.AgcSoybeanHarvestLossResultsPlaceholderAttributes;
    'agc-soybean-harvest-loss-results': Components.AgcSoybeanHarvestLossResultsAttributes;
    'agc-soybean-harvest-loss': Components.AgcSoybeanHarvestLossAttributes;
  }


  interface HTMLAgcSoybeanHarvestLossInputsElement extends Components.AgcSoybeanHarvestLossInputs, HTMLStencilElement {}
  var HTMLAgcSoybeanHarvestLossInputsElement: {
    prototype: HTMLAgcSoybeanHarvestLossInputsElement;
    new (): HTMLAgcSoybeanHarvestLossInputsElement;
  };

  interface HTMLAgcSoybeanHarvestLossProgressElement extends Components.AgcSoybeanHarvestLossProgress, HTMLStencilElement {}
  var HTMLAgcSoybeanHarvestLossProgressElement: {
    prototype: HTMLAgcSoybeanHarvestLossProgressElement;
    new (): HTMLAgcSoybeanHarvestLossProgressElement;
  };

  interface HTMLAgcSoybeanHarvestLossResultsPlaceholderElement extends Components.AgcSoybeanHarvestLossResultsPlaceholder, HTMLStencilElement {}
  var HTMLAgcSoybeanHarvestLossResultsPlaceholderElement: {
    prototype: HTMLAgcSoybeanHarvestLossResultsPlaceholderElement;
    new (): HTMLAgcSoybeanHarvestLossResultsPlaceholderElement;
  };

  interface HTMLAgcSoybeanHarvestLossResultsElement extends Components.AgcSoybeanHarvestLossResults, HTMLStencilElement {}
  var HTMLAgcSoybeanHarvestLossResultsElement: {
    prototype: HTMLAgcSoybeanHarvestLossResultsElement;
    new (): HTMLAgcSoybeanHarvestLossResultsElement;
  };

  interface HTMLAgcSoybeanHarvestLossElement extends Components.AgcSoybeanHarvestLoss, HTMLStencilElement {}
  var HTMLAgcSoybeanHarvestLossElement: {
    prototype: HTMLAgcSoybeanHarvestLossElement;
    new (): HTMLAgcSoybeanHarvestLossElement;
  };

  interface HTMLElementTagNameMap {
    'agc-soybean-harvest-loss-inputs': HTMLAgcSoybeanHarvestLossInputsElement
    'agc-soybean-harvest-loss-progress': HTMLAgcSoybeanHarvestLossProgressElement
    'agc-soybean-harvest-loss-results-placeholder': HTMLAgcSoybeanHarvestLossResultsPlaceholderElement
    'agc-soybean-harvest-loss-results': HTMLAgcSoybeanHarvestLossResultsElement
    'agc-soybean-harvest-loss': HTMLAgcSoybeanHarvestLossElement
  }

  interface ElementTagNameMap {
    'agc-soybean-harvest-loss-inputs': HTMLAgcSoybeanHarvestLossInputsElement;
    'agc-soybean-harvest-loss-progress': HTMLAgcSoybeanHarvestLossProgressElement;
    'agc-soybean-harvest-loss-results-placeholder': HTMLAgcSoybeanHarvestLossResultsPlaceholderElement;
    'agc-soybean-harvest-loss-results': HTMLAgcSoybeanHarvestLossResultsElement;
    'agc-soybean-harvest-loss': HTMLAgcSoybeanHarvestLossElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}