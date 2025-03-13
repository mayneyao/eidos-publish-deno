// Deno script to download and extract libsimple library
// Run with: deno run --allow-net --allow-read --allow-write --allow-run --allow-env scripts/download-simple.ts

function getPlatformInfo(): { name: string; arch: string; ext: string } {
  const platform = Deno.build.os;
  switch (platform) {
    case "windows":
      return { name: "windows", arch: "x64", ext: "zip" };
    case "darwin":
      return { name: "osx", arch: "x64", ext: "zip" };
    case "linux":
      return { name: "linux-ubuntu-latest", arch: "", ext: "zip" };
    default:
      throw new Error(`Unsupported platform: ${platform}`);
  }
}

async function downloadFile(url: string, destPath: string): Promise<void> {
  try {
    console.log(`Downloading from ${url}...`);
    
    // Fetch the file
    const response = await fetch(url, {
      redirect: "follow", // Automatically follow redirects
    });
    
    if (!response.ok) {
      throw new Error(`Failed to download: ${response.status} ${response.statusText}`);
    }
    
    if (!response.body) {
      throw new Error("Response body is null");
    }
    
    // Create a file and write the response to it
    const file = await Deno.open(destPath, { write: true, create: true, truncate: true });
    
    // Use streams to write the file
    await response.body.pipeTo(file.writable);
    
    // Verify file size
    const fileInfo = await Deno.stat(destPath);
    if (fileInfo.size === 0) {
      await Deno.remove(destPath);
      throw new Error("Downloaded file is empty");
    }
  } catch (error) {
    // Clean up on error
    try {
      await Deno.remove(destPath);
    } catch {
      // Ignore errors during cleanup
    }
    throw error;
  }
}

async function runCommand(cmd: string[]): Promise<void> {
  const command = new Deno.Command(cmd[0], {
    args: cmd.slice(1),
    stdout: "inherit",
    stderr: "inherit",
  });
  
  const { success, code } = await command.output();
  if (!success) {
    throw new Error(`Command failed with status: ${code}`);
  }
}

async function extract(zipPath: string, distPath: string): Promise<void> {
  try {
    if (Deno.build.os === "windows") {
      // Windows extraction
      await runCommand(["powershell", "Expand-Archive", zipPath, "-DestinationPath", ".", "-Force"]);
      
      // Find the extracted directory
      const entries = [];
      for await (const entry of Deno.readDir(".")) {
        entries.push(entry);
      }
      
      const libsimpleDir = entries.find((dir) => 
        dir.isDirectory && dir.name.startsWith("libsimple")
      )?.name;
      
      if (libsimpleDir) {
        // Move the directory
        await runCommand(["cmd", "/c", "move", libsimpleDir, "dist-simple"]);
        
        // Rename the DLL
        await runCommand(["cmd", "/c", "rename", "dist-simple\\simple.dll", "libsimple.dll"]);
      }
    } else {
      // Unix extraction
      // Test the zip file
      await runCommand(["unzip", "-t", zipPath]);
      
      // Extract the zip file
      await runCommand(["unzip", "-o", zipPath]);
      
      // Find the extracted directory
      const entries = [];
      for await (const entry of Deno.readDir(".")) {
        entries.push(entry);
      }
      
      const libsimpleDir = entries.find((dir) => 
        dir.isDirectory && dir.name.startsWith("libsimple")
      )?.name;
      
      if (libsimpleDir) {
        // Move the contents
        await runCommand(["sh", "-c", `mv "${libsimpleDir}"/* dist-simple/`]);
        
        // Remove the empty directory
        await runCommand(["rm", "-rf", libsimpleDir]);
      }

    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Extraction failed: ${error.message}`);
    } else {
      throw new Error(`Extraction failed with unknown error`);
    }
  }
}

async function main(): Promise<void> {
  let zipPath: string | null = null;
  
  try {
    const { name, arch, ext } = getPlatformInfo();
    const fileName = `libsimple-${name}${arch ? "-" + arch : ""}.${ext}`;
    const downloadUrl = `https://github.com/wangfenjin/simple/releases/latest/download/${fileName}`;
    
    // Get the directory of the current script
    const currentDir = new URL(".", import.meta.url).pathname;
    zipPath = `${currentDir}../libsimple.zip`;
    const distPath = `${currentDir}../dist-simple`;
    
    // Ensure the dist directory exists
    try {
      await Deno.mkdir(distPath, { recursive: true });
    } catch (error) {
      if (!(error instanceof Deno.errors.AlreadyExists)) {
        throw error;
      }
    }
    
    console.log(`Downloading ${downloadUrl}...`);
    await downloadFile(downloadUrl, zipPath);
    
    // Verify the file exists and is not empty
    try {
      const fileInfo = await Deno.stat(zipPath);
      if (fileInfo.size === 0) {
        throw new Error("Download failed: File is empty");
      }
    } catch (error) {
      if (error instanceof Deno.errors.NotFound) {
        throw new Error("Download failed: File is missing");
      }
      throw error;
    }
    
    console.log("Extracting...");
    await extract(zipPath, distPath);
    
    // Cleanup
    if (zipPath) {
      try {
        await Deno.remove(zipPath);
      } catch {
        // Ignore errors during cleanup
      }
    }
    
    console.log("libsimple downloaded and extracted successfully!");
    Deno.exit(0);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("Unknown error occurred");
    }
    
    // Cleanup on error
    if (zipPath) {
      try {
        await Deno.remove(zipPath);
      } catch {
        // Ignore errors during cleanup
      }
    }
    
    Deno.exit(1);
  }
}

// Run the main function
main();

