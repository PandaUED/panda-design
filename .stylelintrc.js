module.exports = {
  processors: ["stylelint-processor-styled-components"],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-styled-components"
  ],
  rules: {
    "block-opening-brace-space-after": null,
    "block-closing-brace-space-before": null,
    "block-opening-brace-space-before": null,
    "rule-empty-line-before": null,
    "property-no-vendor-prefix": null,
    "indentation": null,
    "shorthand-property-no-redundant-values": null,
    "declaration-colon-newline-after": null,
    "selector-pseudo-element-colon-notation": "single"
  },
  syntax: "scss"
}