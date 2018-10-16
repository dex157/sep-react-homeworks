export const getFollowersInfo = (apiKey, user) =>
  fetch(
    `https://api.github.com/users/${user}/followers?pages=1&per_page=100?access_token=${apiKey}`
  ).then(response => {
    if (response.status > 400) {
      throw new Error(response.statusText);
    }

    return response.json();
  });
