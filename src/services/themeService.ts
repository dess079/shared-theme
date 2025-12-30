/**
 * Service principal de gestion des thèmes
 */

import { Theme, DatabaseConfig } from '../types/theme.types';
import { DatabaseService } from './database';

export class ThemeService {
  private dbService: DatabaseService;
  private currentTheme: Theme | null = null;

  constructor(dbConfig: DatabaseConfig) {
    this.dbService = new DatabaseService(dbConfig);
  }

  /**
   * Initialise le service et charge le thème sauvegardé ou par défaut
   */
  async initialize(): Promise<void> {
    try {
      // Charger le thème sauvegardé ou défaut
      const savedCode = localStorage.getItem('theme') || 'light';
      await this.loadAndApplyTheme(savedCode);
    } catch (error) {
      console.error('Erreur initialisation thème:', error);
      // Pas de fallback - laisser l'erreur remonter
      throw error;
    }
  }

  /**
   * Charge et applique un thème spécifique
   */
  async loadAndApplyTheme(code: string): Promise<void> {
    const theme = await this.dbService.getTheme(code);
    if (!theme) {
      throw new Error(`Thème ${code} introuvable en base de données`);
    }

    // Appliquer avec transition douce
    await this.applyWithTransition(theme);

    // Sauvegarder la préférence
    this.currentTheme = theme;
    localStorage.setItem('theme', code);
  }

  /**
   * Récupère tous les thèmes disponibles
   */
  async getAvailableThemes(): Promise<Theme[]> {
    return await this.dbService.getThemes();
  }

  /**
   * Retourne le thème actuellement appliqué
   */
  getCurrentTheme(): Theme | null {
    return this.currentTheme;
  }

  /**
   * Applique un thème avec transition douce
   */
  private async applyWithTransition(theme: Theme): Promise<void> {
    // Créer overlay de transition
    const overlay = this.createTransitionOverlay();

    try {
      // Ici s'intégrera avec le ThemeProvider du frontend
      // Pour l'instant, on simule l'application
      console.log(`🎨 Application du thème: ${theme.name} (${theme.code})`);

      // Petite pause pour la transition
      await new Promise(resolve => setTimeout(resolve, 300));

    } finally {
      // Nettoyer l'overlay
      overlay.remove();
    }
  }

  /**
   * Crée un overlay de transition
   */
  private createTransitionOverlay(): HTMLElement {
    const overlay = document.createElement('div');
    overlay.id = 'theme-transition-overlay';
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255,255,255,0.8);
      z-index: 9999;
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
    `;
    document.body.appendChild(overlay);

    // Fade in
    setTimeout(() => overlay.style.opacity = '1', 10);

    return overlay;
  }
}