import { SectionHeader } from "@/components/features/common";
import { FilePreviewForm } from "@/components/file-preview";

export default function FilePreview() {
  return (
    <section>
      <SectionHeader>File Preview</SectionHeader>

      <FilePreviewForm />
    </section>
  );
}
