# Exercises and Labs for Chapter 7

## Exercises

1.  **SLAM Challenges**: Discuss the "data association problem" and the "loop closure problem" in SLAM. Why are these significant challenges, and how do modern SLAM algorithms address them?
2.  **Path Planning Algorithm Comparison**: Compare PRM and RRT algorithms. In what scenarios would one be preferred over the other for a robot's path planning?
3.  **Dynamic Obstacle Avoidance**: Imagine a mobile robot navigating a crowded hallway. Describe a strategy the robot could employ to avoid collisions with moving humans, using concepts from motion planning in dynamic environments.

<h2>Labs</h2>

1.  **A* Pathfinding Implementation**: Implement the A* pathfinding algorithm for a 2D grid environment in Python. Allow for obstacles and demonstrate its ability to find the shortest path from a start to a goal position.
2.  **Basic SLAM Simulation (Odometry + Landmarks)**: Create a simple simulation where a robot moves in a 2D environment, taking noisy odometry readings and observing known landmarks with noisy sensors. Implement a basic (e.g., EKF-based) SLAM algorithm to estimate the robot's pose and refine landmark positions. Visualize the results.