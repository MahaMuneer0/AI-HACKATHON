# Exercises and Labs for Chapter 3

## Exercises

1.  **PID Controller Tuning**: Explain the individual effects of increasing Kp, Ki, and Kd on the step response of a system (e.g., overshoot, rise time, steady-state error, oscillation).
2.  **State-Space Representation**: Given a second-order mass-spring-damper system, derive its state-space representation. Identify the state variables, input, and output.
3.  **Force Control Application**: Describe a robotic task where force control (specifically impedance control) would be more advantageous than pure position control. Justify your answer.

## Labs

1.  **Simulated PID Control**: Implement a PID controller in a simulation environment (e.g., Python with `matplotlib`, MATLAB/Simulink) for a simple system like a DC motor or a robotic joint. Tune the Kp, Ki, Kd parameters to achieve a desired step response.
2.  **Impedance Control Simulation**: Develop a basic simulation of a robot interacting with an environment, implementing a simple impedance controller. Observe how changing the desired stiffness and damping affects the interaction forces and robot compliance.