import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/rootReducer";
import "./articlepage.scss";

function Articlepage() {
  const navigate = useNavigate();
  const articles = useSelector((state: RootState) => state.articles);

  return (
    <Box className="articlepage">
      <img
        src={articles.selectedArticleData.imageUrl}
        alt={articles.selectedArticleData.title}
      />
      <Box className="content-wrapper">
        <Card className="card-wrapper">
          <CardContent>
            <Typography variant="h6">
              {articles.selectedArticleData.title}
            </Typography>
            <Divider className="divider" orientation="horizontal" />
            <Typography className="card-summary" variant="subtitle2">
              {articles.selectedArticleData.summary}
            </Typography>
          </CardContent>
        </Card>

        <Button className="button" onClick={() => navigate(-1)} variant="text">
          back
        </Button>
      </Box>
    </Box>
  );
}

export default Articlepage;
