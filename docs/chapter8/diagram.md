# Diagrams for Chapter 8

[INSERT ASCII OR TOOL-GENERATED DIAGRAMS HERE]

## Example Diagram: Human-Robot Collaboration Space

```text
+------------------------------------------+
|                                          |
|  Shared Workspace                        |
|                                          |
|  +----------------+      +-------------+ |
|  |     Human      |      |    Cobot    | |
|  | (Operator)     |      | (Collaborative| |
|  +----------------+      |    Robot)   | |
|         ^  ^             |      ^      | |
|         |  |             |      |      | |
|    (Communicate) <-----> (Perceive)    | |
|         v  v             |      v      | |
|  (Task Delegation) <---> (Task Execution)|
|                                          |
+------------------------------------------+
  Safety Zones:
  - Human only
  - Robot only
  - Collaborative (shared)
```