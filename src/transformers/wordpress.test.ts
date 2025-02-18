import { assertEquals } from "https://deno.land/std@0.172.0/testing/asserts.ts";
import { transform } from "./wordpress.ts";

const img = "https://jetpackme.files.wordpress.com/2020/01/jetpack-cdn.png";

Deno.test("wordpress", async (t) => {
  await t.step("should format a URL", () => {
    const result = transform({ url: img, width: 200, height: 100 });
    assertEquals(
      result?.toString(),
      "https://jetpackme.files.wordpress.com/2020/01/jetpack-cdn.png?w=200&h=100&crop=1",
    );
  });

  await t.step("should not change crop if set", () => {
    const url = new URL(img);
    url.searchParams.set("crop", "0");
    const result = transform({ url, width: 200, height: 100 });
    assertEquals(
      result?.toString(),
      "https://jetpackme.files.wordpress.com/2020/01/jetpack-cdn.png?crop=0&w=200&h=100",
    );
  });
});
