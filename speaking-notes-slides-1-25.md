# Speaking notes — slides 1–25 (legacy)

The **live investor deck** order comes from **`slide-order.json`**, with any slide id in **`hiddenSlides`** removed. Slide numbers in the UI no longer match this older “1–25 only” document.

**→ Use the current talk track:** [`speaking-notes-published-deck.md`](./speaking-notes-published-deck.md)  
It lists **every visible slide** in order (with `id`, registry label, and script), including updated copy for **customer base ARR splits**, **AI agents / disruption / leadership** layout changes, and the **financial** sequence.

To print a fresh index of visible slides:

```bash
node -e "const j=require('./slide-order.json');const h=new Set(j.hiddenSlides);j.order.filter(id=>!h.has(id)).forEach((id,i)=>console.log((i+1)+'\t'+id));"
```

---

*The detailed notes that used to live in this file have been merged and refreshed into `speaking-notes-published-deck.md`.*
