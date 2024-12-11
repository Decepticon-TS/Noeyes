# user_activity_simulator/config.py
from dataclasses import dataclass

@dataclass
class SimulatorConfig:
    """Configuration for user activity simulation."""
    
    # Tab switching settings
    MIN_TAB_INTERVAL: float = 120  # Minimum interval between tab switches (seconds)
    MAX_TAB_INTERVAL: float = 180  # Maximum interval between tab switches (seconds)
    
    # Mouse movement settings
    MIN_MOUSE_MOVE_INTERVAL: float = 60  # Minimum interval between mouse movements
    MAX_MOUSE_MOVE_INTERVAL: float = 120  # Maximum interval between mouse movements
    
    # Movement ranges
    MOUSE_MOVEMENT_RANGE: int = 20  # Pixels to move
    MAX_ARROW_PRESSES: int = 3  # Maximum number of arrow key presses