/**
 * Created by Aaron on 12/21/2015.
 */

var loose = {loose: true};

module.exports = {
    plugins: [
        //stage 0
        ["transform-do-expressions", loose],
        ["transform-function-bind", loose],

        //stage 1
        ["transform-class-constructor-call", loose],
        ["transform-class-properties", loose],
        ["transform-decorators", loose],
        ["transform-export-extensions", loose],

        //stage 2
        "syntax-trailing-function-commas",
        ["transform-object-rest-spread", loose],

        //stage 3
        ["transform-async-to-generator", loose],
        ["transform-exponentiation-operator", loose],

        //react
        "syntax-flow",
        "syntax-jsx",
        ["transform-flow-strip-types", loose],
        ["transform-react-display-name", loose],
        ["transform-react-jsx", loose],

        //es2015
        ["transform-es2015-arrow-functions", loose],
        ["transform-es2015-block-scoped-functions", loose],
        ["transform-es2015-block-scoping", loose],
        ["transform-es2015-classes", loose],
        ["transform-es2015-computed-properties", loose],
        ["transform-es2015-destructuring", loose],
        ["transform-es2015-for-of", loose],
        ["transform-es2015-function-name", loose],
        ["transform-es2015-literals", loose],
        ["transform-es2015-modules-commonjs", loose],
        ["transform-es2015-object-super", loose],
        ["transform-es2015-parameters", loose],
        ["transform-es2015-shorthand-properties", loose],
        ["transform-es2015-spread", loose],
        ["transform-es2015-sticky-regex", loose],
        ["transform-es2015-template-literals", loose],
        ["transform-es2015-typeof-symbol", loose],
        ["transform-es2015-unicode-regex", loose],
        ["transform-regenerator", loose],

        //other
        ["transform-undefined-to-void", loose]
    ]
};
