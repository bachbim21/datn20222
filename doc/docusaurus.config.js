/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	title: 'LGO',
	tagline: 'Hướng dẫn sử dụng',
	url: 'https://onesme.com.vn',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.svg',
	organizationName: 'facebook', // Usually your GitHub org/user name.
	projectName: 'docusaurus', // Usually your repo name.
	themeConfig: {
		navbar: {
			title: 'Hướng dẫn sử dụng LGO',
			hideOnScroll: true,
			items: [
			],
		}
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.json'),

				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),

				},
			},
		],
	],
	customFields: {
		linkWebOrigin: 'https://onesme.vn',
	},
};
