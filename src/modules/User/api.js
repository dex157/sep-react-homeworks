export const getUserInfo = (apiKey, user) =>
  fetch(`https://api.github.com/users/${user}?access_token=${apiKey}`).then(
    response => {
      if (response.status > 400) {
        throw new Error(response.statusText);
      }

      return response.json();
    }
  );
