# Exercises and Labs for Chapter 4

## Exercises

1.  **Sensor Classification**: Classify the following sensors as proprioceptive or exteroceptive and explain why: a robot arm joint encoder, a camera on a mobile robot, a force sensor at a robot's wrist, and an ultrasonic range finder.
2.  **IMU Data Interpretation**: Describe how an IMU (accelerometer and gyroscope) can be used to estimate a robot's orientation. What are the limitations of using only accelerometer data versus only gyroscope data?
3.  **Lidar vs. Camera**: Compare and contrast the strengths and weaknesses of Lidar sensors versus cameras for robot navigation and mapping in different environmental conditions (e.g., bright sunlight, dense fog, indoors).

<h2>Labs</h2>

1.  **Encoder Reading**: If available, connect a rotary encoder to a microcontroller. Write code to read the encoder's position and velocity. Display the data and observe its accuracy.
2.  **Kalman Filter for Position Estimation**: Implement a simple 1D or 2D Kalman filter in Python to estimate the position of an object given noisy sensor measurements (e.g., GPS data) and a simple motion model. Compare the filtered output to raw sensor data.