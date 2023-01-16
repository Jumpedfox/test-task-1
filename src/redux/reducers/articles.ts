import { ArticlesData, ArticleData } from "../../types/types";
import {
  ArticlesActions,
  LATEST_ARTICLES_RESPONCE,
  ARTICLES_FILTERED_BY_TITLE_RESPONCE,
  ARTICLES_FILTERED_BY_SUMMARY_RESPONCE,
  ARTICLE_RESPONSE,
} from "../actionTypes/articles";

interface ArticlesState {
  latestArticlesData: ArticlesData;
  articlesFilteredByTitleData: ArticlesData;
  articlesFilteredBySummaryData: ArticlesData;
  articleData: ArticleData;
}

const initialState: ArticlesState = {
  latestArticlesData: [],
  articlesFilteredByTitleData: [],
  articlesFilteredBySummaryData: [],
  articleData: {
    id: 0,
    title: "",
    summary: "",
    imageUrl: "",
  },
};

export const articlesReducer = (
  state = initialState,
  action: ArticlesActions
): ArticlesState => {
  switch (action.type) {
    case LATEST_ARTICLES_RESPONCE:
      return {
        ...state,
        latestArticlesData: action.payload,
      };
    case ARTICLES_FILTERED_BY_TITLE_RESPONCE:
      return {
        ...state,
        articlesFilteredByTitleData: action.payload,
      };
    case ARTICLES_FILTERED_BY_SUMMARY_RESPONCE:
      return {
        ...state,
        articlesFilteredBySummaryData: action.payload,
      };
    case ARTICLE_RESPONSE:
      return {
        ...state,
        articleData: action.payload,
      };

    default:
      return state;
  }
};
