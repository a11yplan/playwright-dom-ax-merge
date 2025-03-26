# DOM Data Merging Task

Welcome! This is a coding task focused on creating a robust solution for merging multiple data sources that represent different aspects of a webpage.

## The Task

Your task is to design (and optionally implement) a solution that combines three different data sources into one:
- DOM structure (from browser)
- Accessibility tree (ARIA, roles, properties)
- Automated accessibility test results

The goal is to create a unified data structure that combines information from multiple sources into a single, consistent format for analysis.

## Time Guidance

We suggest spending around 1.5 to 2 hours on this task. Here's a recommended breakdown:
- 45-60 minutes on design and planning
- Remaining time for implementation or detailed documentation

Feel free to take more time if you'd like to explore additional features or edge cases.

## Sample Code

This repository includes sample code that demonstrates how to collect the required data. However, this is just one possible approach - feel free to:
- Use this code as a starting point
- Write your solution from scratch
- Use different tools or libraries
- Modify the data collection approach

## Getting Started

1. Set up the project:
```bash
npm install
npx playwright install chromium --with-deps
```

2. Run the data collection:
```bash
npm start
```

This will generate three JSON files in the `output` directory that you can use to develop your solution.

## What We're Looking For

We want to see how you:
- Design a clean data structure that preserves relationships
- Handle real-world edge cases
- Write maintainable and efficient code (if implementing)
- Document your approach

## Tips

- Focus on reliability over sample data
- Consider performance with large DOM trees
- Think about how to handle missing or conflicting information
- Document your key decisions
- Feel free to provide a design-only solution with clear explanations
- Prioritize core functionality

Good luck! We're excited to see your solution, whether it's implemented code or a detailed design. 