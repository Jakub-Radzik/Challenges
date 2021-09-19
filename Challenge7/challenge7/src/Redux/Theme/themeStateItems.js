import followersLight from '../../img/followers-white.svg';
import followingLight from '../../img/observation-white.svg';
import overviewLight from '../../img/file-white.svg';
import repoLight from '../../img/folders-white.svg';
import followersDark from '../../img/followers.svg';
import followingDark from '../../img/observation.svg';
import overviewDark from '../../img/file.svg';
import repoDark from '../../img/folders.svg';

export const DARK = 'dark';
export const LIGHT = 'light';
export const DARK_THEME = 'Dark Theme';
export const LIGHT_THEME = 'Light Theme';
export const THEME_KEY = 'theme';

export const LIGHT_THEME_ICONS = {
  followers: followersDark,
  following: followingDark,
  repo: repoDark,
  overview: overviewDark,
};
export const DARK_THEME_ICONS = {
  followers: followersLight,
  following: followingLight,
  repo: repoLight,
  overview: overviewLight,
};
