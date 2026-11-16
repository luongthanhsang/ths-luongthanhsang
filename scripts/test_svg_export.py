# -*- coding: utf-8 -*-
import sys
sys.path.insert(0, "scripts")
import generate_b11_1_svgs as svgs

names = ["SVG_HOOK_ISS", "SVG_SEC1A_SPIRALS", "SVG_SEC2A_RADIAN", "SVG_SEC3A_TRIG_CIRCLE", "SVG_SEC3B_QUADRANT3", "SVG_SEC4_FORMULAS"]
for name in names:
    val = getattr(svgs, name, None)
    print(f"{name}: {'OK' if val else 'MISSING'}, length={len(val) if val else 0}")
