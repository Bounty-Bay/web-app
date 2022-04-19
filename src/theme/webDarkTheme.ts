import { themeGenerator } from '@cebus/react-components';
import type { ColorTokens } from '@cebus/react-components';

export const webDarkTokens: ColorTokens = themeGenerator({
  canvasColor: '#202020',
  semanticColors: {
    inherit: '#908D8D',
    brand: '#2165da',
    secondary: '#d18300',
    success: '#278536',
    danger: '#de3309',
    social: '#1ba1fb',
    warning: '#f18e21',
    info: '#1da8b5',
  },
});
