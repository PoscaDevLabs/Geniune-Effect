#!/bin/bash
EXT_DIR="$HOME/.local/share/gnome-shell/extensions/genuine@pittriverbia2.github.io"
mkdir -p "$EXT_DIR"
cp extension/metadata.json "$EXT_DIR/"
cp extension/extension.js "$EXT_DIR/"
sudo cp Genuine-Size /usr/local/bin/Genuine-Size
sudo chmod +x /usr/local/bin/Genuine-Size
echo "Genuine installed successfully!"
