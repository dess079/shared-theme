/**
 * Types TypeScript pour la bibliothèque shared-theme
 */

import { Environment } from '../services/environmentDetector';

export interface Theme {
  code: string;
  name: string;
  type: string;
  definition: any; // Définition MUI Theme
  translations?: Translation[];
}

export interface Translation {
  language_code: 'fr' | 'en';
  name: string;
}

export interface DatabaseConfig {
  postgrestUrl: string;
  timeout: number;
}

export const DATABASE_CONFIGS: Record<Environment, DatabaseConfig> = {
  local: {
    postgrestUrl: 'http://localhost:3001',
    timeout: 5000
  },
  container: {
    postgrestUrl: 'http://localhost:8091',
    timeout: 5000
  },
  cloud: {
    postgrestUrl: 'https://api.sdfullstackdev.ca',
    timeout: 10000
  }
};