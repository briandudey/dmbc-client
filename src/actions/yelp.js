export const FETCH_YELP_REQUEST = "FETCH_YELP_REQUEST";
export const fetchYelpRequest = () => ({ type: FETCH_YELP_REQUEST });

export const FETCH_YELP_SUCCESS = "FETCH_YELP_SUCCESS";
export const fetchYelpSuccess = yelp => ({ type: FETCH_YELP_SUCCESS, yelp });

export const FETCH_YELP_ERROR = "FETCH_YELP_ERROR";
export const fetchYelpError = err => ({ type: FETCH_YELP_ERROR, err });

export const CLEAR_YELP = "CLEAR_YELP";
export const clearYelp = clear => ({
  type: CLEAR_YELP,
  clear
});

const authToken =
  "03rTECP0UF1Ut9hWQRCZyxmVcpihKSAJvXV3XY9Q6STTKAuTvkCuFgHiH2gKaaD2h3jvoS2ReA2n56YS" +
  "cSytSJwDSAvec7Ls1zK96ZqVPxb441bMY7T7sRNEGDLvWnYx";
const corsFix = "https://cors-anywhere.herokuapp.com/";
// const term = 'restaurants'; const location = 'atlanta';

export const fetchYelp = (latitude, longitude, term, offset) => dispatch => {
  dispatch(fetchYelpRequest());
  return fetch(
    `${corsFix}https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}&term=${term}&offset=${offset}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`
      },
      withCredentials: true
    }
  )
    .then(res => {
      return res.json();
    })
    .then(yelp => {
      dispatch(fetchYelpSuccess(yelp.businesses));
    })
    .catch(err => {
      dispatch(fetchYelpError(err));
    });
};

export const clearYelpSearch = yelp => dispatch => {
  dispatch(clearYelp(yelp));
};
