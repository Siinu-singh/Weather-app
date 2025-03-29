import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function InfoBox({ info }) {
  const imgUrl =
    "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

  return (
    <div className="info-box">
      <Card sx={{ maxWidth: 400 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            width="500"
            image={imgUrl}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <li>Temperature = {info.temp}&deg;C</li>
              <li>Humidity = {info.humidity}</li>
              <li>Minimum Temperature = {info.temp_min}&deg;C</li>
              <li>Maximum Temperature = {info.temp_max}&deg;C</li>
              <li>Pressure = {info.pressure} hPa</li>
              <li>Description = {info.description}</li>
              <li>
                Sunset = {new Date(info.sunset * 1000).toLocaleTimeString()}
              </li>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
