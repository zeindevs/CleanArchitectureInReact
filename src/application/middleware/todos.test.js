import { loadTodosSuccess, LOAD_TODOS } from "../actions/todos";
import todosMiddleware from "./todos";
import { describe, expect, it, vi } from "vitest";

describe("todos middleware", () => {
  describe("load todos flow", () => {
    const [loadTodosFlow] = todosMiddleware;

    const dummyTodo = {
      id: "1",
      title: "Dummy todo",
      completed: true,
    };
    const api = {
      todos: {
        getAll: vi
          .fn()
          .mockImplementationOnce(
            () => new Promise((resolve) => resolve([dummyTodo]))
          ),
      },
    };
    const dispatch = vi.fn();
    const next = vi.fn();
    const action = {
      type: LOAD_TODOS,
    };

    it("passes action to next middleware", async () => {
      await loadTodosFlow({ api })({ dispatch })(next)(action);

      expect(next).toHaveBeenCalledWith(action);
    });

    it("calls api.todos.getAll at least once", async () => {
      await loadTodosFlow({ api })({ dispatch })(next)(action);

      expect(api.todos.getAll).toHaveBeenCalled();
    });

    it("calls api.todos.getAll at least once", async () => {
      await loadTodosFlow({ api })({ dispatch })(next)(action);

      expect(dispatch).toHaveBeenCalledWith(loadTodosSuccess([dummyTodo]));
    });
  });
});
