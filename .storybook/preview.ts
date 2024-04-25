import type { Preview } from "@storybook/react";
import "@/core/global-styles/src/globals.css"

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory:true
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
