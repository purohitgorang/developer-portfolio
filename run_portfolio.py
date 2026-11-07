import http.server
import socketserver
import os
import sys

PORT = 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        # Clean terminal logging
        sys.stderr.write(f"[Portfolio Server] {self.address_string()} - {format % args}\n")

class ThreadedHTTPServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True
    allow_reuse_address = True

def main():
    print("=" * 70)
    print("       GORANG PUROHIT — NEO-BRUTALIST PORTFOLIO SERVER")
    print("=" * 70)
    print(f"[*] Serving Directory: {DIRECTORY}")
    print(f"[*] Local URL:         http://localhost:{PORT}")
    print(f"[*] Network Access:    http://127.0.0.1:{PORT}")
    print("=" * 70)

    try:
        httpd = ThreadedHTTPServer(("", PORT), Handler)
        print(f"[+] Server online on port {PORT}.\n")
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n[!] Shutting down portfolio server.")
    except Exception as e:
        print(f"[X] Server error: {e}")

if __name__ == "__main__":
    main()