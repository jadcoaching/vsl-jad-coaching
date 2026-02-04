import { Composition } from "remotion";
import { VSLVideo } from "./VSLVideo";
import { VIDEO_CONFIG } from "./config/video";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="VSLVideo"
        component={VSLVideo}
        durationInFrames={VIDEO_CONFIG.durationInFrames}
        fps={VIDEO_CONFIG.fps}
        width={VIDEO_CONFIG.width}
        height={VIDEO_CONFIG.height}
      />
    </>
  );
};
