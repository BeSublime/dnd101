module.exports = {
	future: {
		// removeDeprecatedGapUtilities: true,
		// purgeLayersByDefault: true,
	},
	purge: {
		mode: 'all',
		content: ['*.html']
	},
	theme: {
		extend: {
			fontSize: {
				'huge': '8rem',
			},
		},
	},
	variants: {},
	plugins: [],
}
