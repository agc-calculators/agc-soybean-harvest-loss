
// AgcSoybeanHarvestLoss: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './agc-soybean-harvest-loss.core.js';
import {
  AgcSoybeanHarvestLoss,
  AgcSoybeanHarvestLossInputs,
  AgcSoybeanHarvestLossProgress,
  AgcSoybeanHarvestLossResults,
  AgcSoybeanHarvestLossResultsPlaceholder
} from './agc-soybean-harvest-loss.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    AgcSoybeanHarvestLoss,
    AgcSoybeanHarvestLossInputs,
    AgcSoybeanHarvestLossProgress,
    AgcSoybeanHarvestLossResults,
    AgcSoybeanHarvestLossResultsPlaceholder
  ], opts);
}
