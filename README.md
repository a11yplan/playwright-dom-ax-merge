# Accessibility Analysis Challenge

Welcome! This is a coding challenge focused on creating a robust solution for analyzing webpage accessibility by merging multiple data sources.

## The Challenge

Your task is to come up (and optionally implement) a solution that combines three different accessibility data sources into one:
- DOM structure (from browser)
- Accessibility tree (ARIA, roles, properties)
- Automated accessibility test results

The goal is to create a unified data structure that combines accessibility information from multiple sources into a single, consistent format for analysis.

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

Good luck! We're excited to see your solution, whether it's implemented code or a detailed design. 