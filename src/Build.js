import { execSync } from "child_process";
import { platform } from "os";

const isWindows = platform() === "win32";

if (isWindows) {
    execSync("npm run build-library-windows", { stdio: "inherit", shell: true });
} else {
    execSync("npm run build-library", { stdio: "inherit", shell: true });
}
