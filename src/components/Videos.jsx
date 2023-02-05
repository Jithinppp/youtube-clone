import { Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const videos = ({ videos }) => {
  return (
    <div className="video-grid-container">
      {videos?.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </div>
  );
};
export default videos;
