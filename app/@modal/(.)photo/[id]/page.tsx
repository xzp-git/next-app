import { photos } from "@/app/data";

interface Props {
  params: { id: string };
}

export default function PhotoPage({ params: { id } }: Props) {
  const photo = photos.find((p) => p.id === id);
  if (!photo) return null;
  return (
    <div className="modal">
      <img
        style={{ width: "200", position: "fixed", top: "120px" }}
        src={photo.src}
      />
    </div>
  );
}
