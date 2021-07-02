import { useBreakpointValue } from '@chakra-ui/react';
import { Breakpoints, createBreakpoints } from '@chakra-ui/theme-tools';

interface UseScreenData {
  breakpoints: Breakpoints<{
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  }>;
  isWideScreen: boolean;
}

export function useScreen(): UseScreenData {
  const breakpoints = createBreakpoints({
    sm: '320px',
    md: '768px',
    lg: '992px',
    xl: '1280px',
    '2xl': '1600px',
  });

  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  return {
    breakpoints,
    isWideScreen,
  };
}
