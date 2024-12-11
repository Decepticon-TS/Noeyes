# user_activity_simulator/core_simulator.py
import time
import random
import threading
import logging
import schedule
from .input_simulators import InputSimulator
from .config import SimulatorConfig

class UserActivitySimulator:
    """
    Manages automated user activity simulation.
    Handles tab switching and mouse movements.
    """
    def __init__(self, config: SimulatorConfig = None):
        """
        Initialize the simulator with optional configuration.
        
        :param config: Custom configuration object
        """
        self.config = config or SimulatorConfig()
        self.is_running = False
        self.is_paused = False
        self._scheduler_thread = None
        # Configure logging
        logging.basicConfig(
            level=logging.INFO,
            format='%(asctime)s - %(levelname)s: %(message)s'
        )
    
    def _schedule_tasks(self):
        """
        Schedule periodic tasks for tab switching and mouse movements.
        """
        def random_tab_switch():
            if not self.is_paused:
                InputSimulator.switch_tab()
        
        def random_mouse_move():
            if not self.is_paused:
                InputSimulator.simulate_mouse_movement(
                    max_range=self.config.MOUSE_MOVEMENT_RANGE
                )
        
        # Schedule tasks with random intervals
        schedule.every(
            random.uniform(
                self.config.MIN_TAB_INTERVAL, 
                self.config.MAX_TAB_INTERVAL
            )
        ).seconds.do(random_tab_switch)
        
        schedule.every(
            random.uniform(
                self.config.MIN_MOUSE_INTERVAL,
                self.config.MAX_MOUSE_INTERVAL
            )
        ).seconds.do(random_mouse_move)
        
    def start(self):
        """
        Start the user activity simulation.
        Runs in a separate thread to prevent blocking.
        """
        if not self.is_running:
            self.is_running = True
            self.is_paused = False
            self._schedule_tasks()
            
            def run_scheduler():
                while self.is_running:
                    schedule.run_pending()
                    time.sleep(1)
            
            self._scheduler_thread = threading.Thread(
                target=run_scheduler, 
                daemon=True
            )
            self._scheduler_thread.start()
            logging.info("User activity simulation started.")
            
    def pause(self):
        """
        Pause the ongoing simulation.
        """
        if self.is_running:
            self.is_paused = False
            logging.info("User activity simulation resumed.")
            
    def kill(self):
        """
        Terminate the simulation completely.
        """
        self.is_running = False
        self.is_paused = False
        
        if self._scheduler_thread:
            self._scheduler_thread.join(timeout=2)
        
        logging.info("User activity simulation terminated.")