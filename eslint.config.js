import { config } from '@fisch0920/config/eslint'

export default [
  ...config,
  {
    rules: {
      'react-hooks/set-state-in-effect': 'off'
    }
  }
]
