import { Moon, Sun } from "lucide-react";
import { useTheme } from "../app/theme-provider";

function ModeToggle() {
    const { setTheme } = useTheme();

    return (
        <>
            <Sun
                onClick={() => setTheme("dark")}
                className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            />
            <Moon
                onClick={() => setTheme("light")}
                className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            />
        </>
    );
}

export default ModeToggle;
