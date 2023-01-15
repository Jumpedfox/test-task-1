import axios from "axios";

const url = "https://api.spaceflightnewsapi.net/v3/articles";

export const loadHomepageFillerContent = async () => {
  const res = await axios.get(`${url}?`);
  return res.data;
};

export const loadFilteredByTitleContent = async (titleString: string) => {
  const titleRes = await axios.get(
    `${url}?_where[title_contains]=${titleString}`
  );
  return titleRes.data;
};

export const loadFilteredBySummaryContent = async (summaryString: string) => {
  const summaryRes = await axios.get(
    `${url}?_where[summary_contains]=${summaryString}`
  );
  return summaryRes.data;
};

export const loadSelectedArlicleData = async (id: number) => {
  const res = await axios.get(`${url}/${id}`);
  return res.data;
};
