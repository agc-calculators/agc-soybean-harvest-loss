/*! Built with http://stenciljs.com */
import { h } from '../agc-soybean-harvest-loss.core.js';

class AgcSoybeanHarvestLossResultsPlaceholder {
    render() {
        const placeholder = () => h("span", null,
            h("i", { class: "mark" }),
            " ",
            h("i", { class: "mark" }),
            " ",
            h("i", { class: "mark" }),
            " ",
            h("i", { class: "mark" }));
        return (h("section", null,
            h("ul", { class: "agc-results-placeholder" },
                h("li", null,
                    h("h2", { "data-i18n": "results.yeild-loss" }, "Yield Loss"),
                    placeholder()))));
    }
    static get is() { return "agc-soybean-harvest-loss-results-placeholder"; }
}

export { AgcSoybeanHarvestLossResultsPlaceholder };
