import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import Link from "next/link"

  
export const Navigation = () => {
   return (
    <NavigationMenu>
  <NavigationMenuList>
  <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
   )
}