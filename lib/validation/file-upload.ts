import { z } from "zod";

const FileUploadSchema = z.object({
  file: z.instanceof(File).refine(
    (file) => {
      const validTypes = [
        "text/csv",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      ];
      return validTypes.includes(file.type);
    },
    {
      message: "Invalid file type. Only CSV and Excel files are allowed.",
    }
  ),
});



export { FileUploadSchema };
