import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  navigation: Array<{ id: string; label: string; icon: string }>;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Header({ navigation, activeSection, setActiveSection }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
            <Icon name="Globe" className="text-white" size={24} />
          </div>
          <span className="text-xl font-bold text-primary">ВЭД Биржа</span>
        </div>

        <nav className="hidden md:flex gap-1">
          {navigation.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? 'default' : 'ghost'}
              className={activeSection === item.id ? 'bg-secondary hover:bg-secondary/90' : ''}
              onClick={() => setActiveSection(item.id)}
            >
              <Icon name={item.icon} className="mr-2" size={18} />
              {item.label}
            </Button>
          ))}
        </nav>

        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </div>
    </header>
  );
}
