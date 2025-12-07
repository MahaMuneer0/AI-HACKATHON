# Diagrams for Chapter 4

[INSERT ASCII OR TOOL-GENERATED DIAGRAMS HERE]

## Example Diagram: Sensor Fusion (High-Level)

```text
+----------+     +----------+     +----------+
|  Sensor A|     |  Sensor B|     |  Sensor C|
| (e.g., GPS)|     | (e.g., IMU)|     | (e.g., Lidar)|
+----+-----+     +----+-----+     +----+-----+
     |                |                |
     v                v                v
+------------------------------------------+
|            Sensor Fusion Algorithm       |
|          (e.g., Kalman Filter)         |
+------------------------------------------+
     |
     v
+------------------------------------------+
|      Improved State Estimate             |
|  (e.g., Position, Velocity, Orientation) |
+------------------------------------------+
```