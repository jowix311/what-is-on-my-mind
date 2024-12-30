import { SectionHeader } from "@/components/features/common";
import { SomeCookies } from "@/components/some-cookies";

export default async function SomeCookiesPage() {
  return (
    <div>
      <SectionHeader>Some Cookies</SectionHeader>
      <SomeCookies />
    </div>
  );
}
