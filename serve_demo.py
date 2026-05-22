#!/usr/bin/env python3
import errno
import functools
import http.server
import os
import socketserver
import sys
import threading
import time
import webbrowser
from pathlib import Path


ROOT = Path(__file__).resolve().parent
HOST = "127.0.0.1"
START_PORT = 4174
MAX_PORT = 4274


class DemoServer(socketserver.ThreadingTCPServer):
    allow_reuse_address = True
    daemon_threads = True


def make_server():
    handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=str(ROOT))
    last_error = None
    for port in range(START_PORT, MAX_PORT + 1):
        try:
            return port, DemoServer((HOST, port), handler)
        except OSError as exc:
            last_error = exc
            if exc.errno in (errno.EADDRINUSE, 48, 98, 10048):
                continue
            raise
    raise RuntimeError(f"No available port found between {START_PORT} and {MAX_PORT}. Last error: {last_error}")


def main():
    try:
        port, server = make_server()
    except (RuntimeError, OSError) as exc:
        print(f"Unable to start the local demo server: {exc}")
        try:
            input("Press Enter to exit...")
        except EOFError:
            pass
        return 1

    url = f"http://{HOST}:{port}/"
    print(f"Driver Co-pilot Interactive Demo is running at {url}")
    if port != START_PORT:
        print(f"Port {START_PORT} was occupied, so this session is using port {port}.")
    print("Opening the demo in your browser...")
    print("Keep this window open while viewing the demo. Press Control+C to stop.")

    if os.environ.get("DRIVER_DEMO_NO_BROWSER") != "1":
        threading.Timer(0.8, lambda: webbrowser.open(url)).start()

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
    finally:
        server.server_close()
    return 0


if __name__ == "__main__":
    time.sleep(0.1)
    sys.exit(main())
