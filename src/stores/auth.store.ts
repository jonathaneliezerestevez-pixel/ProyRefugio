const TOKEN_KEY = 'refugio_token';

export const authStore = {
  getToken(): string | null {
    return typeof localStorage === 'undefined' ? null : localStorage.getItem(TOKEN_KEY);
  },
  setToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
  },
  clear() {
    localStorage.removeItem(TOKEN_KEY);
  },
  isAuthenticated() {
    return Boolean(this.getToken());
  },
};
