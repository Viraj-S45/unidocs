---
title: My Home Lab [Server] Setup
slug: my-home-lab-setup
tags:
  - self-hosted
---
Welcome to a walkthrough of my home lab setup! I’ve repurposed an old, unused PC into a functional home server that I now use to host various self-hosted services. In this post, I’ll share details about the hardware, operating system, and the services I run using Docker containers.
<!-- truncate -->
---

## Hardware Overview

The foundation of my home lab is an old PC that I transformed into a server. Here are its specifications:

- **CPU**: Intel i3-3220 (4 cores) @ 3.300GHz  
- **GPU**: Intel HD Graphics  
- **RAM**: 6GB  
- **Storage**:  
  - 1TB HDD  
  - 500GB SSD  
- **Network**: Ethernet connection with 24x7 uptime and 40MBps speed  

This setup provides enough power and storage for my current needs. Plus, it runs efficiently and handles my workload without any issues.

---

## Operating System

I initially used **Ubuntu Server** as my server operating system. While it worked well, I encountered some minor issues, which led me to switch to **Debian GNU/Linux 12**. Debian’s stability and simplicity make it an excellent choice for a home server.

I manage the server remotely by **SSH** from my main computer, which runs **Arch Linux**, making it easy to maintain and configure.

---

## Docker Containers

To maximize the potential of my home lab, I use **Docker** to run various services in isolated containers. Docker makes it easy to deploy, update, and manage services efficiently.

Here are the 17 Docker containers currently running on my server:

1. **[Changedetection](https://github.com/dgtlmoon/changedetection.io)**: Monitors website changes and sends notifications.  
2. **[Coder](https://github.com/coder/coder)**: A cloud-based IDE for collaborative coding.  
3. **[File Browser](https://github.com/filebrowser/filebrowser)**: A web-based file management tool.  
4. **[Homarr](https://github.com/ajnart/homarr)**: A customizable dashboard for all apps and services.  
5. **[Homepage](https://github.com/gethomepage/homepage)**: A simple and customizable homepage for managing links.  
6. **[Mealie](https://github.com/mealie-recipes/mealie)**: A recipe manager and meal planner.  
7. **[Navidrome](https://github.com/navidrome/navidrome)**: A lightweight, self-hosted music server.  
8. **[Nextcloud](https://github.com/nextcloud/server)**: A productivity platform for file syncing and collaboration.  
9. **[Nexterm](https://github.com/gnmyt/Nexterm)**: A server management tool supporting SSH, VNC, and RDP.  
10. **[Pingvin Share](https://github.com/stonith404/pingvin-share)**: A secure file-sharing service.  
11. **[Stirling PDF](https://github.com/Stirling-Tools/Stirling-PDF)**: A PDF management and processing tool.  
12. **[Metube (yt-dlp)](https://github.com/alexta69/metube)**: A tool for downloading videos.  
13. **[Jellyfin](https://github.com/jellyfin/jellyfin)**: A media server for personal media files.  
14. **[Kavita](https://github.com/Kareadita)**: A self-hosted ebook management service.  
15. **[Speedtest Tracker](https://github.com/alexjustesen/speedtest-tracker)**: Tracks and logs internet speed tests.  
16. **[Syncthing](https://github.com/syncthing/syncthing)**: Synchronizes files across devices.  
17. **[Portainer](https://docs.portainer.io/start/install-ce/server/docker/linux)**: A powerful tool to manage Docker containers.  

---

## Future Plans

While my current setup meets my needs, I have plans to enhance it further:

- **Reverse Proxy**: I plan to set up a reverse proxy for easier service access and management.  
- **Separate Authentication**: To improve security, I will configure authentication for accessing my services.  
- **Custom Domain**: I’m considering using a custom domain to access my server remotely.

---

## Conclusion

This home lab setup has been a rewarding project, allowing me to learn, experiment, and host services that improve productivity and simplify tasks. While I’ve focused on the services I use the most, there’s an endless array of possibilities for what you can do with your own home lab.

If you’re interested in building a home lab or exploring similar services, check out my other blog posts and documentation for step-by-step guidance!

---
