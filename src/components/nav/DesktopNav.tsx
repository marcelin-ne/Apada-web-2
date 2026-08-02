import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import type { NavItem } from '@/lib/nav';

interface DesktopNavProps {
  items: NavItem[];
  currentPath: string;
}

const linkClass =
  'rounded-full bg-transparent px-3.5 py-2 text-sm font-medium text-current/85 transition-colors hover:bg-transparent hover:text-current hover:underline hover:decoration-2 hover:underline-offset-8 focus:bg-transparent focus:text-current focus-visible:bg-transparent focus-visible:text-current focus-visible:underline focus-visible:decoration-2 focus-visible:underline-offset-8 focus-visible:outline-none data-active:bg-transparent data-active:hover:bg-transparent data-active:focus:bg-transparent data-active:text-current data-active:underline data-active:decoration-2 data-active:underline-offset-8';

const triggerClass =
  'h-auto rounded-full bg-transparent px-3.5 py-2 text-sm font-medium text-current/85 transition-colors hover:bg-transparent hover:text-current hover:underline hover:decoration-2 hover:underline-offset-8 focus:bg-transparent focus:text-current focus-visible:outline-none data-open:bg-transparent data-open:text-current data-open:underline data-open:decoration-2 data-open:underline-offset-8 data-popup-open:bg-transparent data-popup-open:text-current data-popup-open:underline data-popup-open:decoration-2 data-popup-open:underline-offset-8';

const submenuLinkClass =
  'block rounded-lg bg-transparent px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-transparent hover:text-brand-navy hover:underline hover:decoration-2 hover:underline-offset-4 focus:bg-transparent focus:text-brand-navy data-active:bg-transparent data-active:hover:bg-transparent data-active:focus:bg-transparent data-active:text-brand-navy data-active:underline data-active:decoration-2 data-active:underline-offset-4';

function isGroupActive(item: NavItem, currentPath: string) {
  return item.href === currentPath || (item.children?.some((c) => c.href === currentPath) ?? false);
}

export default function DesktopNav({ items, currentPath }: DesktopNavProps) {
  return (
    <NavigationMenu viewport={false} aria-label="Navegación principal" className="hidden max-w-none flex-none items-center justify-start md:flex">
      <NavigationMenuList className="gap-1 lg:gap-2">
        {items.map((item) => {
          const active = isGroupActive(item, currentPath);

          if (!item.children) {
            return (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink asChild active={active} className={linkClass}>
                  <a href={item.href} aria-current={active ? 'page' : undefined}>
                    {item.label}
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          }

          return (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuTrigger
                className={`${triggerClass} ${active ? 'text-current underline decoration-2 underline-offset-8' : ''}`}
                onClick={() => {
                  window.location.href = item.children?.[0]?.href ?? item.href;
                }}
              >
                {item.label}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-56 p-1.5">
                <ul className="flex flex-col gap-0.5">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <NavigationMenuLink asChild active={child.href === currentPath} className={submenuLinkClass}>
                        <a href={child.href} aria-current={child.href === currentPath ? 'page' : undefined}>
                          {child.label}
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
