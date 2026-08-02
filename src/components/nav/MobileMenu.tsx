import { useState } from 'react';
import { Menu, MessageCircle } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
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
          <SheetDescription className="sr-only">
            Navegación principal del sitio de APADA del Ecuador
          </SheetDescription>
        </SheetHeader>
        <nav aria-label="Navegación principal" className="flex flex-col gap-1 px-4">
          {items.map((item) => {
            if (!item.children) {
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
            }

            const groupActive = item.children.some((c) => c.href === currentPath);

            return (
              <Accordion key={item.label} type="single" collapsible defaultValue={groupActive ? item.label : undefined}>
                <AccordionItem value={item.label} className="border-none">
                  <AccordionTrigger
                    className={`rounded-md px-3 py-3 text-base font-medium hover:no-underline ${
                      groupActive ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    {item.label}
                  </AccordionTrigger>
                  <AccordionContent className="pb-1 pl-3">
                    <div className="flex flex-col gap-1">
                      {item.children.map((child) => {
                        const isActive = currentPath === child.href;
                        return (
                          <SheetClose asChild key={child.href}>
                            <a
                              href={child.href}
                              aria-current={isActive ? 'page' : undefined}
                              className={`rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                                isActive
                                  ? 'bg-primary/10 text-primary'
                                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                              }`}
                            >
                              {child.label}
                            </a>
                          </SheetClose>
                        );
                      })}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
        </nav>
        <div className="mt-auto px-4 pb-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-blue px-4 py-3 text-base font-semibold text-white hover:bg-brand-blue-light"
          >
            <MessageCircle className="h-4.5 w-4.5" aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
