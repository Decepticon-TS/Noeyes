# User Activity Simulator

## Overview
This Python backend service simulates user activity by automatically switching between tabs and performing randomized mouse movements.

## Prerequisites
- Python 3.8+
- pip (Python package manager)

## Installation
1. Clone the repository
2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Running the Service
```bash
python main.py
```

## API Endpoints
- `POST /start`: Begin simulation
- `POST /pause`: Pause ongoing simulation
- `POST /resume`: Resume paused simulation
- `POST /kill`: Terminate simulation

## Configuration
Modify `user_activity_simulator/config.py` to adjust:
- Tab switching intervals
- Mouse movement ranges
- Maximum arrow key presses

## Important Notes
- Requires system-level input simulation permissions
- Works best on Windows, macOS, and Linux
- Use responsibly and ethically

## Disclaimer
This tool is for legitimate use cases like preventing screen locks or maintaining remote session presence.