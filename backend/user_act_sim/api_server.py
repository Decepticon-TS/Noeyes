# user_activity_simulator/api_server.py
from fastapi import FastAPI, HTTPException
from .core_simulator import UserActivitySimulator
from .config import SimulatorConfig

class APIServer:
    """
    Provides a RESTful API for controlling the user activity simulator.
    """
    
    def __init__(self):
        self.app = FastAPI(
            title="User Activity Simulator API",
            description="API for controlling automated user activity simulation"
        )
        self.simulator = UserActivitySimulator()
        self._setup_routes()
        
    def _setup_routes(self):
        """
        Define API endpoints for simulator control.
        """
        @self.app.post("/start")
        async def start_simulation():
            """Initiate the user activity simulation."""
            try:
                self.simulator.start()
                return {"status": "Simulation started successfully"}
            except Exception as e:
                raise HTTPException(status_code=500, detail=str(e))
        
        @self.app.post("/pause")
        async def pause_simulation():
            """Pause the ongoing simulation."""
            try:
                self.simulator.pause()
                return {"status": "Simulation paused successfully"}
            except Exception as e:
                raise HTTPException(status_code=500, detail=str(e))
            
        @self.app.post("/resume")
        async def resume_simulation():
            """Resume the paused simulation."""
            try:
                self.simulator.resume()
                return {"status": "Simulation resumed successfully"}
            except Exception as e:
                raise HTTPException(status_code=500, detail=str(e))
        
        @self.app.post("/kill")
        async def kill_simulation():
            """Terminate the simulation completely."""
            try:
                self.simulator.kill()
                return {"status": "Simulation terminated successfully"}
            except Exception as e:
                raise HTTPException(status_code=500, detail=str(e))