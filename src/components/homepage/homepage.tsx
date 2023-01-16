import ResultsSection from "../resultssection/resultssection";
import { useDispatch, useSelector } from "react-redux";
import {
  articleData,
  latestArticlesData,
  articlesFilteredByTitleData,
  articlesFilteredBySummaryData,
} from "../../redux/actions/articles";
import { RootState } from "../../redux/rootReducer";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { FormHelperText, Grid, Input, InputLabel } from "@mui/material";
import "./homepage.scss";
import {
  loadFilteredBySummaryContent,
  loadFilteredByTitleContent,
  loadHomepageFillerContent,
  loadArticleData,
} from "../../api";
import { ArticleData, ArticlesData } from "../../types/types";

const Homepage: FC = () => {
  const dispatch = useDispatch();

  const [inputKeyword, setInputKeyword] = useState("");

  const titleString: string = inputKeyword
    .split(" ")
    .join("&_where[title_contains]=");
  const summaryString: string = inputKeyword
    .split(" ")
    .join("&_where[summary_contains]=");

  const currentArticles = useSelector((state: RootState) => state.articles);

  const loadLatestArticles = async () => {
    const res: ArticlesData = await loadHomepageFillerContent();
    if (res) {
      dispatch(latestArticlesData(res));
    }
  };

  const loadFilteredArticles = async (e: any) => {
    e.preventDefault();
    const titleRes: ArticlesData = await loadFilteredByTitleContent(
      titleString
    );
    if (titleRes) {
      dispatch(articlesFilteredByTitleData(titleRes));
    }
    const summaryRes: ArticlesData = await loadFilteredBySummaryContent(
      summaryString
    );
    if (summaryRes) {
      dispatch(articlesFilteredBySummaryData(summaryRes));
    }
  };

  const loadArticle = async (id: number) => {
    const res: ArticleData = await loadArticleData(id);
    if (res) {
      dispatch(articleData(res));
    }
  };

  const handleWord = (e: ChangeEvent<HTMLInputElement>) => {
    setInputKeyword(e.target.value);
  };

  useEffect(() => {
    loadLatestArticles();
  }, []);

  useEffect(() => {
    if (inputKeyword.length === 0) {
      dispatch(articlesFilteredByTitleData([]));
      dispatch(articlesFilteredBySummaryData([]));
    }
  }, [inputKeyword]);

  return (
    <section className="homepage">
      <form
        className="homepage-form"
        onSubmit={(e: any) => loadFilteredArticles(e)}
      >
        <InputLabel htmlFor="my-input">Filter by keywords</InputLabel>
        <Input
          id="my-input"
          aria-describedby="my-helper-text"
          onChange={handleWord}
          placeholder="Type in here..."
        />
        <FormHelperText className="helper-text">
          {inputKeyword.length > 0
            ? `Results: ${
                currentArticles.articlesFilteredByTitleData.length +
                currentArticles.articlesFilteredBySummaryData.length
              }`
            : "Latest news:"}
        </FormHelperText>
      </form>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 7 }}>
        {currentArticles.articlesFilteredByTitleData.length +
          currentArticles.articlesFilteredBySummaryData.length >
        0 ? (
          <>
            {currentArticles.articlesFilteredByTitleData.map((result: any) => (
              <Grid item xs={12} sm={6} md={4} key={result.id}>
                <ResultsSection article={result} loadArticle={loadArticle} />
              </Grid>
            ))}
            {currentArticles.articlesFilteredBySummaryData.map(
              (result: any) => (
                <Grid item xs={12} sm={6} md={4} key={result.id}>
                  <ResultsSection article={result} loadArticle={loadArticle} />
                </Grid>
              )
            )}
          </>
        ) : (
          currentArticles.latestArticlesData.map((result: any) => (
            <Grid item xs={12} sm={6} md={4} key={result.id}>
              <ResultsSection article={result} loadArticle={loadArticle} />
            </Grid>
          ))
        )}
      </Grid>
    </section>
  );
};

export default Homepage;
