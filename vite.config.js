import { sveltekit } from "@sveltejs/kit/vite";
import UnoCSS from "unocss/vite";

const config = {
	plugins: [sveltekit(), UnoCSS()],
};

export default config;
