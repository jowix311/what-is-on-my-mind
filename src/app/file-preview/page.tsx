import { SectionHeader } from "@/components/features/common";
import { FilePreviewForm } from "@/components/file-preview";
import { SectionDescription } from "@/components/features/common";

export default function FilePreview() {
  return (
    <section>
      <SectionHeader>File Preview</SectionHeader>
      <SectionDescription>
        A simple form that allows you to preview images, and converting it to
        FormData for passing to an API
      </SectionDescription>
      <FilePreviewForm />
    </section>
  );
}
