# Talking with My Grandmother

### Project Overview

This project is designed to help maintain daily conversations with my grandmother, an elderly woman who lives alone. Given the challenges of balancing work, children, relationships, and studies, it's difficult to consistently record and engage in conversations with her. This project automates the process by sending an initial message to her and continuing the conversation afterward.

**Note:** This project is not intended to replace or diminish human interaction, but to assist in maintaining communication.

### How to Run the Project

1. **Clone the Repository**

   ```bash
   git clone git@github.com:Hudson3384/hi-grandmama.git
   ```

2. **Set Up Environment Variables**

   Copy the `.env.example` file to `.env`, then edit the `.env` file to include your grandmother's phone number.

   ```bash
   cp .env.example .env
   ```

3. **Run the Project Using Node.js**

   Make sure you are using Node.js v20+ to utilize the `--env-file` option.

   ```bash
   node --env-file=.env index.js
   ```

4. **Alternatively, Run with Docker Compose**

   Running with Docker Compose may require you to run the project locally once to scan the QR code and establish a session.

   ```bash
   docker compose up -d
   ```

### How to Contribute

Feel free to fork the repository, make improvements, and submit a pull request. Contributions are welcome and encouraged!
