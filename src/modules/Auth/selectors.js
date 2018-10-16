export const getApiKey = state => state.auth.apiKey;

export const getIsAuthorized = state => (state.auth.apiKey ? true : false);
