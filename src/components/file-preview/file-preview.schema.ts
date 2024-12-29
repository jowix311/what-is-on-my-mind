import { z } from "zod";

// Good Notes: https://github.com/colinhacks/zod/issues/118
export const FilePreviewSchema = z.object({
  title: z.string(),
  files: z.array(z.instanceof(File)),
});
