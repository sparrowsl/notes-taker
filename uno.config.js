import { defineConfig, presetIcons, presetUno, presetWebFonts } from "unocss";

export default defineConfig({
	presets: [
		presetUno(),
		presetIcons({}),
		presetWebFonts({
			fonts: {
				roboto: {
					name: "Roboto",
					weights: ["300", "400"],
				},
			},
		}),
	],
});
