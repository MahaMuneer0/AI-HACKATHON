---
sidebar_position: 1
---

# Chapter 4: Robot Sensing

## Overview
This chapter explores the crucial role of sensors in enabling robots to perceive their internal state and the external environment. Accurate and reliable sensing is fundamental for a robot's ability to navigate, manipulate objects, and interact safely and intelligently. We will categorize and detail various types of sensors, from those that measure the robot's own body (proprioceptive) to those that gather information about the world around it (exteroceptive), concluding with an examination of sensor fusion techniques that combine data for a richer perception.

## Core Concepts

### Proprioceptive Sensors (Encoders, IMUs, Force/Torque)
Proprioceptive sensors provide information about the robot's internal state, such as joint positions, velocities, and forces experienced by its structure.
- **Encoders**: Measure the angular position or displacement of a motor shaft or joint. Optical encoders are common, converting rotational motion into digital signals. They are crucial for precise position control.
- **Inertial Measurement Units (IMUs)**: Combine accelerometers (measure linear acceleration) and gyroscopes (measure angular velocity) to determine the orientation and motion of a robot in 3D space. Magnetometers are often included to provide heading information relative to Earth's magnetic field.
- **Force/Torque Sensors**: Measure the forces and torques applied to a robot's end-effector or joints. These are vital for tasks requiring interaction with the environment, such as assembly, grinding, or safe human-robot collaboration, allowing for force control strategies.

### Exteroceptive Sensors (Lidar, Cameras, Ultrasonic)
Exteroceptive sensors gather information about the external environment, enabling robots to perceive objects, obstacles, and their surroundings.
- **Lidar (Light Detection and Ranging)**: Uses pulsed laser light to measure distances to the surrounding environment. By rotating the laser, Lidar can create 2D or 3D maps, crucial for simultaneous localization and mapping (SLAM), obstacle avoidance, and navigation in autonomous systems.
- **Cameras (Vision Sensors)**: Capture visual information in the form of images or video.
    - **Monocular Cameras**: Provide 2D images, used for object detection, recognition, and tracking. Depth information can be inferred using techniques like monocular depth estimation.
    - **Stereo Cameras**: Mimic human binocular vision, using two cameras to capture images from slightly different viewpoints. This allows for direct calculation of depth (3D information) through triangulation, essential for 3D reconstruction and obstacle avoidance.
    - **RGB-D Cameras**: Provide both color (RGB) and depth (D) information directly, often using structured light or time-of-flight principles (e.g., Microsoft Kinect, Intel RealSense).
- **Ultrasonic Sensors**: Emit high-frequency sound waves and measure the time it takes for the echo to return, thus calculating the distance to an object. They are cost-effective for short-range distance measurement and basic obstacle detection.

### Sensor Fusion Techniques
Sensor fusion is the process of combining data from multiple sensors to achieve a more accurate, robust, and comprehensive understanding of the robot's state and environment than would be possible with individual sensors alone.
- **Kalman Filters**: A recursive algorithm that estimates the state of a dynamic system from a series of incomplete or noisy measurements. It is widely used for state estimation in robotics, combining predictions from a motion model with measurements from sensors (e.g., combining IMU data with GPS for navigation).
- **Extended Kalman Filters (EKF)** and **Unscented Kalman Filters (UKF)**: Extensions of the Kalman filter for non-linear systems.
- **Particle Filters (Monte Carlo Localization)**: Non-parametric filters that represent the probability distribution of the robot's state using a set of weighted particles. Effective for highly non-linear systems and multi-modal distributions, commonly used in robot localization.
- **Complementary Filters**: A simpler approach, often used for combining high-frequency noisy data from one sensor (e.g., gyroscope for orientation rate) with low-frequency but accurate data from another (e.g., accelerometer/magnetometer for absolute orientation).
