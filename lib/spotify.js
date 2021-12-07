import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative",
  "streaming",
  "user-read-private",
  "user-library-read",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-recently-player",
  "user-follow-read",
].join(",");

const params = {
  scope: scopes,
};

const queryParamSring = new URLSearchParams(params);

const LOGIN_URL =
  "https://accounts.spotify.com/authorize?" + queryParamSring.toString();

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

export default spotifyApi;

export { LOGIN_URL };
