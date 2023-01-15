import axios from "axios";
import ResultsSection from "../resultssection/resultssection";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedArticleData,
  latestArticlesData,
  articlesFilteredByTitleData,
  articlesFilteredBySummaryData,
} from "../../redux/actions/articles";
import { RootState } from "../../redux/rootReducer";
import { useEffect, useState } from "react";
import { FormHelperText, Grid, Input, InputLabel } from "@mui/material";
import "./homepage.scss";
import {
  loadFilteredBySummaryContent,
  loadFilteredByTitleContent,
  loadHomepageFillerContent,
  loadSelectedArlicleData,
} from "../../api";

function Homepage() {
  const dispatch = useDispatch();

  const [inputKeyword, setInputKeyword] = useState("");

  const titleString = inputKeyword.split(" ").join("&_where[title_contains]=");
  const summaryString = inputKeyword
    .split(" ")
    .join("&_where[summary_contains]=");

  const currentArticles = useSelector((state: RootState) => state.articles);

  const loadLatestArticles = async () => {
    const res: any = await loadHomepageFillerContent();
    if (res) {
      dispatch(latestArticlesData(res));
    }
  };

  const loadFilteredArticles = async (
    titleString: string,
    summaryString: string
  ) => {
    const titleRes: any = await loadFilteredByTitleContent(titleString);
    if (titleRes) {
      console.log(titleString);
      dispatch(articlesFilteredByTitleData(titleRes));
    }
    const summaryRes: any = await loadFilteredBySummaryContent(summaryString);
    if (summaryRes) {
      dispatch(articlesFilteredBySummaryData(summaryRes));
    }
  };

  const loadSelectedArticle = async (id: number) => {
    const res: any = await loadSelectedArlicleData(id);
    if (res) {
      dispatch(selectedArticleData(res));
    }
  };

  const handleWord = (e: any) => {
    setInputKeyword(e.target.value);
  };

  useEffect(() => {
    loadLatestArticles();
  }, []);

  return (
    <div className="homepage">
      <form
        className="homepage-form"
        onChange={() => loadFilteredArticles(titleString, summaryString)}
      >
        <InputLabel htmlFor="my-input">Filter by keywords</InputLabel>
        <Input
          id="my-input"
          aria-describedby="my-helper-text"
          onChange={handleWord}
          placeholder="Type in here..."
        />
        <FormHelperText>
          {inputKeyword.length > 0
            ? `Results: ${
                currentArticles.articlesFilteredByTitleData.length +
                currentArticles.articlesFilteredBySummaryData.length
              }`
            : "Latest news:"}
        </FormHelperText>
      </form>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 7 }}>
        {inputKeyword.length === 0 ? (
          currentArticles.latestArticlesData.map((result: any) => (
            <Grid item xs={12} sm={6} md={4} key={result.id}>
              <ResultsSection
                article={result}
                loadSelectedArticle={loadSelectedArticle}
              />
            </Grid>
          ))
        ) : (
          <>
            {currentArticles.articlesFilteredByTitleData.map((result: any) => (
              <Grid item xs={12} sm={6} md={4} key={result.id}>
                <ResultsSection
                  article={result}
                  loadSelectedArticle={loadSelectedArticle}
                />
              </Grid>
            ))}
            {currentArticles.articlesFilteredBySummaryData.map(
              (result: any) => (
                <Grid item xs={12} sm={6} md={4} key={result.id}>
                  <ResultsSection
                    article={result}
                    loadSelectedArticle={loadSelectedArticle}
                  />
                </Grid>
              )
            )}
          </>
        )}
      </Grid>
    </div>
  );
}

export default Homepage;
