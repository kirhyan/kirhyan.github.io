import blenderIcon from "../assets/images/icons3D/blender_white.png";
import phIcon from "../assets/images/icons3D/photoshop_white.png";
import figmaIcon from "../assets/images/icons3D/figmaIcon.png";
import ptIcon from "../assets/images/icons3D/substance-3d-painter_white.png";
import unityIcon from "../assets/images/icons3D/Unity _white.png";
import unrealIcon from "../assets/images/icons3D/Unreal_white.png";
import zbrushIcon from "../assets/images/icons3D/ZBrush_white.png";

export interface Icons3D {
  imageUrl: string;
  tooltip: string;
}

const icon3D: Icons3D[] = [
  {
    imageUrl: blenderIcon,
    tooltip: "Blender",
  },
  {
    imageUrl: phIcon,
    tooltip: "Photoshop",
  },
  {
    imageUrl: figmaIcon,
    tooltip: "Figma",
  },
  {
    imageUrl: ptIcon,
    tooltip: "Substance Painter",
  },
  {
    imageUrl: unityIcon,
    tooltip: "Unity",
  },
  {
    imageUrl: unrealIcon,
    tooltip: "Unreal",
  },
  {
    imageUrl: zbrushIcon,
    tooltip: "ZBrush",
  },
];

export default icon3D;
