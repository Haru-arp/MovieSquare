const HOST = 'http://localhost:8000/api/v1/'

const ACCOUNTS = 'accounts/'
const ARTICLES = 'articles/'
const COMMENTS = 'comments/'
const MOVIE_COMMENTS = 'movie/'
const MOVIE_LIKE= 'like/'

export default {
  accounts: {
    login: () => HOST + ACCOUNTS + 'login/',
    logout: () => HOST + ACCOUNTS + 'logout/',
    signup: () => HOST + ACCOUNTS + 'signup/',
    // Token 으로 현재 user 판단
    currentUserInfo: () => HOST + ACCOUNTS + 'user/',
    // username으로 프로필 제공
    profile: username => HOST + ACCOUNTS + 'profile/' + username,
  },
  articles: {
    // /articles/
    articles: () => HOST + ARTICLES,
    // /articles/1/
    article: articlePk => HOST + ARTICLES + `${articlePk}/`,
    likeArticle: articlePk => HOST + ARTICLES + `${articlePk}/` + 'like/',
    comments: articlePk => HOST + ARTICLES + `${articlePk}/` + COMMENTS,
    comment: (articlePk, commentPk) =>
      HOST + ARTICLES + `${articlePk}/` + COMMENTS + `${commentPk}/`,
    movie_comments: movie_id => HOST + ARTICLES + MOVIE_COMMENTS + `${movie_id}/`,
    movie_comments_delete: (movie_id, movieCommentPk) => HOST + ARTICLES + MOVIE_COMMENTS + `${movie_id}/` + `${movieCommentPk}`,
    movie_like:(movie_id) => HOST + ARTICLES + MOVIE_COMMENTS + MOVIE_LIKE + `${movie_id}/` 
  },
}
