import { config } from '@fisch0920/config/eslint'
import drizzle from 'eslint-plugin-drizzle'

export default [
  ...config,
  {
    ignores: [
      '**/out/**',
      '**/dist/**',
      '**/.wrangler/**',
      'packages/types/src/openapi.d.ts',
      'apps/gateway/src/worker.d.ts',
      'packages/json-schema/test/json-schema-test-suite.ts',
      'apps/web/src/*.gen.ts',
      'legacy/**',
      'stdlib/stdlib/**'
    ]
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'no-console': 'error',
      'unicorn/no-array-reduce': 'off'
    }
  },
  {
    files: [
      'packages/cli/src/**/*.ts',
      'fixtures/**/*.ts',
      '**/*.test.ts',
      'examples/**/*.ts'
    ],
    rules: {
      'no-console': 'off',
      'no-process-env': 'off',
      'unicorn/no-process-exit': 'off'
    }
  },
  {
    files: ['apps/e2e/**/*.ts', 'apps/web/src/**/*.{tsx,ts}', 'stdlib/**/*.ts'],
    rules: {
      'no-console': 'off'
    }
  },
  {
    files: ['apps/api/src/**/*.ts'],
    plugins: {
      drizzle
    },
    rules: {
      ...drizzle.configs.recommended.rules
    }
  }
]
