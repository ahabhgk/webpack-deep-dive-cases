/** @type {import("webpack").Configuration} */
module.exports = {
	entry: "./index.js",
	mode: "development",
	devtool: false,
	optimization: {
		providedExports: true,
		usedExports: true,
		sideEffects: true,
		concatenateModules: false,
		innerGraph: false,
	}
}
