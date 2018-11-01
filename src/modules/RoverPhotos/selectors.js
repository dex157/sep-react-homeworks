export const getRoverPhotos = state => state.roverPhotos.photos;
export const getSol = state => state.roverPhotos.sol;

export const getPhotosExist = (state, name, sol) => {
  const photos = state.roverPhotos.photos;

  if (name in photos && sol in photos[name]) {
    const rover = photos[name];
    return rover[sol].photos.length !== 0;
  }
  return false;
};
