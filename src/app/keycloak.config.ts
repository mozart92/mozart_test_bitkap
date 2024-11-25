import { KeycloakOptions } from 'keycloak-angular';

export const keycloakConfig: KeycloakOptions = {
  config: {
    url: 'https://sso.bitkap.africa/',
    realm: 'bitkap_dev',
    clientId: 'angolar_test',
  },
  initOptions: {
    onLoad: 'login-required',
    checkLoginIframe: false,
  },
};