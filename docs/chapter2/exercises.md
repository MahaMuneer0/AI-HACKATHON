# Exercises and Labs for Chapter 2

## Exercises

1.  **Forward Kinematics Calculation**: For a 2-DOF planar robot arm (e.g., two revolute joints, two links of lengths L1 and L2), derive the forward kinematics equations to find the (x, y) position of the end-effector given joint angles θ1 and θ2.
2.  **Inverse Kinematics Problem**: Given a desired (x, y) position for the end-effector of the 2-DOF planar arm from Exercise 1, find the corresponding joint angles (θ1, θ2). Discuss potential multiple solutions or no solutions.
3.  **Jacobian Matrix Derivation**: For the same 2-DOF planar robot arm, derive the Jacobian matrix that relates joint velocities to end-effector velocities. Identify any singular configurations.

## Labs

1.  **Simulated Robot Kinematics**: Use a robotics simulation environment (e.g., CoppeliaSim, ROS with Gazebo, PyBullet) to model a simple 2-DOF or 3-DOF robot arm. Implement forward and inverse kinematics using the simulator's tools or your own code. Visualize the robot's movement.
2.  **Trajectory Generation Implementation**: Write a program to generate a cubic polynomial trajectory in joint space for a single robot joint. Given start and end positions, velocities, and a total time, calculate the joint position, velocity, and acceleration profiles over time. Plot the results.