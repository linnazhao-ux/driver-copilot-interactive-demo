# Driver Co-pilot Interactive Demo

This package contains the full local static demo.

## Run on macOS

1. Unzip the package.
2. Double-click `start-server.command`.
3. The script will start a local server and open the demo in your browser automatically.

If macOS blocks the script, open Terminal in this folder and run:

```bash
chmod +x start-server.command
./start-server.command
```

## Run on Windows

1. Unzip the package.
2. Double-click `start-server.bat`.
3. The script will start a local server and open the demo in your browser automatically.

## Notes

- This is a static demo. No backend installation is required.
- The hard-to-find navigation view may need internet access because it uses online map services.
- If port `4174` is occupied, the startup script automatically uses the next available port and opens the correct URL.
