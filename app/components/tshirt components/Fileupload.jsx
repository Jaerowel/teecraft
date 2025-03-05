"use client";

export default function FileUpload({ setTexture }) {
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setTexture(url); // Send texture to TShirtModel
    }
  };

  return (
    <div className="flex flex-col items-center">
      <label className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
        Upload Design
        <input type="file" accept="image/*" onChange={handleUpload} className="hidden" />
      </label>
    </div>
  );
}
