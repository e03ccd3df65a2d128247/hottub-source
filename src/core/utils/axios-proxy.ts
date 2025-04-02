import axios, { AxiosInstance } from "axios";

import { HttpsProxyAgent } from "https-proxy-agent";

export function parseProxy(proxy: string | undefined): {
  host: string | null;
  port: string | null;
  username: string | null;
  password: string | null;
  url: string | null;
} {
  const [host, port, username, password] = proxy?.split(":") ?? [];
  if (!host || !port || !username || !password) {
    console.warn("No proxy URL provided, creating standard Axios instance");
    return { host: null, port: null, username: null, password: null, url: null };
  }

  const url = `http://${username}:${password.trim()}@${host}:${port}`;
  return { host, port, username, password, url };
}

export function getProxyUrl(proxy: string | undefined): string | null {
  const { url } = parseProxy(proxy);
  if (!url) {
    // console.warn("No proxy URL provided, creating standard Axios instance");
    return null;
  }

  // Ensure proxy configuration is correctly applied
  return url;
}

// Function to test the proxy connection
export async function testProxyConnection(axiosInstance: AxiosInstance): Promise<boolean> {
  try {
    // Make a request without proxy (using default axios)
    const directIpReq = axios.get("https://httpbin.org/ip").then((res) => res.data.origin.split(",")[0].trim());
    // Make a request with the proxy
    const proxyIpReq = axiosInstance.get("https://httpbin.org/ip").then((res) => res.data.origin.split(",")[0].trim());

    const [directIp, proxyIp] = await Promise.all([directIpReq, proxyIpReq]);

    // Compare the IPs
    if (proxyIp !== directIp) {
      console.log("✅ Proxy is working correctly! Traffic is routed through a different IP.");
      return true;
    } else {
      console.error("❌ Proxy test failed: Both requests are using the same IP address.");
      return false;
    }
  } catch (error) {
    console.error("❌ Error connecting to the proxy:", error);
    return false;
  }
}

// Helper function to create an Axios instance with optional proxy support
export function createAxiosInstanceWithProxy(proxy: string | undefined): AxiosInstance {
  const proxyUrl = getProxyUrl(proxy);
  if (!proxyUrl) return axios.create();

  const httpsAgent = new HttpsProxyAgent(proxyUrl);

  return axios.create({
    httpsAgent,
    proxy: false, // Important: disable axios's built-in proxy handling when using an agent
  });
}
