## Reflection

**One thing I learned:**  
How to update object state in React immutably using the functional form of `setState`. This helped avoid stale or incorrect state when multiple updates happen.

**One bug I fixed:**  
At first, the percentages in `MoodStats` showed "NaN%" when there were no votes. I fixed this by adding a check: `total === 0 ? "0%" : ...` to prevent divide-by-zero.
