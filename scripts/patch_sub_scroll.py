with open("js/script.js", "r", encoding="utf-8") as f:
    text = f.read()

# 1. Update subsection-card id to include secAnchor
old_sub_card = '<div class="subsection-card" id="sub-${escapeHtml(cleanLetter)}" data-subkey="${escapeHtml(cleanLetter)}">'
new_sub_card = '<div class="subsection-card" id="${secAnchor}-sub-${escapeHtml(cleanLetter)}" data-subkey="${escapeHtml(cleanLetter)}">'

if old_sub_card in text:
    text = text.replace(old_sub_card, new_sub_card)
    print("Replaced subsection-card id with unique secAnchor prefix")
else:
    print("old_sub_card not found")

# 2. Update activateStep scrolling for subKey
old_scroll = """      if (subKey) {
        const subCard = document.getElementById(`sub-${subKey}`) || document.querySelector(`[data-subkey="${subKey}"]`);
        if (subCard) {
          subCard.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }"""

new_scroll = """      if (subKey) {
        const activeBlock = document.querySelector(`[data-step-block="${currentActiveStepId}"]`);
        const subCard = activeBlock ? activeBlock.querySelector(`[data-subkey="${subKey}"]`) : (document.getElementById(`${stepId}-sub-${subKey}`) || document.querySelector(`[data-subkey="${subKey}"]`));
        if (subCard) {
          subCard.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }"""

if old_scroll in text:
    text = text.replace(old_scroll, new_scroll)
    print("Replaced scroll logic in activateStep")
else:
    print("old_scroll not found")

with open("js/script.js", "w", encoding="utf-8") as f:
    f.write(text)

with open("BAN_CAP_NHAT_NETLIFY/js/script.js", "w", encoding="utf-8") as f:
    f.write(text)

print("Saved to js/script.js and BAN_CAP_NHAT_NETLIFY/js/script.js successfully!")
