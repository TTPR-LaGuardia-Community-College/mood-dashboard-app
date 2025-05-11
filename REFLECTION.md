I learned that when updating state, instead of modifying the state directly,
we return a new state. 

A bug I encountered was that when the total amount of votes is 0, the mood 
percentage calculation yields division by 0 and displays NaN. I fixed it by 
checking whether the percentage is NaN. If the percentage is NaN, display 0, 
else, display the percentage value.
