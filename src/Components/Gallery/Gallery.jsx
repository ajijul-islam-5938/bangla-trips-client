export default function Gallery({ gallery }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 my-10">
      {gallery?.map((img, i) => (
        <div key={i} className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={img}
              alt="gallery-photo"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
