# Diagrams for Chapter 5

[INSERT ASCII OR TOOL-GENERATED DIAGRAMS HERE]

## Example Diagram: Object Detection Pipeline

```text
+-------------------+
|  Image Input      |
| (e.g., Camera)    |
+---------+---------+
          |
          v
+-------------------+
|  Preprocessing    |
| (e.g., Resize,   |
|  Normalize)       |
+---------+---------+
          |
          v
+-------------------+
|  Feature Extractor|
| (e.g., CNN       |
|  Backbone)        |
+---------+---------+
          |
          v
+-------------------+
|  Detection Head   |
| (e.g., Bounding Box|
|  Regression, Class |
|  Prediction)      |
+---------+---------+
          |
          v
+-------------------+
|  Non-Max Suppression|
| (Filter Overlapping|
|  Detections)      |
+---------+---------+
          |
          v
+-------------------+
|  Object Detections|
| (Bounding Boxes,  |
|  Labels, Scores)  |
+-------------------+
```