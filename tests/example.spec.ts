import { test, expect } from "@playwright/test";

const url = "http://localhost:3000/";

test("Site has title", async ({ page }) => {
  await page.goto(url);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Magic the Gathering/);
});

test("Navigates to the login page", async ({ page }) => {
  await page.goto(url);
  await page.getByRole("link", { name: /Login/ }).click();
  await expect(page).toHaveURL(url + "login");
  await expect(page.getByRole("heading", { level: 2 })).toContainText(/Log/);
});

// test("Open Magic the Gathering card", async ({ page }) => {
//   await page.goto(url);
//   await page.getByRole("link", { name: })
// });

test("Navigates to the about page", async ({ page }) => {
  await page.goto(url);
  await page.getByRole("link", { name: /About/ }).click();
  await expect(page).toHaveURL(url + "about");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "About Page"
  );
});
