import { ArticlesData, SelectedArticleData } from "../../types/types";
import {
  ArticlesActions,
  LATEST_ARTICLES_RESPONCE,
  ARTICLES_FILTERED_BY_TITLE_RESPONCE,
  ARTICLES_FILTERED_BY_SUMMARY_RESPONCE,
  SELECTED_ARTICLE_RESPONSE,
} from "../actionTypes/articles";

export const latestArticlesData = (payload: ArticlesData): ArticlesActions => ({
  type: LATEST_ARTICLES_RESPONCE,
  payload,
});

export const articlesFilteredByTitleData = (
  payload: ArticlesData
): ArticlesActions => ({
  type: ARTICLES_FILTERED_BY_TITLE_RESPONCE,
  payload,
});

export const articlesFilteredBySummaryData = (
  payload: ArticlesData
): ArticlesActions => ({
  type: ARTICLES_FILTERED_BY_SUMMARY_RESPONCE,
  payload,
});

export const selectedArticleData = (
  payload: SelectedArticleData
): ArticlesActions => ({
  type: SELECTED_ARTICLE_RESPONSE,
  payload,
});
