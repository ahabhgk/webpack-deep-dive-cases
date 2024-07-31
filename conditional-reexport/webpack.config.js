/** @type {import("webpack").Configuration} */
module.exports = {
	entry: {
		a: "./a.js",
		b: "./b.js"
	},
	mode: "development",
	devtool: false,
	optimization: {
		providedExports: true,
		usedExports: true,
		sideEffects: true,
		concatenateModules: false,
		innerGraph: false,
		splitChunks: {
			cacheGroups: {
				lib: {
					name: "lib",
					test: /lib/,
					chunks: "all",
					minSize: 0
				}
			}
		}
	}
};
