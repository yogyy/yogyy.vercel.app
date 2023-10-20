import Sun from './icons/sun';
import Moon from './icons/moon';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { useMounted } from '@/hooks/use-mounted';

type ThemeButtonProps = React.ComponentPropsWithoutRef<'button'>;

export function ThemeButton({ className, ...rest }: ThemeButtonProps) {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  return (
    <button
      role="button"
      aria-label="dark mode toggle"
      aria-pressed="true"
      className={cn(
        'rounded-md border-2 border-background p-1.5 py-1',
        'text-accent focus:outline-none focus-visible:border-accent',
        className,
      )}
      {...rest}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <span className="sr-only">Toggle theme</span>
      {mounted ? <>{theme === 'light' ? <Moon /> : <Sun />}</> : <Sun />}
    </button>
  );
}
