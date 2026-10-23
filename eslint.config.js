const { defineConfig, globalIgnores } = require("eslint/config");

// Lưu ý: Các package của Next.js thường export thẳng mảng cấu hình
// chứ không cần truy cập qua thuộc tính phụ nếu dùng require thông thường.
const nextVitals = require("eslint-config-next/core-web-vitals");
const nextTs = require("eslint-config-next/typescript");

const eslintConfig = defineConfig([
  ...(nextVitals.default || nextVitals),
  ...(nextTs.default || nextTs),
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

module.exports = eslintConfig;
