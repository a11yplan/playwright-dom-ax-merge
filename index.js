import { chromium } from "playwright";
import { AxeBuilder } from "@axe-core/playwright";
import { writeFile } from "fs/promises";

const url =
  "https://alphagov.github.io/accessibility-tool-audit/test-cases.html";

const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();

await page.goto(url);

const cdp = await context.newCDPSession(page);

// pre-enable the necessary domains
await cdp.send("DOM.getDocument");
await cdp.send("CSS.enable");
await cdp.send("Accessibility.enable");

const axTree = await cdp.send("Accessibility.getFullAXTree");
const domSnapshot = await cdp.send("DOMSnapshot.captureSnapshot", {
  computedStyles: [],
});
const axeResult = await new AxeBuilder({ page }).analyze();

await writeFile("output/axeResult.json", JSON.stringify(axeResult, null, 2));
await writeFile("output/axTree.json", JSON.stringify(axTree, null, 2));
await writeFile("output/domSnapshot.json", JSON.stringify(domSnapshot, null, 2));

await browser.close();
