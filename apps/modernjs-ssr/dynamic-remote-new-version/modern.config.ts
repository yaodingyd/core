import { appTools, defineConfig } from '@modern-js/app-tools';
import { moduleFederationPlugin } from '@module-federation/modern-js';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  dev: {
    port: 3011,
  },
  runtime: {
    router: true,
  },
  server: {
    ssr: {
      mode: 'stream',
    },
  },
  output: {
    disableTsChecker: true,
  },
  tools: {
    webpack: (config) => {
      config.output!.uniqueName = 'modernjs-ssr-dynamic-remote-new-version';
      config.output!.chunkLoadingGlobal =
        'modernjs-ssr-dynamic-remote-new-version';
    },
  },
  plugins: [appTools(), moduleFederationPlugin()],
});