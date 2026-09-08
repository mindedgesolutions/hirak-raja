'use client';

import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

type WebsiteMenuProp = {
  scrolled: boolean;
};

export default function Menu({ scrolled }: WebsiteMenuProp) {
  const submenuClasses = scrolled
    ? {
        item: 'text-primary hover:bg-muted',
      }
    : {
        item: 'text-card hover:bg-card/20',
      };

  return (
    <NavigationMenu className="font-inter">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle(),
              'px-4 hover:text-primary-foreground tracking-wider',
              scrolled ? 'text-primary' : 'text-card',
            )}
            render={<Link href="/">Home</Link>}
          />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle(),
              'px-4 hover:text-primary-foreground tracking-wider',
              scrolled ? 'text-primary' : 'text-card',
            )}
            render={<Link href="/about">About</Link>}
          />
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={`px-4 hover:text-primary-foreground tracking-wider ${scrolled ? 'text-primary data-open:focus:text-primary' : 'text-card data-open:focus:text-card'}`}
          >
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent scrolled={scrolled} className="p-3">
            <ul className="w-96 font-inter">
              <ListItem
                className={cn(
                  'block rounded-md tracking-wider transition-colors py-2',
                  submenuClasses.item,
                )}
                href="/docs"
                title="Career Readiness"
              >
                <span
                  className={`text-xs ${scrolled ? 'text-primary/50' : 'text-muted/50'}`}
                >
                  Re-usable components built with Tailwind CSS.
                </span>
              </ListItem>
              <ListItem
                className={cn(
                  'block rounded-md tracking-wider transition-colors py-2',
                  submenuClasses.item,
                )}
                href="/docs"
                title="Import & Export"
              >
                <span
                  className={`text-xs ${scrolled ? 'text-primary/50' : 'text-muted/50'}`}
                >
                  Re-usable components built with Tailwind CSS.
                </span>
              </ListItem>
              <ListItem
                className={cn(
                  'block rounded-md tracking-wider transition-colors py-2',
                  submenuClasses.item,
                )}
                href="/docs"
                title="Web Development"
              >
                <span
                  className={`text-xs ${scrolled ? 'text-primary/50' : 'text-muted/50'}`}
                >
                  Re-usable components built with Tailwind CSS.
                </span>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={`px-4 hover:text-primary-foreground tracking-wider ${scrolled ? 'text-primary data-open:focus:text-primary' : 'text-card data-open:focus:text-card'}`}
          >
            Products
          </NavigationMenuTrigger>
          <NavigationMenuContent scrolled={scrolled} className="p-3">
            <ul className="w-96 font-inter">
              <ListItem
                className={cn(
                  'block rounded-md tracking-wider transition-colors py-2',
                  submenuClasses.item,
                )}
                href="/docs"
                title="Cyber Solutions"
              >
                <span
                  className={`text-xs ${scrolled ? 'text-primary/50' : 'text-muted/50'}`}
                >
                  Re-usable components built with Tailwind CSS.
                </span>
              </ListItem>
              <ListItem
                className={cn(
                  'block rounded-md tracking-wider transition-colors py-2',
                  submenuClasses.item,
                )}
                href="/docs"
                title="Kids Play"
              >
                <span
                  className={`text-xs ${scrolled ? 'text-primary/50' : 'text-muted/50'}`}
                >
                  Re-usable components built with Tailwind CSS.
                </span>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle(),
              'px-4 hover:text-primary-foreground tracking-wider',
              scrolled ? 'text-primary' : 'text-card',
            )}
            render={<Link href="/contact-us">Contact</Link>}
          />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <Link href={href}>
            <div className="flex flex-col gap-1 text-sm">
              <div className="leading-none font-medium">{title}</div>
              <div className="line-clamp-2 text-muted-foreground">
                {children}
              </div>
            </div>
          </Link>
        }
      />
    </li>
  );
}
