import { StorybookConfig } from '@analogjs/storybook-angular';
import { resolve } from 'path';
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs"
  ],
  framework: {
    name: '@analogjs/storybook-angular',
    options: {},
  },
  viteFinal: async (viteConfig, { configType }) => {
    // Merge custom configuration into the default config
    const { mergeConfig } = await import('vite');
    const { default: angular } = await import('@analogjs/vite-plugin-angular');

    const config = mergeConfig(viteConfig, {
      resolve: {
        alias: {
          styles: resolve(__dirname, '../src/styles'),
        },
      },
      plugins: [
        tsconfigPaths({ projects: [resolve(__dirname, '../tsconfig.json')] }),
        angular({
          jit: true,
          tsconfig: './.storybook/tsconfig.json',
        }),
      ],
      css: {
        preprocessorOptions: {
          scss: {
            loadPaths: [path.resolve(__dirname, '../src')],
          },
        },
      }
    });

    return config;
  }
};
export default config;
