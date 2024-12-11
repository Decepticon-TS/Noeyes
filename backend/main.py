# main.py
import uvicorn
from user_act_sim.api_server import APIServer

def run_server():
    """
    Launch the User Activity Simulator API server.
    """
    server = APIServer()
    uvicorn.run(server.app, host="0.0.0.0", port=8000)

if __name__ == "__main__":
    run_server()