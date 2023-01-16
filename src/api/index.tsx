import axios from "axios";

const url = "https://api.spaceflightnewsapi.net/v3/articles";

export const loadHomepageFillerContent = async () => {
  const res = await axios.get(`${url}?`);
  return res.data;
};

export const loadFilteredByTitleContent = async (titleString: string) => {
  if (titleString) {
    const titleRes = await axios.get(
      `${url}?_where[title_contains]=${titleString}`
    );
    return titleRes.data;
  }
};

export const loadFilteredBySummaryContent = async (summaryString: string) => {
  if (summaryString) {
    const summaryRes = await axios.get(
      `${url}?_where[summary_contains]=${summaryString}`
    );
    return summaryRes.data;
  }
};

export const loadArticleData = async (id: number) => {
  const res = await axios.get(`${url}/${id}`);
  return res.data;
};
