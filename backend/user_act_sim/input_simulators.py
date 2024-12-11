# user_activity_simulator/input_simulators.py
import random
import pyautogui
import platform
import logging

pyautogui.FAILSAFE = False

class InputSimulator:
    """Handles cross-platform input simulation."""
    
    @staticmethod
    def switch_tab():
        """
        Simulate Alt+Tab to switch between applications.
        Works across different platforms.
        """
        try:
            current_os = platform.system().lower()
            
            if current_os == 'windows': #
                pyautogui.hotkey('alt', 'tab')
            elif current_os == 'darwin': # macOS
                pyautogui.hotkey('command', 'tab')
            elif current_os == 'linux':
                pyautogui.hotkey('alt', 'tab')
            else:
                logging.warning(f"Unsupported operating system: {current_os}")
                return False
            
            arrow_keys = ['left', 'right', 'up', 'down']
            num_presses = random.randint(0, 2)
            
            for _ in range(num_presses):
                pyautogui.press(random.choice(arrow_keys))
                
        except Exception as e:
            logging.error(f"Error in switch_tab: {e}")
            return False
    
    @staticmethod
    def simulate_mouse_movement(max_range=20):
        """
        Simulate small, subtle mouse movements.
        
        :param max_range: Maximum pixel range for movement
        :return: Boolean indicating success
        """
        try:
            # Get current mouse position
            current_x, current_y = pyautogui.position()
            
            # Calculate small random movement
            dx = random.randint(-max_range, max_range)
            dy = random.randint(-max_range, max_range)
            
            # Move mouse
            pyautogui.moveTo(current_x + dx, current_y + dy, duration=0.25)
            return True
        except Exception as e:
            logging.error(f"Error in simulate_mouse_movement: {e}")
            return False