// src/theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
//   styles: {
//     global: {
//       body: {
//         bg: "gray.100", // 기본 배경색
//         color: "gray.800", // 기본 글자색
//       },
//     },
//   },
  colors: {
    brand: {
      main: "#1A202C",
    },
  },
});

export default theme;
