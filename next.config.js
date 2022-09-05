/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
module.exports = nextConfig

module.exports = {
	images: {
		domains: ['courses-top.ru']
	},
	webpack(config, options) {
		config.module.rules.push({
			loader: '@svgr/webpack',
			issuer: /\.[js]|sx?$/,
								
			options: {
				prettier: false,
				svgo: true,
				svgoConfig: {
					plugins: [{
						name: 'preset-default',
						params: {
							override: {
								removeViewBox: false
							}
						}
						}],
				},
				titleProp: true,
			},
			test: /\.svg$/,
		});

		return config;
	},
};

// module.exports = {
// 	webpack(config, options) {
// 		 config.module.rules.push({
// 			  loader: '@svgr/webpack',
// 			  options: {
// 					prettier: false,
// 					svgo: true,
// 					svgoConfig: {
// 						 plugins: [{ removeViewBox: false }],
// 					},
// 					titleProp: true,
// 			  },
// 			  test: /\.svg$/,
// 		 });
// 		 return config;
// 	},
// };


// module.exports = nextConfig

// module.exports = {
// 	webpack(config) {
// 		config.module.rules.push({
// 			test: /\.svg$/,
// 			issuer: {
// 				test: /\.(js|ts)x?$/,
// 			},
// 			use: ['@svgr/webpack'],
// 		});

// 		return config;
// 	},
// };

// module.exports = {
// 	webpack(config) {
// 	  config.module.rules.push({
// 		 test: /\.svg$/,
// 		 use: ["@svgr/webpack"]
// 	  });
 
// 	  return config;
// 	}
//  };