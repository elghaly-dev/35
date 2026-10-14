#!/usr/bin/env python3
"""House-rule checks for 35.elghaly.dev HTML (stdlib only)."""
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent

FOOTER_URLS = [
    "https://chatting.elghaly.dev/",
]

FORBIDDEN_WORDS = re.compile(r"\b(live|profit|guarantee|audit|launched)\b", re.I)
FORBIDDEN = [
    (re.compile(r"qq\.com", re.I), "qq.com"),
    (re.compile(r"telegram", re.I), "Telegram"),
    (re.compile(r"t\.me/", re.I), "t.me link"),
    (re.compile(r"facebook\.com", re.I), "Facebook"),
    (re.compile(r"support@elghaly\.dev", re.I), "support@elghaly.dev"),
]

SKIP_DIRS = {".git", ".github", "node_modules", "scripts"}


def visible_html(raw: str) -> str:
    raw = re.sub(r"<!--.*?-->", "", raw, flags=re.S)
    raw = re.sub(r"<script[\s\S]*?</script>", "", raw, flags=re.I)
    raw = re.sub(r"<style[\s\S]*?</style>", "", raw, flags=re.I)
    return raw


def main():
    errors = []
    html_paths = [p for p in ROOT.rglob("*.html") if ".git" not in p.parts]
    index = ROOT / "index.html"
    if index.exists():
        text = index.read_text(encoding="utf-8")
        for url in FOOTER_URLS:
            if url.rstrip("/") not in text.replace('"/', '"'):
                if url not in text and url.rstrip("/") not in text:
                    errors.append("index.html missing footer URL %s" % url)
        if "elghaly, LLC" not in text:
            errors.append("index.html missing elghaly, LLC")
        if "35@elghaly.dev" not in text:
            errors.append("index.html missing 35@elghaly.dev")

    for path in html_paths:
        rel = path.relative_to(ROOT)
        raw = path.read_text(encoding="utf-8")
        vis = visible_html(raw)
        for pat, label in FORBIDDEN:
            if pat.search(raw if label == "support@elghaly.dev" else vis):
                errors.append("%s: forbidden %s" % (rel, label))
        for match in FORBIDDEN_WORDS.finditer(vis):
            errors.append("%s: forbidden word %r" % (rel, match.group(0)))

    for msg in errors:
        print("FAIL", msg)
    if errors:
        sys.exit(1)
    print("ok: %d HTML file(s)" % len(html_paths))


if __name__ == "__main__":
    main()
