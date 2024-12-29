import { z } from "zod";

export const FilePreviewSchema = z.object({
  title: z.string(),
  files: z.instanceof(File),
});
