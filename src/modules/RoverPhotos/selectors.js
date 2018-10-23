export const getSol = state => state.roverPhotos.sol;
export const getPhotos = state => state.roverPhotos.photos;
export const getSavedPhotos = (state, name, sol) => {
    const { roverPhotos: { photos }  } = state;
    return photos[name][sol]
        ? photos[name][sol].photos
        : null;
};