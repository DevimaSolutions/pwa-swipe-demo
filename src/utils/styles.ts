import type { SxProps, Theme } from '@mui/material';

export const combineSx = (...args: Array<SxProps<Theme> | undefined>) => {
  const combinedStyles: SxProps<Theme> = [];
  args.forEach((style) => {
    if (!style) {
      return;
    }
    if (Array.isArray(style)) {
      return combinedStyles.push(...style);
    }
    combinedStyles.push(style);
  });

  return combinedStyles;
};
