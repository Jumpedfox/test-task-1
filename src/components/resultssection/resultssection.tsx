import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import "./resultssection.scss";
import { ArticleData } from "../../types/types";

interface ResultsSectionProps {
  article: ArticleData ;
  loadArticle: (id: number) => void;
}
const ResultsSection: FC<ResultsSectionProps> = ({ article, loadArticle }) => {
  const navigate = useNavigate();

  const action = () => {
    loadArticle(article.id);
    navigate(`/article/${article.id}`);
  };

  return (
    <Card className="card">
      <CardMedia
        className="card-media"
        component="img"
        image={article.imageUrl}
        alt={article.title}
      />
      <CardContent>
        <Typography className="card-title" gutterBottom variant="h6" lineHeight={1.2}>
          {article.title}
        </Typography>
        <Typography className="card-summary" variant="subtitle2">
          {article.summary.slice(99, 100) === " "
            ? article.summary.slice(0, 99) + "..."
            : article.summary.slice(0, 100) + "..."}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => action()}>Read more...</Button>
      </CardActions>
    </Card>
  );
};

export default ResultsSection;
