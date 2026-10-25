# Genuine

Genuine brings macOS-style window animations exclusively to native Linux GTK applications. It intercepts window management cycles to implement an asymmetric curve minimization (Genie effect) and includes a terminal toggle utility to swap styles on the fly.

Optimized for native Debian/Ubuntu systems, and structured to work correctly within nested container display layers (such as Xpra/Xephyr under ChromeOS Crostini or WSL).

## Project Structure

```text
├── Genuine-Size       # CLI wrapper script to toggle animation modes
├── install.sh         # Deployment script (manages paths & local permissions)
├── LICENSE            # MIT License
├── README.md          # Project documentation
└── extension/         # GNOME Shell extension module
    ├── extension.js   # Intercepts window state signals & handles matrix transitions
    └── metadata.json  # Extension definition blueprint
```

## Features

* **GTK-Only Isolation:** Selectively hooks into native GTK3/GTK4 apps (Nautilus, Gedit, etc.) while deliberately ignoring Electron frameworks, Chrome, or separate X11 windows.
* **Genie Mode:** Curved suction physics anchored downward toward your primary dock or panel.
* **Scale Mode:** Clean, linear structural reduction focused toward the center axis of the application.
* **Dynamic Hot-Swapping:** Toggles behaviors globally from any shell instance without forcing a desktop session restart.

## Installation

Run the following commands inside your terminal environment:

```bash
git clone https://github.com/PoscaDevLabs/Genuine-Effect
cd genuine
chmod +x install.sh
./install.sh
```

Once the installation completes, manually trigger the extension via the GNOME framework:

```bash
gnome-extensions enable genuine@pittriverbia2.github.io
```

## Usage

Use the global binary path wrapper to alternate animation profiles:

```bash
# Switches between 'genie' and 'scale' states instantly
Genuine-Size
```

## Configuration & Environment Tweak

If you are running inside a headless sandbox or container framework (like ChromeOS Crostini), ensure your local display routing is assigned to an unmapped slot to allow the compositor to handle matrix rendering correctly:

```bash
# Run on an unallocated display line to prevent server crashes
Xephyr -screen 1280x800 :5 -ac &
DISPLAY=:5 xfce4-session &
```

## License

Distributed under the MIT License. Open source and modification-friendly.
