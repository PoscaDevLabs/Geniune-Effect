// Copyright (c) 2026 pittriverbia2. All rights reserved.
// Licensed under the MIT License.
import Clutter from 'gi://Clutter';
import GLib from 'gi://GLib';
import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';

export default class GenuineExtension extends Extension {
    enable() {
        this._minimizeId = global.window_manager.connect('minimize', (wm, actor) => {
            if (!actor || !actor.get_meta_window) return;
            let metaWindow = actor.get_meta_window();
            if (!metaWindow) return;
            
            let wmClass = (metaWindow.get_wm_class() || "").toLowerCase();
            if (wmClass.includes('nautilus') || wmClass.includes('gnome')) {
                this._applyEffect(actor);
            } else {
                metaWindow.minimize();
            }
        });
    }
    disable() {
        if (this._minimizeId) global.window_manager.disconnect(this._minimizeId);
    }
    _applyEffect(actor) {
        actor.set_pivot_point(0.5, 1.0);
        actor.ease({
            scale_x: 0.05,
            scale_y: 0.1,
            opacity: 0,
            duration: 300,
            mode: Clutter.AnimationMode.EASE_IN_BACK,
            onComplete: () => { actor.get_meta_window().minimize(); }
        });
    }
}
