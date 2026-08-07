export async function convertImage(
  file: File,
  format: string,
  quality: number
): Promise<Blob> {

  return new Promise((resolve, reject) => {

    const img = new Image();

    img.onload = () => {

      const canvas = document.createElement("canvas");

      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d");

      if (!ctx) {
        reject("Canvas Error");
        return;
      }

      ctx.drawImage(img, 0, 0);

      canvas.toBlob(

        (blob) => {

          if (!blob) {

            reject("Conversion Failed");

            return;

          }

          resolve(blob);

        },

        `image/${format}`,

        quality / 100

      );

    };

    img.onerror = reject;

    img.src = URL.createObjectURL(file);

  });

}