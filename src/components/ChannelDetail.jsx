import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Box } from "@mui/material";
import { ChannelCard, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const { id } = useParams();
  console.log(id);

  return <div>ChannelDetail</div>;
};
export default ChannelDetail;
