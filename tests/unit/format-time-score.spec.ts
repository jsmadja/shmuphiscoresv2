import { formatTime } from "@/formaters";

test("format time", () => {
  expect(formatTime(-62167219506908)).toBe(`54'53"92`);
});
