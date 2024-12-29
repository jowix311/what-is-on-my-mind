import Image from "next/image";

const ImageHolder = ({ file }: { file: File }) => {
  return (
    <div>
      <Image
        src={URL.createObjectURL(file)}
        alt={file.name}
        width={200}
        height={200}
      />
    </div>
  );
};

export const Gallery = ({ files }: { files?: FileList | File[] | null }) => {
  if (!files) {
    return null;
  }

  return (
    <div className="flex flex-row gap-4">
      {Array.isArray(files)
        ? files.map((file) => <ImageHolder key={file.name} file={file} />)
        : Array.from(files).map((file) => (
            <ImageHolder key={file.name} file={file} />
          ))}
    </div>
  );
};
