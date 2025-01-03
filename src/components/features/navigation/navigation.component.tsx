import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export const Navigation = () => {
  return (
    <NavigationMenu className="container">
      <NavigationMenuList className="flex w-full flex-row justify-center gap-3 p-4">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink>Home</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/file-preview" legacyBehavior passHref>
            <NavigationMenuLink>File Preview</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/some-tailwind" legacyBehavior passHref>
            <NavigationMenuLink>Tailwind</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/some-cookies" legacyBehavior passHref>
            <NavigationMenuLink>Cookies</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
