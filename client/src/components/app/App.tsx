import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./theme-provider";
import Header from "../header/header";

function App() {
    return (
        <main className="min-h-screen">
            <ThemeProvider>
                <Header />
                <div className="container">
                    <Outlet />
                </div>
            </ThemeProvider>
        </main>
    );
}

export default App;
