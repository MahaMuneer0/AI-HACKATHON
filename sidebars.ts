import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Part 1: Foundations of Physical AI',
      items: [
        {
          type: 'category',
          label: 'Chapter 1: Introduction to Physical AI and Robotics',
          items: [
            'chapter1/introduction-to-physical-ai-and-robotics',
          ],
        },
        {
          type: 'category',
          label: 'Chapter 2: Kinematics and Dynamics',
          items: [
            'chapter2/kinematics-and-dynamics',
          ],
        },
        {
          type: 'category',
          label: 'Chapter 3: Robot Control Systems',
          items: [
            'chapter3/robot-control-systems',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Part 2: Sensing and Perception',
      items: [
        {
          type: 'category',
          label: 'Chapter 4: Robot Sensing',
          items: [
            'chapter4/robot-sensing',
          ],
        },
        {
          type: 'category',
          label: 'Chapter 5: Computer Vision for Robotics',
          items: [
            'chapter5/computer-vision-for-robotics',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Part 3: AI and Learning in Robotics',
      items: [
        {
          type: 'category',
          label: 'Chapter 6: Robot Learning',
          items: [
            'chapter6/robot-learning',
          ],
        },
        {
          type: 'category',
          label: 'Chapter 7: Robot Navigation and Planning',
          items: [
            'chapter7/robot-navigation-and-planning',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Part 4: Human-Robot Interaction and Advanced Topics',
      items: [
        {
          type: 'category',
          label: 'Chapter 8: Human-Robot Interaction (HRI)',
          items: [
            'chapter8/human-robot-interaction-hri',
          ],
        },
        {
          type: 'category',
          label: 'Chapter 9: Advanced Topics and Future Directions',
          items: [
            'chapter9/advanced-topics-and-future-directions',
          ],
        },
      ],
    },
  ],
};

export default sidebars;