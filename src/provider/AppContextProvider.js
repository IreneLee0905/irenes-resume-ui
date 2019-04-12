export default class AppContextProvider {

  static setStore(store) {
    AppContextProvider.store = store;
  }

  static getStore() {
    return AppContextProvider.store;
  }

  static setSecurity(security) {
    AppContextProvider.security = security;
  }

  static getSecurity() {
    return AppContextProvider.security;
  }

  static isPrincipal() {
    console.log(this.security);
    return !!this.security;
  }
}