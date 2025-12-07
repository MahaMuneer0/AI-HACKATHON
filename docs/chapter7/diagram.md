# Diagrams for Chapter 7

[INSERT ASCII OR TOOL-GENERATED DIAGRAMS HERE]

## Example Diagram: A* Pathfinding (Grid)

```text
S = Start
G = Goal
X = Obstacle
. = Free Space

  0 1 2 3 4 5
0 S . . . . .
1 . X X X . .
2 . . . X . .
3 . X . X . .
4 . X . X . .
5 . . . . . G

Path from S to G might look like:

  0 1 2 3 4 5
0 S * * * . .
1 . X X X * .
2 . . . X * .
3 . X . X * .
4 . X . X * .
5 . . . . * G
```