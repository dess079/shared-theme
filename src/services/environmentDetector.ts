/**
 * Service de détection d'environnement
 * Réutilise la logique du projet portail (src/lib/config.ts)
 */

export type Environment = 'local' | 'container' | 'cloud';

export class EnvironmentDetector {
  /**
   * Détection automatique d'environnement basée sur l'URL actuelle
   * Logique identique à celle du projet portail
   */
  static getCurrentEnvironment(): Environment {
    const hostname = window.location.hostname;
    const protocol = window.location.protocol;

    // Cloud: HTTPS + domaine sdfullstackdev.ca
    if (protocol === 'https:' && hostname.includes('sdfullstackdev.ca')) {
      return 'cloud';
    }

    // Local: localhost ou IPs privées
    if (hostname === 'localhost' || hostname.startsWith('127.') ||
        hostname.startsWith('192.168.') || hostname.startsWith('10.')) {
      return 'local';
    }

    // Container: sinon (ports mappés Docker)
    return 'container';
  }

  /**
   * Environnement actuel détecté dynamiquement
   */
  static get CURRENT_ENVIRONMENT(): Environment {
    return this.getCurrentEnvironment();
  }
}