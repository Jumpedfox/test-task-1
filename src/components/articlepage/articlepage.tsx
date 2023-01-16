import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/rootReducer";
import "./articlepage.scss";

const Articlepage: FC = () => {
  const navigate = useNavigate();
  const articles = useSelector((state: RootState) => state.articles);

  return (
    <Box className="articlepage">
      <img
        src={articles.articleData.imageUrl}
        alt={articles.articleData.title}
      />
      <Box className="content-wrapper">
        <Card className="card-wrapper">
          <CardContent>
            <Typography className="card-title" variant="h6">
              {articles.articleData.title}
            </Typography>
            <Divider className="divider" orientation="horizontal" />
            <Typography className="card-summary" variant="subtitle2">
              {articles.articleData.summary}
            </Typography>
          </CardContent>
        </Card>

        <Button className="button" onClick={() => navigate(-1)} variant="text">
          back
        </Button>
      </Box>
    </Box>
  );
};

export default Articlepage;
