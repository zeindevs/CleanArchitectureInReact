import { describe, it, vi, expect } from "vitest";
import { PAGE_LOADED } from "../actions/ui";
import uiMiddleware from "./ui";

describe("ui middleware", () => {
  describe("page loaded flow", () => {
    const [pageLoadedFlow] = uiMiddleware;

    const log = vi.fn();
    const dispatch = vi.fn();
    const next = vi.fn();
    const action = {
      type: PAGE_LOADED,
    };

    it("passes action to next middleware", () => {
      pageLoadedFlow({ log })({ dispatch })(next)(action);

      expect(next).toHaveBeenCalledWith(action);
    });

    it("calls log with correct argument", () => {
      pageLoadedFlow({ log })({ dispatch })(next)(action);

      expect(log).toHaveBeenCalledWith("page loaded");
    });
  });
});
