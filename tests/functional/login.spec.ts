import { test, expect } from "@playwright/test";

test.describe("Login functionality", () => {
  test.beforeEach("Go to login page", async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");

    await page.getByRole("link", { name: "Make Appointment" }).click();
    await expect(page.getByText("Please login to make appointment."))
      .toBeVisible;
  });
  test("Should login successfully", async ({ page }) => {
    // 1. Launch url

    // 1. Successful login
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();

    // 2. Asset a text
    await expect(page.locator("//h2")).toContainText("Make Appointment");
  });

  test("Should prevent login", async ({ page }) => {
    // 1. Unsuccessful login
    await page.getByLabel("Username").fill("John Smith");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();

    // 2. Asset a error message
    await expect(page.locator("#login")).toContainText(
      "Login failed! Please ensure the username and password are valid.",
    );
  });
});
