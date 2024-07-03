from fastapi import FastAPI

from app.main import app as app_instance

from app.views import router


app = FastAPI()


app.include_router(router)


if __name__ == "__main__":

    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
