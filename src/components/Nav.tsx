import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

export function Nav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Games</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-1 p-6 md:w-[600px] space-y-4">
              <li>
                <iframe
                  src="https://itch.io/embed/1844588?linkback=true&amp;bg_color=000&amp;fg_color=ddd&amp;link_color=f00&amp;border_color=822d2d"
                  width="552"
                  height="167"
                >
                  <a href="https://alxl.itch.io/null-doctrine">
                    The Null Doctrine by alxl
                  </a>
                </iframe>
              </li>
              <li>
                <iframe
                  src="https://itch.io/embed/1348990?linkback=true&amp;bg_color=352340&amp;fg_color=ffffff&amp;link_color=5bfaad&amp;border_color=532e83"
                  width="552"
                  height="167"
                >
                  <a href="https://alxl.itch.io/beyond-the-veil">
                    Beyond the Veil by alxl, kylepo
                  </a>
                </iframe>
              </li>
              <li className="justify-self-end">
                <a href="https://alxl.itch.io/" target="_blank">
                  <Button variant="secondary">
                    More of my games on itch.io
                  </Button>
                </a>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            href="https://www.youtube.com/@ItsAlxl"
            target="_blank"
          >
            YouTube
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Other Things</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-1 p-6 md:w-[200px] space-y-4">
              <li>
                <a
                  href="https://www.nexusmods.com/warhammer40kdarktide/users/43458812?tab=user+files"
                  target="_blank"
                >
                  <Button className="w-full" variant="secondary">
                    Darktide Mods
                  </Button>
                </a>
              </li>
              <li>
                <a href="https://github.com/ItsAlxl" target="_blank">
                  <Button className="w-full" variant="secondary">
                    GitHub
                  </Button>
                </a>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            href="https://ko-fi.com/itsalxl"
            target="_blank"
          >
            Donate
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
