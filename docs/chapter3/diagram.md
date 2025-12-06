# Diagrams for Chapter 3

[INSERT ASCII OR TOOL-GENERATED DIAGRAMS HERE]

## Example Diagram: PID Control Loop

```text
       +------------------+
       |   Reference      |
       |   (Desired Value)|
       +-------+----------+
               |
               v
             ERROR
               +
               |
               v
       +------------------+     +------------------+     +------------------+
       |   Proportional   |     |    Integral      |     |   Derivative     |
       |   Controller (P) |---->|    Controller (I)|---->|   Controller (D) |----> CONTROL OUTPUT
       +------------------+     +------------------+     +------------------+
               ^                                                   |
               |                                                   |
               +---------------------------------------------------+
                                   |
                                   v
       +------------------+
       |   Robot System   |
       |   (Process)      |
       +-------+----------+
               |
               v
       +-------+----------+
       |   Measurement    |
       |   (Actual Value) |
       +------------------+
```