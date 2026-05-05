# Lab 5 - Starter
Sam Zubatiy

Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

## GitHub Pages
- Expose: https://samzubatiy.github.io/Lab5_Starter/expose.html
- Explore: https://samzubatiy.github.io/Lab5_Starter/explore.html

## Check Your Understanding

1) Would you use a unit test to test the "message" feature of a messaging application? Why or why not? For this question, assume the "message" feature allows a user to write and send a message to another user.

No. The message feature requires multiple components to work together (the UI, the network layer, the server, and the recipient's client). A unit test isolates a single function in isolation, so it can't verify that all these pieces integrate correctly.

2) Would you use a unit test to test the "max message length" feature of a messaging application? Why or why not? For this question, assume the "max message length" feature prevents the user from typing more than 80 characters.

Yes. This feature can be encapsulated in a single function that takes a string and returns whether it's within the 80-character limit. A unit test can easily verify this logic with inputs at, above, and below the boundary without needing any external dependencies.
