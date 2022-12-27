import {articleaction} from '../Slice/ArticleSlice';

export const getArticles = page => {
  return async (dispatch, getState) => {
    const accessToken = getState().login.token;
    try {
      dispatch(articleaction.getAllArticlesPending());
      const response = await fetch(
        'http://34.245.213.76:3000/articles?page=' + page,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      if (!response.ok) {
        throw new Error('Could not articles data data!');
      }
      const data = await response.json();
      const articles = data.response.docs;
      dispatch(articleaction.getAllArticlesFulfilled(articles));
    } catch (error) {
      dispatch(articleaction.getAllArticlesRejected(error.message));
    }
  };
};
