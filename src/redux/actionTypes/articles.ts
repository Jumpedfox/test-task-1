import { ArticlesData, SelectedArticleData } from "../../types/types";

export const LATEST_ARTICLES_RESPONCE = "LATEST_ARTICLES_RESPONCE";
export const ARTICLES_FILTERED_BY_TITLE_RESPONCE =
  "ARTICLES_FILTERED_BY_TITLE_RESPONCE";
export const ARTICLES_FILTERED_BY_SUMMARY_RESPONCE =
  "ARTICLES_FILTERED_BY_SUMMARY_RESPONCE";
export const SELECTED_ARTICLE_RESPONSE = "SELECTED_ARTICLE_RESPONSE";

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

export type SelectedArticleDataAction = {
  type: typeof SELECTED_ARTICLE_RESPONSE;
  payload: SelectedArticleData;
};

export type ArticlesActions =
  | LatestArticlesDataAction
  | ArticlesFilteredByTitleDataAction
  | ArticlesFilteredBySummaryDataAction
  | SelectedArticleDataAction;
