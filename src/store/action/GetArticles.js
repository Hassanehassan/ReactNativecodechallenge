import {articleaction} from '../Slice/ArticleSlice';
import config from '../../../config';

export const getArticles = page => {
  return async (dispatch, getState) => {
    const accessToken = getState().login.token;
    dispatch(articleaction.getAllArticlesPending());
    try {
      const response = await fetch(`${config.API_URL_GET}?page=` + page, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to connect');
      }
      const data = await response.json();
      const articles = data.response.docs;
      dispatch(articleaction.getAllArticlesFulfilled(articles));
    } catch (error) {
      dispatch(articleaction.getAllArticlesRejected(error.message));
    }
  };
};
