export const getUserInfo = (apiKey, user) => {

  return fetch(
    `https://api.github.com/users/${user}?access_token=${apiKey}`
  ).then(response => response.json());
};
