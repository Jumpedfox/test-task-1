import { ArticlesData, ArticleData } from "../../types/types";

export const LATEST_ARTICLES_RESPONCE = "LATEST_ARTICLES_RESPONCE";
export const ARTICLES_FILTERED_BY_TITLE_RESPONCE =
  "ARTICLES_FILTERED_BY_TITLE_RESPONCE";
export const ARTICLES_FILTERED_BY_SUMMARY_RESPONCE =
  "ARTICLES_FILTERED_BY_SUMMARY_RESPONCE";
export const ARTICLE_RESPONSE = "ARTICLE_RESPONSE";

export type LatestArticlesDataAction = {
  type: typeof LATEST_ARTICLES_RESPONCE;
  payload: ArticlesData;
};

export type ArticlesFilteredByTitleDataAction = {
  type: typeof ARTICLES_FILTERED_BY_TITLE_RESPONCE;
  payload: ArticlesData;
};

export type ArticlesFilteredBySummaryDataAction = {
  type: typeof ARTICLES_FILTERED_BY_SUMMARY_RESPONCE;
  payload: ArticlesData;
};

export type ArticleDataAction = {
  type: typeof ARTICLE_RESPONSE;
  payload: ArticleData;
};

export type ArticlesActions =
  | LatestArticlesDataAction
  | ArticlesFilteredByTitleDataAction
  | ArticlesFilteredBySummaryDataAction
  | ArticleDataAction;
