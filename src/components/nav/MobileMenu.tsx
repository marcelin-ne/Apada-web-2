import { useState } from 'react';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import type { NavItem } from '@/lib/nav';

interface MobileMenuProps {
  items: NavItem[];
  currentPath: string;
  whatsappUrl: string;
}

export default function MobileMenu({ items, currentPath, whatsappUrl }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <Button
        variant="ghost"
        size="icon"
        className="size-11 md:hidden"
        aria-label="Abrir menú de navegación"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <Menu aria-hidden="true" />
      </Button>
      <SheetContent side="right" className="w-4/5 sm:max-w-xs">
        <SheetHeader>
          <SheetTitle>Menú</SheetTitle>
        </SheetHeader>
        <nav aria-label="Navegación principal" className="flex flex-col gap-1 px-4">
          {items.map((item) => {
            const isActive = currentPath === item.href;
            return (
              <SheetClose asChild key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`rounded-md px-3 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {item.label}
                </a>
              </SheetClose>
            );
          })}
        </nav>
        <div className="mt-auto px-4 pb-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center rounded-lg bg-brand-green px-4 py-3 text-base font-semibold text-white hover:bg-brand-green-light"
          >
            Escríbenos por WhatsApp
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
