import { photos } from "../../data";

interface Props {
  params: { id: string };
}

export default function PhotoPage({ params: { id } }: Props) {
  const photo = photos.find((p) => p.id === id);
  if (!photo) return null;
  return (
    <img
      style={{
        width: "50%",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      }}
      src={photo.src}
      alt="mao"
    />
  );
}
