/**
 * Service d'accès à la base de données via PostgREST
 */

import { Theme, DatabaseConfig } from '../types/theme.types';

export class DatabaseService {
  constructor(private config: DatabaseConfig) {}

  /**
   * Récupère tous les thèmes actifs depuis la DB
   */
  async getThemes(): Promise<Theme[]> {
    const url = `${this.config.postgrestUrl}/tb_ui_themes?status=eq.ACTIVE&select=*,theme_type:tb_ui_theme_types(name),translations:tb_ui_theme_translations(*)&order=order_index.asc`;

    const response = await fetch(url, {
      headers: { 'Accept': 'application/json' },
      signal: AbortSignal.timeout(this.config.timeout)
    });

    if (!response.ok) {
      throw new Error(`Erreur chargement thèmes: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.map(this.mapToTheme);
  }

  /**
   * Récupère un thème spécifique par code
   */
  async getTheme(code: string): Promise<Theme | null> {
    const url = `${this.config.postgrestUrl}/tb_ui_themes?code=eq.${code}&status=eq.ACTIVE&select=*,theme_type:tb_ui_theme_types(name),translations:tb_ui_theme_translations(*)`;

    const response = await fetch(url, {
      headers: { 'Accept': 'application/json' },
      signal: AbortSignal.timeout(this.config.timeout)
    });

    const data = await response.json();
    return data.length > 0 ? this.mapToTheme(data[0]) : null;
  }

  /**
   * Transforme les données PostgREST en objet Theme
   */
  private mapToTheme(row: any): Theme {
    return {
      code: row.code,
      name: row.name,
      type: row.theme_type?.name || 'mui',
      definition: JSON.parse(row.theme_definition),
      translations: row.translations || []
    };
  }
}