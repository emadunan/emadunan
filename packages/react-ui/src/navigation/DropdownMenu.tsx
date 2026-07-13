import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./DropdownMenu.module.css";

const DropdownMenuContext = createContext<(() => void) | null>(null);

export interface DropdownMenuProps
  extends React.HTMLAttributes<HTMLDivElement> {
  trigger: React.ReactNode;
  children: React.ReactNode;
}

const DropdownMenu: React.FC<DropdownMenuProps> & {
  Item: React.FC<DropdownMenuItemProps>;
  Separator: React.FC;
} = ({ trigger, children, className, ...rest }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;

      closeMenu();
      triggerRef.current?.focus();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeMenu, open]);

  return (
    <div
      className={`${styles.dropdown} ${className || ""}`}
      ref={menuRef}
      {...rest}
    >
      <button
        ref={triggerRef}
        type="button"
        className={styles.trigger}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        {trigger}
      </button>

      {open && (
        <DropdownMenuContext.Provider value={closeMenu}>
          <ul className={styles.menu} role="menu">
            {children}
          </ul>
        </DropdownMenuContext.Provider>
      )}
    </div>
  );
};

/* ---------- Subcomponents ---------- */
export interface DropdownMenuItemProps {
  closeOnSelect?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({
  closeOnSelect = true,
  onClick,
  children,
}) => {
  const closeMenu = useContext(DropdownMenuContext);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    if (closeOnSelect) closeMenu?.();
    onClick(event);
  }

  return (
    <li role="menuitem">
      <button type="button" className={styles.menuItem} onClick={handleClick}>
        {children}
      </button>
    </li>
  );
};

DropdownMenu.Item = DropdownMenuItem;

DropdownMenu.Separator = () => (
  <li role="separator" className={styles.separator} />
);

export default DropdownMenu;
